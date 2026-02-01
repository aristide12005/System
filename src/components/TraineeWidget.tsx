export function TraineeWidget() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between w-48 h-32">
            <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                    <Groups3Icon className="w-4 h-4 text-orange-500" />
                </div>
                <button
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    title="Open Full"
                >
                    <OpenInFullIcon className="w-4 h-4" />
                </button>
            </div>
            <div>
                <p className="text-xs text-text-secondary mb-0.5">Total Trainee</p>
                <h3 className="text-xl font-bold text-text-primary">30,000</h3>
            </div>
        </div>
    );
}

function Groups3Icon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            className={className}
        >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
        </svg>
    );
}

function OpenInFullIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className={className}>
            <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80h-120v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
        </svg>
    );
}
