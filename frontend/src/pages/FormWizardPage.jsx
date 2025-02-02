import React from 'react';
import FormWizard from '../components/FormWizard';
import {useNavigate} from "react-router-dom";

const FormWizardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Form Wizard</h1>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                List
            </button>
            <FormWizard/>
        </div>
    );
};

export default FormWizardPage;
