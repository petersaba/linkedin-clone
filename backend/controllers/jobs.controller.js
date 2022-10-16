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

    try{
        await Job.findByIdAndDelete(req.query.id);
        await User.findOneAndUpdate({
                job_posts: {
                    $in: [ req.query.id ]
                } 
            },{
                $pull: { job_posts: req.query.id }
            });
        res.status(200).json({
            status: 'Success',
            message: 'Job deleted successfully'
        });
    }catch(err){
        res.status(400).json({
            status: 'Error',
            message: err.message
        });
    }
}

module.exports.getAllJobs = async (req, res) => {
    if(!req.query.id){
        const jobs = await Job.find().sort({ date_created: -1 });
        
        return res.status(200).json({
            status: 'Success',
            message: jobs
        });
    }

    const company_with_jobs = await User.findById(req.query.id).populate('job_posts');    

    res.status(200).json({
        status: 'Success',
        message: company_with_jobs.job_posts
    });
}

module.exports.getJobById = async (req, res) =>{
    if(!req.query.id){
        return res.status(400).json({
            status: 'Error',
            message: 'Job id is required'
        });
    }

    try{
        const job = await Job.findById(req.query.id);
        
        return res.status(200).json({
            status: 'Success',
            message: job
        });
    }catch(err){
        res.status(404).json({
            status: 'Error',
            message: err._message
        });
    }
}