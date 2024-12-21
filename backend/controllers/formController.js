const Form = require('../models/FormModel');

const submitForm = async (req, res) => {
    try {
        const form = new Form(req.body);
        const savedForm = await form.save();
        res.status(201).json(savedForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitForm };
