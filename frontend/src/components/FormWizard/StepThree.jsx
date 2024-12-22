const StepThree = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 3: Personal Details</h2>
            <input
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <button
                onClick={handleSubmit}
                className="mt-4 bg-green-500 text-white p-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default StepThree;
