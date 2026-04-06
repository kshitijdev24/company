const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    }
}, { timestamps: true });

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

module.exports = mongoose.model('User', userSchema);
