const express = require('express');
const { submitForm, getForms } = require('../controllers/formController');
const router = express.Router();

// Route to handle form submission
router.post('/', submitForm);

// Route to fetch all submitted forms
router.get('/', getForms);

module.exports = router;
