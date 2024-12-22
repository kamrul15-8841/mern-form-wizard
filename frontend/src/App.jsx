import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormWizardPage from './pages/FormWizardPage.jsx';
import ListPage from "./pages/ListPage.jsx";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import styles for react-toastify

const App = () => {
    return (
        <Router>
            <ToastContainer /> {/* Render ToastContainer here */}
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/form-wizard" element={<FormWizardPage />} />
            </Routes>
        </Router>
    );
};

export default App;
