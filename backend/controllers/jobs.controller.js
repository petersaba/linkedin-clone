const { Job } = require('../models/jobs.model');
const { User } = require('../models/users.model');

module.exports.createJob = async (req, res) => {
    try{
        const params = req.fields;

        const job = await Job.create({ ...params, company_id: req.user.id});

        await User.findByIdAndUpdate(req.user.id,
            {
                $push: { job_posts: job.id }
            });

        res.status(200).json({
            status: 'Success',
            message: job
        });

    }catch(err){
        console.log('Error from database');
        res.status(400).json({
            status: 'Error',
            message: err._message
        });
    }
}

module.exports.deleteJob = async (req, res) => {
    if(!req.query.id){
        return res.status(400).json({
            status: 'Error',
            message: 'Job id is required'
        });
    }
}