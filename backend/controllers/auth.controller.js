const { User } = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.signup = async (req, res) => {
    try{
        const params = req.fields
        const user = new User();
        user.email = params.email;
        user.password = await bcrypt.hash(params.password, 10);
        user.first_name = params.first_name;
        user.last_name = params.last_name;
        user.user_type = params.user_type;
        user.location = params.location;
        user.headline = params.headline;
        if(params.date_of_birth){
            user.date_of_birth = params.date_of_birth;
        } 

        // saving the user with the password but deleting it when returning the user in the response
        await user.save();
        user.password = undefined;

        res.status(201).json({ 
            status: "Success",
            message: user
        });
    }catch(err){
        console.log('Error from database');
        console.log(err._message);
        res.status(400).json({ 
            status: 'Error',
            message: err._message
        });
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.fields;
    const invalid_message = 'Invalid credentials';

    const user = await User.findOne({email}).select('+password');
    if(!user){
        res.status(404).json({
            status: 'Error',
            message: invalid_message
        });
    }
    const is_match = await bcrypt.compare(password, user.password);
    if(is_match){
        const token = jwt.sign({
                id: user.id,
                email: user.email, 
                user_type: user.user_type
            }, 
            process.env.SECRET_KEY,
            {
                expiresIn: '12h'
            });
        user.password = undefined;
        user._doc.token = token;
        return res.status(200).json({
            status: 'Success',
            message: user
        });
    }
    res.status(404).json({
        status: 'Error',
        message: invalid_message
    });
}

module.exports.isEmailAlreadyUsed = async (req, res) => {
    const user = await User.findOne({email: req.query.email});

    if(user){
        return res.status(409).json({ status: "Error",
                                        message: "Email is already used" });
    }

    res.status(200).json({ status: "Success" });
}