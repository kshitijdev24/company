const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career.controller');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/apply', upload.single('resume'), careerController.submitApplication);

module.exports = router;
