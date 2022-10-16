const { User } = require('../models/users.model');

module.exports.followCompany = async (req, res) => {
    if(req.user.user_type != 'worker'){
        return res.status(400).json({
            status: 'Error',
            message: 'User is not a worker'
        });
    }

    if(!req.fields.id){
        return res.status(400).json({
            status: 'Error',
            message: 'Company id is required'
        });
    }

    const company = await User.findOne({ id: req.fields.id, user_type: 'company'});
    if(!company){
        return res.status(404).json({
            status: 'Error',
            message: 'Company does not exist'
        });
    }   
}