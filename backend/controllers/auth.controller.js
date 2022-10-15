const { User } = require('../models/users.model');
const bcrypt = require('bcrypt');


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

        await user.save();
        res.json(user);
    }catch(err){
        console.log('Error from database');
        console.log(err._message);
    }
}