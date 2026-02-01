"use client";

import { ChevronLeft, MoreVertical, LogOut, Settings, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardHeader() {
    const [currentDate, setCurrentDate] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    useEffect(() => {
        // Initial formatted date
        const formatDate = () => {
            const now = new Date();
            return new Intl.DateTimeFormat('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(now);
        };

        setCurrentDate(formatDate());

        const interval = setInterval(() => {
            setCurrentDate(formatDate());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-gray-100">
                    <img src="/financial-plan-banner.png" alt="Financial Plan" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-text-primary">Financial Mathematics</h1>
                    <p className="text-sm text-text-secondary">Analyzin accounts and thier situations</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-text-secondary">Status</span>
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">Active</span>
                </div>

                {/* Date/Time with Calendar Dropdown */}
                <div className="relative">
                    <div
                        className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer"
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    >
                        <span>Current Time</span>
                        <span className="font-semibold text-text-primary hover:text-blue-600 transition-colors select-none">
                            {currentDate || "Loading..."}
                        </span>
                    </div>

                    {isCalendarOpen && <SimpleCalendar />}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
                        aria-label="Menu"
                    >
                        <MoreVertical className="w-5 h-5" />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                            <button className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary flex items-center gap-2">
                                <RefreshCw className="w-4 h-4" /> Refresh
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary flex items-center gap-2">
                                <Settings className="w-4 h-4" /> Settings
                            </button>
                            <div className="h-px bg-gray-100 my-1"></div>
                            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2">
                                <LogOut className="w-4 h-4" /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SimpleCalendar() {
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    return (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 w-64">
            <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-text-primary">{currentMonth} {currentYear}</span>
                <div className="flex gap-1">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
                        <ChevronLeft className="w-4 h-4 rotate-180" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400 font-medium">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {blanks.map(b => <div key={`blank-${b}`}></div>)}
                {days.map(d => {
                    const isToday = d === today.getDate();
                    return (
                        <div
                            key={d}
                            className={`
                                w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100
                                ${isToday ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-text-primary'}
                            `}
                        >
                            {d}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
