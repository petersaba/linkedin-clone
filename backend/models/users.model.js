const { match } = require('assert');
const mongoose = require('mongoose');
const { stringify } = require('querystring');

const EMAIL_PATTERN = /\w{3,}@\w{3,}\.\w{2,}/;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        trim: true,
        match: [EMAIL_PATTERN, 'Email format is invalid',]
    },
    password: {
        type: String,
        required: 'Password is required',
        select: false
    },
    user_type: {
        type: String,
        required: 'User type is required',
        enum: ['worker', 'company']
    },
    about: {
        type: String
    },
    location: {
        type: String
    },
    profile_url: {
        type: String
    },
    background_url: {
        type: String
    },
    website: {
        type: String
    }
});

module.exports.model = mongoose.model('User', userSchema);