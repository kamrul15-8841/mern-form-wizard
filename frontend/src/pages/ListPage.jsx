import React from 'react';
import {useNavigate} from "react-router-dom";
import ListPage from "../components/ListPage.jsx";

const FormWizardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Form Submissions</h1>
            <button
                onClick={() => navigate('/form-wizard')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                New Submission
            </button>
            <ListPage/>
        </div>
    );
};

export default FormWizardPage;
