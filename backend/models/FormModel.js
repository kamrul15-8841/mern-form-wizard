const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    stepOne: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
    stepTwo: {
        companyName: { type: String, required: true },
        cardNo: { type: String, required: true },
    },
    stepThree: {
        age: { type: Number, required: true },
        gender: { type: String, required: true },
    },
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
