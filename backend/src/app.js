const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Routes
const userRoutes = require('./routes/user.routes');
const contactRoutes = require('./routes/contact.routes');
const careerRoutes = require('./routes/career.routes');

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careerRoutes);

module.exports = app;