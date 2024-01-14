const express = require('express');
const { sendEmailConroller } = require('../Controllers/portofolioConroller');

// router objects
const router = express.Router();

// routes
router.post('/sendEmail', sendEmailConroller)

module.exports = router