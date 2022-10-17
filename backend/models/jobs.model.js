const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Company id is required',
        ref: 'User'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    type: {
        type: String,
        required: 'Type is required',
        enum: ['On-site', 'Remote']
    },
    time: {
        type: String,
        required: 'Time is required',
        enum: ['Full-time', 'Part-time']
    },
    level: {
        type: String,
        required: 'Level is required',
        enum: ['Entry-level', 'Mid-level', 'Senior-level']
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    about: {
        type: String,
        required: 'About is required'
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports.Job = mongoose.model('Job', jobsSchema);