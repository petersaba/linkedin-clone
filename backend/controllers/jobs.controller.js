const { Job } = require('../models/jobs.model');
const { User } = require('../models/users.model');

module.exports.createJob = async (req, res) => {
    try{
        
    }catch(err){
        console.log('Error from database');
        res.status(400).json({
            status: 'Error',
            message: err._message
        });
    }
}