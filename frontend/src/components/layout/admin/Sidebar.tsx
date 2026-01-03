import { 
  LayoutDashboard, Users, ShoppingBag, ShieldCheck, AlertTriangle,
  Megaphone, FileText, Settings, LogOut
} from 'lucide-react';
import LogoText from "../../../../public/logo-text.png"

interface SidebarProps {
  collapsed?: boolean;
}

export default function SidebarAdmin({ collapsed = false }: SidebarProps) {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Users size={20} />, label: 'Users' },
    { icon: <ShoppingBag size={20} />, label: 'Trades' },
    { icon: <ShieldCheck size={20} />, label: 'Verifications' },
    { icon: <AlertTriangle size={20} />, label: 'Disputes' },
    { icon: <Megaphone size={20} />, label: 'Announcements' },
    { icon: <FileText size={20} />, label: 'Logs' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className={`h-screen flex flex-col transition-all duration-300 bg-gray-50 border-r border-gray-200 ${collapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          Trade<span><img src={LogoText} alt="logo-text" className='w-8'/></span>roof
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`
              w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200
              ${item.active ? 'bg-white border border-gray-200 text-indigo-500 shadow-sm' : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <span className={`${item.active ? 'text-indigo-500' : 'text-gray-400'}`}>{item.icon}</span>
            {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
            {item.active && !collapsed && <div className="ml-auto w-2 h-2 rounded-full bg-indigo-500" />}
          </button>
        ))}
      </nav>

      {/* Logout and Profile */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-4 py-3 rounded-lg text-red-500 hover:bg-gray-100 transition-all duration-200">
          <LogOut size={20} />
          {!collapsed && <span className="ml-3 font-medium">Logout</span>}
        </button>

        {!collapsed && (
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-indigo-500" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">User</p>
              <p className="text-xs text-gray-500 truncate">user@example.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
