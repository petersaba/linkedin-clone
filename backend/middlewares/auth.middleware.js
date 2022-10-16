const jwt = require('jsonwebtoken');
const { User } = require('../models/users.model');

module.exports.authMiddleware = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({
            status: 'Error',
            message: 'Unauthorized'
        });
    }

    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({
            status: 'Error',
            message: 'Unauthorized'
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ id: decoded.id });
        req.user = user;
        next();
    }catch(err){
        res.status(401).json({
            status: 'Error',
            message: 'Unauthorized'
        });
    }
}