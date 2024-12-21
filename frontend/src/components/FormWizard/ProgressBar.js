const ProgressBar = ({ step }) => {
    const progress = (step / 3) * 100;

    return (
        <div className="w-full bg-gray-200 h-2 rounded-lg">
            <div
                style={{ width: `${progress}%` }}
                className="h-2 bg-blue-500 rounded-lg"
            ></div>
        </div>
    );
};

export default ProgressBar;
