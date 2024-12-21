const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value } });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 2: Address Information</h2>
            <input
                name="address"
                value={formData.stepTwo.address}
                onChange={handleChange}
                placeholder="Address"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
                name="city"
                value={formData.stepTwo.city}
                onChange={handleChange}
                placeholder="City"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <div className="mt-4 flex justify-between">
                <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
                    Back
                </button>
                <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepTwo;
