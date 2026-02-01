import Link from "next/link";
import {
  LayoutGrid,
  Megaphone,
  CreditCard,
  Users,
  Settings,
  Shield,
  Link as LinkIcon,
  Sparkles
} from "lucide-react";
import clsx from "clsx";

const MENU_ITEMS = [
  { label: "Home", icon: LayoutGrid, href: "/", active: true },
  { label: "Trainees", icon: Users, href: "/trainees" },
  { label: "Notes", icon: Megaphone, href: "/notes" },
  { label: "Attendance", icon: CreditCard, href: "/attendance" },
  { label: "Grades", icon: Shield, href: "/grades" },
  { label: "Documents", icon: LinkIcon, href: "/documents" },
];

const SETTINGS_ITEMS = [
  { label: "Connected Service", href: "/settings/connected" },
  { label: "Password & Security", href: "/settings/security" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar flex-shrink-0 flex flex-col h-screen sticky top-0 border-r border-gray-100 overflow-y-auto">
      {/* User Profile */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          {/* Placeholder for avatar */}
          <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-primary truncate">Justinus Lhaksana</p>
          <p className="text-xs text-text-secondary truncate">justinusl@mail.com</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
              item.active
                ? "bg-gray-100/80 text-text-primary"
                : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}

        {/* Settings */}
        <div className="pt-4">
          <div className="flex items-center gap-3 px-4 py-2 text-text-secondary text-sm font-medium cursor-pointer">
            <Settings className="w-5 h-5" />
            Settings
          </div>
          <div className="ml-12 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
            {SETTINGS_ITEMS.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Team Section Placeholder based on image dots */}
        <div className="pt-4 px-4">
          <div className="flex items-center gap-3 py-2 text-text-secondary text-sm font-medium">
            <Users className="w-5 h-5" />
            Team
          </div>
        </div>
      </nav>

      {/* Pro Access Card */}
      <div className="p-4 mt-auto">
        <div className="bg-blue-600 rounded-2xl p-4 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-semibold text-lg mb-1">Become Pro Access</h3>
            <p className="text-blue-100 text-xs mb-3">Try your experience for using more features</p>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors">
              <Sparkles className="w-4 h-4" />
              Upgrade Pro
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-50 blur-2xl"></div>
        </div>
      </div>
    </aside>
  );
}
