const { User } = require('../models/users.model');

module.exports.editProfile = async (req, res) => {
    const params = req.fields;
    console.log(params);
    const user = await User.findByIdAndUpdate(req.user.id, { ...params });

    res.status(204).json({status: 'Success'});
}