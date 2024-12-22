const Form = require('../models/FormModel');

// Submit form data
const submitForm = async (req, res) => {
    try {
        const { stepOne, stepTwo, stepThree } = req.body;

        // Validate required fields
        if (!stepOne || !stepTwo || !stepThree) {
            return res.status(400).json({ message: 'All steps are required' });
        }

        const newForm = new Form({ stepOne, stepTwo, stepThree });
        await newForm.save();

        // Fetch all submissions to return
        const allForms = await Form.find();
        res.status(201).json({ message: 'Form submitted successfully', allForms });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all form submissions
const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitForm, getForms };
