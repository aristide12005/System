"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { age: '15-24', male: -100, female: 50 },
    { age: '25-34', male: -120, female: 110 },
    { age: '35-44', male: -90, female: 60 },
    { age: '45-54', male: -40, female: 20 },
    { age: '55-64', male: -20, female: 15 },
    { age: '+64', male: -10, female: 10 },
];

export function AudienceChart() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
            <h3 className="font-semibold text-text-primary mb-6">Audience Age & Gender</h3>

            <div className="flex-1 w-full min-h-[250px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data}
                        stackOffset="sign"
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="age"
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            width={40}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            formatter={(value: any) => Math.abs(value)}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend
                            verticalAlign="top"
                            align="center"
                            height={36}
                            iconType="circle"
                            wrapperStyle={{ fontSize: '12px', fontWeight: 500 }}
                        />
                        <Bar name="Male" dataKey="male" fill="#2563EB" barSize={20} radius={[4, 0, 0, 4]} />
                        <Bar name="Female" dataKey="female" fill="#10B981" barSize={20} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>

                <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-4">
                    <span>100k</span>
                    <span>75k</span>
                    <span>50k</span>
                    <span>25k</span>
                    <span>0</span>
                    <span>25k</span>
                    <span>50k</span>
                    <span>75k</span>
                    <span>100k</span>
                </div>
            </div>
        </div>
    );
}
