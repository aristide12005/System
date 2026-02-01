export function AttendanceWidget() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between h-40 w-full">
            <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-text-primary text-lg">Attendance</h3>
                <div className="p-1.5 bg-gray-50 rounded-lg text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
            </div>

            <div className="space-y-4">
                {/* Last Class */}
                <div>
                    <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-400">Last class date</span>
                        <span className="text-text-primary font-medium">Saturday, Jan 31</span>
                    </div>
                    <div className="flex items-center gap-1 h-2">
                        {/* Present Stick */}
                        <div className="h-full bg-emerald-500 rounded-full w-[75%]"></div>
                        {/* Absent Stick */}
                        <div className="h-full bg-red-400 rounded-full w-[25%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-gray-400">
                        <span>Present</span>
                        <span>Absent</span>
                    </div>
                </div>

                {/* Today */}
                <div>
                    <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-400">Today date</span>
                        <span className="text-text-primary font-medium">Sunday 1, February</span>
                    </div>
                    <div className="flex items-center gap-1 h-2">
                        {/* Present Stick */}
                        <div className="h-full bg-emerald-500 rounded-full w-[85%]"></div>
                        {/* Absent Stick */}
                        <div className="h-full bg-red-400 rounded-full w-[15%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-gray-400">
                        <span>Present</span>
                        <span>Absent</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
