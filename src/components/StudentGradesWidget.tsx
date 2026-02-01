"use client";

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';

const data = [
    { grade: 'A', students: 4000 },
    { grade: 'B', students: 3000 },
    { grade: 'C', students: 2000 },
    { grade: 'D', students: 2780 },
    { grade: 'E', students: 1890 },
    { grade: 'F', students: 2390 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export function StudentGradesWidget() {
    const [viewMode, setViewMode] = useState<'bar' | 'pie' | 'area'>('bar');

    const toggleView = () => {
        if (viewMode === 'bar') setViewMode('pie');
        else if (viewMode === 'pie') setViewMode('area');
        else setViewMode('bar');
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm h-64 w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-text-primary text-sm">Passing Level</h3>
                <div className="flex gap-2">
                    <button
                        onClick={toggleView}
                        className="p-1 bg-gray-50 rounded text-gray-400 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        title="Toggle View (Bar -> Pie -> Curve)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {viewMode === 'bar' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                            {viewMode === 'pie' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />}
                            {viewMode === 'area' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                        </svg>
                    </button>
                    <button
                        className="p-1 bg-gray-50 rounded text-gray-400 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                        title="Open Full"
                    >
                        <OpenInFullIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <div className="h-[200px] w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    {viewMode === 'bar' ? (
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                            barSize={20}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                            <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            <Bar dataKey="students" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    ) : viewMode === 'pie' ? (
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="students"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            <Legend verticalAlign="middle" align="right" layout="vertical" iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                        </PieChart>
                    ) : (
                        <AreaChart
                            data={data}
                            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            <Area type="monotone" dataKey="students" stroke="#3B82F6" fillOpacity={1} fill="url(#colorStudents)" />
                        </AreaChart>
                    )}
                </ResponsiveContainer>
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
