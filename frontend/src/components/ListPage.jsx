import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const ListPage = () => {
    const navigate = useNavigate();

    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/forms');
                if (response.ok) {
                    const data = await response.json();
                    setForms(data);
                } else {
                    console.error('Failed to fetch forms');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchForms();
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                    <th className="border border-gray-300 px-4 py-2">Company</th>
                    <th className="border border-gray-300 px-4 py-2">Age</th>
                    <th className="border border-gray-300 px-4 py-2">Gender</th>
                </tr>
                </thead>
                <tbody>
                {forms.map((form, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{form.stepOne.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{form.stepOne.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{form.stepOne.phone}</td>
                        <td className="border border-gray-300 px-4 py-2">{form.stepTwo.companyName}</td>
                        <td className="border border-gray-300 px-4 py-2">{form.stepThree.age}</td>
                        <td className="border border-gray-300 px-4 py-2">{form.stepThree.gender}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPage;
