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

    const company = await User.findOne({ id: req.fields.id, user_type: 'company' });
    if(!company){
        return res.status(404).json({
            status: 'Error',
            message: 'Company does not exist'
        });
    }
    
    if(company.followers){
        company.followers.push(req.user.id);
    }else{
        company.followers = [ req.user.id ];
    }
    
    await company.save();
    const user = await User.findById(req.user.id);

    if(user.following){
        user.following.push(req.fields.id);
    }else{
        user.following = [ req.fields.id ];
    }

    await user.save();

    res.status(200).json({
        status: 'Success',
        message: 'Company followed successfully'
    });
}

module.exports.unfollowCompany = async (req, res) => {
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

    const company = await User.findOne({ id: req.fields.id, user_type: 'company' });
    if(!company){
        return res.status(404).json({
            status: 'Error',
            message: 'Company does not exist'
        });
    }

    const user_index = company.followers.indexOf(req.user.id);
    // if user does not exists user_index will be -1
    if(user_index != -1){
        company.followers.splice(user_index, 1);
    }

    await company.save();
    const user = await User.findById(req.user.id);

    const company_index = user.following.indexOf(req.fields.id);
    if(user_index != -1){
        user.following.splice(company_index, 1);
    }

    await user.save();

    res.status(200).json({
        status: 'Success',
        message: 'Company unfollowed successfully'
    });
}