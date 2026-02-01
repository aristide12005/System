import { Plus } from "lucide-react";

const INFLUENCERS = [
    { name: "Malik Wiwoho", projects: 23, followers: "1,620,201", avatar: "https://i.pravatar.cc/150?u=1" },
    { name: "Nancy Aulia", projects: 34, followers: "1,224,820", avatar: "https://i.pravatar.cc/150?u=2" },
    { name: "Natasha Viresta", projects: 12, followers: "1,100,491", avatar: "https://i.pravatar.cc/150?u=3" },
    { name: "Wilona Hamda", projects: 8, followers: "927,421", avatar: "https://i.pravatar.cc/150?u=4" },
    { name: "Rava Nanda", projects: 10, followers: "827,810", avatar: "https://i.pravatar.cc/150?u=5" },
];

export function InfluencerTable() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-text-primary">Influencer</h3>
                <button className="flex items-center gap-1 text-blue-500 text-xs font-semibold hover:text-blue-600 transition-colors">
                    <Plus className="w-3 h-3" />
                    Add Influencer
                </button>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-text-secondary uppercase tracking-wider border-b border-gray-100">
                            <th className="pb-3 font-medium">Name</th>
                            <th className="pb-3 font-medium text-right">Projects</th>
                            <th className="pb-3 font-medium text-right">Follower</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {INFLUENCERS.map((influencer) => (
                            <tr key={influencer.name} className="group">
                                <td className="py-3 flex items-center gap-3">
                                    <img src={influencer.avatar} alt={influencer.name} className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
                                    <span className="text-sm font-medium text-text-primary group-hover:text-blue-600 transition-colors cursor-pointer">{influencer.name}</span>
                                </td>
                                <td className="py-3 text-right text-sm text-text-secondary">{influencer.projects}</td>
                                <td className="py-3 text-right text-sm text-text-secondary">{influencer.followers}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
