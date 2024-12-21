import React, { useState } from 'react';
import ProgressBar from '../components/FormWizard/ProgressBar';
import StepOne from '../components/FormWizard/StepOne';
import StepTwo from '../components/FormWizard/StepTwo';
import StepThree from '../components/FormWizard/StepThree';

const FormWizardPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        stepOne: { name: '', email: '' },
        stepTwo: { address: '', city: '' },
        stepThree: { summary: '' },
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="max-w-md mx-auto p-4">
            <ProgressBar step={step} />
            {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <StepThree formData={formData} setFormData={setFormData} prevStep={prevStep} />}
        </div>
    );
};

export default FormWizardPage;
