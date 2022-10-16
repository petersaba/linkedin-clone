const jwt = require('jsonwebtoken');
const { User } = require('../models/users.model');

module.exports.authMiddleware = async (req, res, next) => {
    if(!req.authorization){
        return res.status(401).json({
            status: 'Error',
            message: 'Unauthorized'
        });
    }

    next();
}