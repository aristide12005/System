import { FileText } from "lucide-react";

export function DocumentsWidget() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between w-48 h-32">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                <FileText className="w-4 h-4 text-blue-500" />
            </div>
            <div>
                <p className="text-xs text-text-secondary mb-0.5">Total Documents</p>
                <h3 className="text-xl font-bold text-text-primary">32</h3>
            </div>
        </div>
    );
}
