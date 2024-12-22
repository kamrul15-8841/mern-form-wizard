import axios from 'axios';

const StepThree = ({ formData, setFormData, prevStep }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, stepThree: { ...formData.stepThree, [e.target.name]: e.target.value } });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/forms', formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 3: Summary</h2>
            <textarea
                name="summary"
                value={formData.stepThree.summary}
                onChange={handleChange}
                placeholder="Write a summary..."
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            ></textarea>
            <div className="mt-4 flex justify-between">
                <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
                    Back
                </button>
                <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StepThree;
