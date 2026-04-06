const User = require('../models/user.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        const token = user.generateAuthToken();

        const createdUser = await User.findById(user._id).select("-password");

        res.status(201).cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        }).json({
            user: createdUser,
            token,
            message: "User registered successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message, stack: error.stack });
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await user.isPasswordCorrect(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = user.generateAuthToken();

        const loggedInUser = await User.findById(user._id).select("-password");

        res.status(200).cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        }).json({
            user: loggedInUser,
            token,
            message: "Logged in successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports.logoutUser = async (req, res, next) => {
    try {
        res.status(200).clearCookie('token').json({
            message: "Logged out successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports.getProfile = async (req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        });
    } catch (error) {
        next(error);
    }
};
