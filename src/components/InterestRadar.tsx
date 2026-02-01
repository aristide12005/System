"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { subject: 'Technology', A: 120, B: 110, C: 60, fullMark: 150 },
    { subject: 'Fashion', A: 98, B: 130, C: 60, fullMark: 150 },
    { subject: 'Cosmetics', A: 86, B: 130, C: 90, fullMark: 150 },
    { subject: 'Watches', A: 99, B: 100, C: 121, fullMark: 150 },
    { subject: 'Others', A: 85, B: 90, C: 50, fullMark: 150 },
    { subject: 'Memes', A: 65, B: 85, C: 50, fullMark: 150 },
    { subject: 'Cars', A: 65, B: 85, C: 100, fullMark: 150 },
];

export function InterestRadar() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
            <h3 className="font-semibold text-text-primary mb-2">Follower Interest</h3>

            <div className="flex-1 min-h-[250px] relative -ml-6">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid gridType="polygon" stroke="#E5E7EB" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />

                        <Radar name="Tiktok" dataKey="A" stroke="#FBBF24" fill="#FBBF24" fillOpacity={0} strokeWidth={2} />
                        <Radar name="Twitter" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0} strokeWidth={2} />
                        <Radar name="Facebook" dataKey="C" stroke="#2563EB" fill="#2563EB" fillOpacity={0} strokeWidth={2} />

                        <Legend
                            iconType="plainline"
                            align="center"
                            verticalAlign="bottom"
                            wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
