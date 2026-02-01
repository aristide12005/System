import { Search, Bell } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 bg-transparent flex items-center justify-between px-8 py-4 sticky top-0 z-10">
            {/* Search */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search something..."
                        className="w-full bg-white border-none rounded-xl py-2.5 pl-10 pr-4 text-sm text-text-primary shadow-sm focus:ring-2 focus:ring-blue-100 outline-none transition-shadow"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-full shadow-sm">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-100">
                        <img src="/ernam-logo.jpg" alt="ERNAM" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-semibold text-text-primary leading-none">ERNAM</p>
                        <p className="text-[10px] text-text-secondary leading-none mt-1">Brand</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
