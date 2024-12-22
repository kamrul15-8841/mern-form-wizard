const StepOne = ({ formData, handleChange }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Step 1: User Details</h2>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            />
            <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="block w-full p-2 border border-gray-300 rounded mt-2"
            ></textarea>
        </div>
    );
};

export default StepOne;
