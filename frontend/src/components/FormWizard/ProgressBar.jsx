import React from 'react';

const ProgressBar = ({ step }) => {
    const progress = (step / 3) * 100;

    return (
        <div className="relative w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
                style={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500 ease-in-out"
            ></div>
        </div>
    );
};

export default ProgressBar;
