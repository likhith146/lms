import Link from "next/link";
import { 
  Briefcase, 
  LayoutDashboard, 
  UserCircle, 
  Settings, 
  LogOut,
  Calendar,
  Wallet
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-sidebar hidden md:flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <h1 className="font-bold text-xl text-sidebar-foreground flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          HRMS Portal
        </h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/leave" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
            <Calendar className="w-5 h-5" />
            Leave
          </Link>
          <Link href="/salary" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
            <Wallet className="w-5 h-5" />
            Salary
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
            <UserCircle className="w-5 h-5" />
            Profile
          </Link>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
            <Settings className="w-5 h-5" />
            Admin Panel
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Link href="/login" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground">
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
