const StepTwo = ({ formData, handleChange }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 2: Company Document</h2>
            <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
                name="cardNo"
                value={formData.cardNo}
                onChange={handleChange}
                placeholder="Card No"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
        </div>
    );
};

export default StepTwo;
