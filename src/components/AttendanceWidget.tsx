"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function AttendanceWidget() {
    const [viewMode, setViewMode] = useState<'bar' | 'pie'>('bar');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Data for Pie Charts
    const lastClassData = [
        { name: 'Present', value: 75, color: '#10b981' }, // emarald-500
        { name: 'Absent', value: 25, color: '#f87171' },  // red-400
    ];

    const todayData = [
        { name: 'Present', value: 85, color: '#10b981' },
        { name: 'Absent', value: 15, color: '#f87171' },
    ];

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between h-32 w-full relative">
            <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-text-primary text-sm">Attendance</h3>
                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 hover:bg-gray-50 rounded text-gray-400 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-10 text-xs">
                            <button
                                onClick={() => {
                                    setViewMode(viewMode === 'bar' ? 'pie' : 'bar');
                                    setIsMenuOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 text-text-secondary hover:bg-gray-50 flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                </svg>
                                Change View
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full text-left px-3 py-2 text-text-secondary hover:bg-gray-50 flex items-center gap-2"
                            >
                                <OpenInFullIcon className="h-3 w-3 text-text-secondary" />
                                Open
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {viewMode === 'bar' ? (
                <div className="grid grid-cols-2 gap-6 h-full items-center">
                    {/* Last Class - Bar View */}
                    <div className="border-r border-gray-100 pr-4">
                        <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1.5">
                            <span className="text-gray-400">Last class : Sat, Jan 31</span>
                        </div>
                        <div className="flex gap-2">
                            {/* Present Stick */}
                            <div className="flex-1">
                                <div className="flex justify-between text-[9px] mb-0.5">
                                    <span className="text-gray-400">Present</span>
                                    <span className="text-emerald-600 font-medium">75%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full w-[75%]"></div>
                                </div>
                            </div>
                            {/* Absent Stick */}
                            <div className="flex-1">
                                <div className="flex justify-between text-[9px] mb-0.5">
                                    <span className="text-gray-400">Absent</span>
                                    <span className="text-red-500 font-medium">25%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-400 rounded-full w-[25%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Today - Bar View */}
                    <div className="pl-2">
                        <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1.5">
                            <span className="text-gray-400">Today : Sun, Feb 1</span>
                        </div>
                        <div className="flex gap-2">
                            {/* Present Stick */}
                            <div className="flex-1">
                                <div className="flex justify-between text-[9px] mb-0.5">
                                    <span className="text-gray-400">Present</span>
                                    <span className="text-emerald-600 font-medium">85%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
                                </div>
                            </div>
                            {/* Absent Stick */}
                            <div className="flex-1">
                                <div className="flex justify-between text-[9px] mb-0.5">
                                    <span className="text-gray-400">Absent</span>
                                    <span className="text-red-500 font-medium">15%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-400 rounded-full w-[15%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 h-full items-center">
                    {/* Last Class - Pie View */}
                    <div className="flex items-center gap-2 border-r border-gray-100 pr-2 h-full">
                        <div className="h-16 w-16 relative flex-shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={lastClassData}
                                        innerRadius={15}
                                        outerRadius={30}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {lastClassData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[10px] text-gray-400 leading-tight">Last Class</p>
                            <div className="flex items-center gap-1 text-[9px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span className="text-text-primary">75%</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                <span className="text-text-primary">25%</span>
                            </div>
                        </div>
                    </div>

                    {/* Today - Pie View */}
                    <div className="flex items-center gap-2 pl-2 h-full">
                        <div className="h-16 w-16 relative flex-shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={todayData}
                                        innerRadius={15}
                                        outerRadius={30}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {todayData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[10px] text-gray-400 leading-tight">Today</p>
                            <div className="flex items-center gap-1 text-[9px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span className="text-text-primary">85%</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                <span className="text-text-primary">15%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
