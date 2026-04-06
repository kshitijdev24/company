const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    coverLetter: { type: String },
    githubLink: { type: String },
    portfolioLink: { type: String },
    resumePath: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
