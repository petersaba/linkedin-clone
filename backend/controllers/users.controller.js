const { User } = require('../models/users.model');

module.exports.isEmailAlreadyUsed = async (req, res) => {
    const user = await User.findOne({email: req.query.email});

    if(user){
        return res.status(409).json({ status: "Error",
                                        message: "Email is already used" });
    }

    res.status(200).json({ status: "Success" });
}