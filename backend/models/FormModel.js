const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    stepOne: {
        name: { type: String, required: true },
        email: { type: String, required: true },
    },
    stepTwo: {
        address: { type: String, required: true },
        city: { type: String, required: true },
    },
    stepThree: {
        summary: { type: String, required: true },
    },
});

module.exports = mongoose.model('Form', formSchema);
