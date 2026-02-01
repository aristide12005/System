import { FileText } from "lucide-react";

export function DocumentsWidget() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between w-48 h-32">
            <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-500" />
                </div>
                <button
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    title="Open Full"
                >
                    <OpenInFullIcon className="w-4 h-4" />
                </button>
            </div>
            <div>
                <p className="text-xs text-text-secondary mb-0.5">Total Documents</p>
                <h3 className="text-xl font-bold text-text-primary">32</h3>
            </div>
        </div>
    );
}

function OpenInFullIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className={className}>
            <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80h-120v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
        </svg>
    );
}
