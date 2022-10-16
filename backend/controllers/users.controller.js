const { User } = require('../models/users.model');
const { base64ToImage } = require('../utilities/utilities');

module.exports.editProfile = async (req, res) => {
    const params = req.fields;
    if(params.profile_url){
        delete params.profile_url;
    }
    if(params.background_url){
        delete params.background_url;
    }
    
    let unique_date = new Date();
    unique_date = JSON.stringify(unique_date).replace(/"/g, '');
    if(params.profile_image){
        const image_name = `profile${req.user.id}${unique_date}`;
        params.profile_url = base64ToImage(params.profile_image, image_name);
    }
    if(params.background_image){
        const image_name = `background${req.user.id}`;
        params.background_url = base64ToImage(params.background_image, image_name);
    }

    const user = await User.findByIdAndUpdate(req.user.id, { ...params });

    console.log(user);
    res.status(200).json({
        status: 'Success',
        message: user
    });
}

module.exports.getUserData = async (req, res) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        status: 'Success',
        message: user
    });
}