import { ThumbsUp } from "lucide-react";

export function TraineeWidget() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between w-64 h-40">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                <ThumbsUp className="w-5 h-5 text-orange-500" />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-1">Total Trainee</p>
                <h3 className="text-2xl font-bold text-text-primary">30,000</h3>
            </div>
        </div>
    );
}
