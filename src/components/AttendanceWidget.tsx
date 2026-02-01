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

            <div className="space-y-3">
                {/* Last Class */}
                <div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                        <span className="text-gray-400">Last class date : Saturday, Jan 31</span>
                    </div>
                    <div className="flex items-center gap-1 h-1.5 rounded-full overflow-hidden">
                        {/* Present Stick */}
                        <div className="h-full bg-emerald-500 w-[75%]"></div>
                        {/* Absent Stick */}
                        <div className="h-full bg-red-400 w-[25%]"></div>
                    </div>
                </div>

                {/* Today */}
                <div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                        <span className="text-gray-400">Today date : Sunday 1, February</span>
                    </div>
                    <div className="flex items-center gap-1 h-1.5 rounded-full overflow-hidden">
                        {/* Present Stick */}
                        <div className="h-full bg-emerald-500 w-[85%]"></div>
                        {/* Absent Stick */}
                        <div className="h-full bg-red-400 w-[15%]"></div>
                    </div>
                </div>

                <div className="flex justify-start gap-4 text-[9px] text-gray-400">
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Present</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Absent</span>
                </div>
            </div>
        </div>
    );
}
