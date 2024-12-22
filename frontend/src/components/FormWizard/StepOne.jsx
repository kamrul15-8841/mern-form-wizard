const StepOne = ({ formData, setFormData, nextStep }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, stepOne: { ...formData.stepOne, [e.target.name]: e.target.value } });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 1: Personal Information</h2>
            <input
                name="name"
                value={formData.stepOne.name}
                onChange={handleChange}
                placeholder="Name"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
                name="email"
                value={formData.stepOne.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <button onClick={nextStep} className="mt-4 bg-blue-500 text-white p-2 rounded">
                Next
            </button>
        </div>
    );
};

export default StepOne;
