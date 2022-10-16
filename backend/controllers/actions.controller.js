const { User } = require('../models/users.model');

module.exports.followCompany = async (req, res) => {
    if(req.user.user_type != 'worker'){
        return res.status(400).json({
            status: 'Error',
            message: 'User is not a worker'
        });
    }
}