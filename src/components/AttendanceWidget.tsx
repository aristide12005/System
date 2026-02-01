export function AttendanceWidget() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between h-32 w-full">
            <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-text-primary text-sm">Attendance</h3>
                <div className="p-1 bg-gray-50 rounded text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
            </div>

            <div className="space-y-2.5">
                {/* Last Class */}
                <div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                        <span className="text-gray-400">Last class : Sat, Jan 31</span>
                        <div className="flex gap-2 text-[9px] font-medium">
                            <span className="text-emerald-600">75%</span>
                            <span className="text-red-500">25%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-0.5 h-1.5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[75%]"></div>
                        <div className="h-full bg-red-400 w-[25%]"></div>
                    </div>
                </div>

                {/* Today */}
                <div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                        <span className="text-gray-400">Today : Sun, Feb 1</span>
                        <div className="flex gap-2 text-[9px] font-medium">
                            <span className="text-emerald-600">85%</span>
                            <span className="text-red-500">15%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-0.5 h-1.5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%]"></div>
                        <div className="h-full bg-red-400 w-[15%]"></div>
                    </div>
                </div>

                <div className="flex justify-start gap-4 text-[9px] text-gray-400 pt-0.5">
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Present</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Absent</span>
                </div>
            </div>
        </div>
    );
}
