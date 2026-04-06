const Career = require('../models/career.model');

module.exports.submitApplication = async (req, res, next) => {
    try {
        const { name, email, role, experience, coverLetter, githubLink, portfolioLink } = req.body;
        const resumePath = req.file ? req.file.path : null;

        if (!name || !email || !role || !experience) {
            return res.status(400).json({ message: "Required fields are missing" });
        }
        
        await Career.create({ name, email, role, experience, coverLetter, githubLink, portfolioLink, resumePath });
        
        res.status(201).json({ message: "Application submitted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
