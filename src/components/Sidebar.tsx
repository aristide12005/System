import Link from "next/link";
import {
  LayoutGrid,
  Megaphone,
  CreditCard,
  Users,
  Settings,
  Shield,
  Link as LinkIcon
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
      <nav className="flex-1 px-4 space-y-1 mt-4 flex flex-col">
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

        {/* Separator and Settings at the bottom */}
        <div className="mt-auto pt-4 pb-6">
          <div className="h-px bg-gray-100 mx-4 mb-4"></div>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </nav>
    </aside>
  );
}
