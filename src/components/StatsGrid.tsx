import { ThumbsUp, MessageCircle, Megaphone, Eye } from "lucide-react";

const STATS = [
    {
        label: "Total Likes",
        value: "350,809",
        icon: ThumbsUp,
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50"
    },
    {
        label: "Total Comments",
        value: "186,072",
        icon: MessageCircle,
        iconColor: "text-gray-500",
        iconBg: "bg-gray-50"
    },
    {
        label: "Total Shares",
        value: "120,043",
        icon: Megaphone,
        iconColor: "text-gray-500",
        iconBg: "bg-gray-50"
    },
    {
        label: "Engagement",
        value: "48,07%",
        icon: Eye,
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50"
    },
];

export function StatsGrid() {
    return (
        <div className="grid grid-cols-2 gap-6 h-full">
            {STATS.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between h-40">
                    <div className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center mb-4`}>
                        <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-text-primary">{stat.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
