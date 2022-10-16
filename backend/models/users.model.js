const { match } = require('assert');
const mongoose = require('mongoose');

const EMAIL_PATTERN = /\w{3,}@\w{3,}\.\w{2,}/;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: 'First name is required'
    },
    last_name: {
        type: String,
        required: 'Last name is required'
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
    headline: {
        type: String,
        required: 'Headline is required'
    },
    additional_name: {
        type: String,
    },
    about: {
        type: String
    },
    location: {
        type: String,
        required: 'Location is required'
    },
    date_of_birth: {
        type: String,
    },
    profile_url: {
        type: String
    },
    background_url: {
        type: String
    },
    website: {
        type: String
    },
    job_posts: {
        type: Array
    }
});

module.exports.User = mongoose.model('User', userSchema);