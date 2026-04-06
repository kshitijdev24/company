const Contact = require('../models/contact.model');

module.exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, type, message } = req.body;
        
        if (!name || !email || !type || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        await Contact.create({ name, email, type, message });
        
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
