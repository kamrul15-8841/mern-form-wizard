import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import ProgressBar from './FormWizard/ProgressBar';
import StepOne from "./FormWizard/StepOne.jsx";
import StepTwo from "./FormWizard/StepTwo.jsx";
import StepThree from "./FormWizard/StepThree.jsx";

const FormWizard = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        stepOne: { name: '', email: '', phone: '', address: '' },
        stepTwo: { companyName: '', cardNo: '' },
        stepThree: { age: '', gender: '' },
    });

    const navigate = useNavigate();

    const handleChange = (e, stepKey) => {
        setFormData({
            ...formData,
            [stepKey]: {
                ...formData[stepKey],
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5000/api/forms', formData);
            toast.success('Form submitted successfully!');
            setTimeout(() => navigate('/'), 2000); // Redirect to list page after 2 seconds
        } catch (error) {
            toast.error('Error submitting form.');
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <StepOne
                        formData={formData.stepOne}
                        handleChange={(e) => handleChange(e, 'stepOne')}
                    />
                );
            case 2:
                return (
                    <StepTwo
                        formData={formData.stepTwo}
                        handleChange={(e) => handleChange(e, 'stepTwo')}
                    />
                );
            case 3:
                return (
                    <StepThree
                        formData={formData.stepThree}
                        handleChange={(e) => handleChange(e, 'stepThree')}
                        handleSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white shadow rounded p-6 space-y-4">
            <ProgressBar step={step} />

            {/* Step Tabs */}
            <div className="flex justify-between mb-4">
                {['Step 1: User Details', 'Step 2: Company Document', 'Step 3: Personal Details'].map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setStep(index + 1)}
                        className={`px-4 py-2 rounded transition-all ${
                            step === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Step Content with Animation */}
            <div
                className={`transition-opacity duration-500 ${
                    step === 1 ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {step === 1 && renderStepContent()}
            </div>
            <div
                className={`transition-opacity duration-500 ${
                    step === 2 ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {step === 2 && renderStepContent()}
            </div>
            <div
                className={`transition-opacity duration-500 ${
                    step === 3 ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {step === 3 && renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setStep(step - 1)}
                    disabled={step === 1}
                    className={`px-4 py-2 rounded bg-gray-500 text-white ${
                        step === 1 && 'opacity-50 cursor-not-allowed'
                    }`}
                >
                    Back
                </button>
                {step === 3 ? (
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded bg-green-500 text-white"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        onClick={() => setStep(step + 1)}
                        disabled={step === 3}
                        className={`px-4 py-2 rounded bg-blue-500 text-white ${
                            step === 3 && 'opacity-50 cursor-not-allowed'
                        }`}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormWizard;
