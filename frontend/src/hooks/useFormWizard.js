import { useState } from 'react';

const useFormWizard = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    return {
        currentStep,
        stepContent: steps[currentStep],
        nextStep,
        prevStep,
    };
};

export default useFormWizard;
