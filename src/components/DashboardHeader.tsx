"use client";

import { ChevronLeft, MoreVertical, LogOut, Settings, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardHeader() {
    const [currentDate, setCurrentDate] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xl font-bold">
                    A
                </div>
                <div>
                    <h1 className="text-xl font-bold text-text-primary">Blue Chips Chicago</h1>
                    <p className="text-sm text-text-secondary">Diam nullam quis nunc et pretium augue.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-text-secondary">Status</span>
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">Active</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <span>Current Time</span>
                    <span className="font-semibold text-text-primary">{currentDate || "Loading..."}</span>
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
