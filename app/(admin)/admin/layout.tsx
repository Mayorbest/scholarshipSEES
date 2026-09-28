import Link from 'next/link';
import { LayoutDashboard, PlusCircle, Bell, Home, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-sees-dark text-white flex flex-col hidden md:flex fixed h-full">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white tracking-tight">SEES Admin</h2>
          <p className="text-sm text-gray-400">Scholarship Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            <LayoutDashboard className="w-5 h-5 text-gray-400" />
            Dashboard
          </Link>
          <Link href="/admin/scholarships/new" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-sees-green text-white rounded-lg transition-colors">
            <PlusCircle className="w-5 h-5 text-white" />
            Post Scholarship
          </Link>
          <Link href="/admin/alerts" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
            Live Alerts
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
            <Home className="w-5 h-5" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content Area (Offset by sidebar width) */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  );
}