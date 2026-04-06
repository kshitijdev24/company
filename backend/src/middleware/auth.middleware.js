const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized request" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded._id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
