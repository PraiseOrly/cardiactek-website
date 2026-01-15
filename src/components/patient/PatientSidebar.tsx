import { AnimatePresence, motion } from "framer-motion";
import {
  Activity, Bell, Calendar, ChevronLeft, ChevronRight,
  CreditCard,
  HeartPulse, Home,
  LogOut,
  Moon,
  Pill, Settings,
  Shield,
  Smartphone, Stethoscope,
  Sun,
  User
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ModernSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen?: boolean;
}

const ModernSidebar: React.FC<ModernSidebarProps> = ({ isCollapsed, onToggle, isMobileOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/patient-dashboard" },
    { name: "Health Profile", icon: User, path: "/patient-dashboard/health-profile" },
    { name: "Medications", icon: Pill, path: "/patient-dashboard/medications" },
    { name: "Diagnostics", icon: Stethoscope, path: "/patient-dashboard/diagnostics" },
    { name: "Appointments", icon: Calendar, path: "/patient-dashboard/appointments" },
    { name: "Devices", icon: Smartphone, path: "/patient-dashboard/devices-integrations" },
    { name: "Activity", icon: Activity, path: "/patient-dashboard/timeline" },
  ];

  const accountItems = [
    { name: "Settings", icon: Settings, path: "/patient-dashboard/settings" },
    { name: "Notifications", icon: Bell, path: "/patient-dashboard/notifications" },
    { name: "Privacy", icon: Shield, path: "/patient-dashboard/privacy" },
    { name: "Billing", icon: CreditCard, path: "/patient-dashboard/billing" },
  ];

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleNavigate = (path: string) => navigate(path);

  const bgClass = isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-700";
  const borderClass = isDarkMode ? "border-gray-800" : "border-gray-200";
  const hoverClass = isDarkMode ? "hover:bg-gray-800 hover:text-blue-400" : "hover:bg-blue-50 hover:text-blue-600";

  return (
    <motion.div
      animate={{ width: isCollapsed ? 64 : 256 }}
      className={`h-full flex flex-col ${bgClass} border-r ${borderClass} transition-all duration-300 relative`}
    >
      {/* Sidebar Header */}
      <div className={`flex items-center gap-2 px-3 py-3 border-b ${borderClass}`}>
        <HeartPulse className="h-5 w-5 text-red-500 flex-shrink-0" />
        {!isCollapsed && <span className="text-sm font-semibold whitespace-nowrap">CardiacTek</span>}
        <button
          onClick={onToggle}
          className={`p-1 rounded-md ${hoverClass} flex-shrink-0 ml-auto`}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Menu Section */}
      <div className="flex-1 overflow-y-auto py-2">
        {!isCollapsed && (
          <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider px-3 mb-1">
            Overview
          </p>
        )}
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`group flex items-center gap-3 px-3 py-2 mx-2 text-sm cursor-pointer rounded-lg transition-all ${hoverClass}`}
            onClick={() => handleNavigate(item.path)}
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {!isCollapsed && <span className="text-xs font-medium whitespace-nowrap">{item.name}</span>}
            {isCollapsed && (
              <span className="absolute left-16 bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        ))}

        {!isCollapsed && (
          <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider px-3 mt-4 mb-1">
            Account
          </p>
        )}
        {accountItems.map((item) => (
          <div
            key={item.name}
            className={`group flex items-center gap-3 px-3 py-2 mx-2 text-sm cursor-pointer rounded-lg transition-all ${hoverClass}`}
            onClick={() => handleNavigate(item.path)}
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {!isCollapsed && <span className="text-xs font-medium whitespace-nowrap">{item.name}</span>}
            {isCollapsed && (
              <span className="absolute left-16 bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        ))}

        {/* Dark Mode Toggle */}
        <div
          className={`group flex items-center gap-3 px-3 py-2 mx-2 mt-2 text-sm cursor-pointer rounded-lg transition-all ${hoverClass}`}
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun className="h-4 w-4 flex-shrink-0" /> : <Moon className="h-4 w-4 flex-shrink-0" />}
          {!isCollapsed && (
            <span className="text-xs font-medium whitespace-nowrap">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
          {isCollapsed && (
            <span className="absolute left-16 bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </div>
      </div>

      {/* Footer - Profile Section */}
      <div className={`border-t ${borderClass} px-3 py-3`}>
        <div
          className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 py-2 ${isCollapsed ? 'justify-center' : ''}`}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="User"
            className="w-7 h-7 rounded-full object-cover flex-shrink-0"
          />
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-semibold truncate">John Wilson</span>
              <span className="text-[10px] text-gray-400 truncate">wilson@gmail.com</span>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <AnimatePresence>
          {isProfileOpen && !isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className={`mt-2 ${bgClass} border ${borderClass} rounded-lg shadow-md text-xs z-50`}
            >
              <div className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">Integrations</div>
              <div className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">History</div>
              <div className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">Update to Pro</div>
              <div className="border-t px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 cursor-pointer flex items-center gap-1">
                <LogOut size={12} /> Log out
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ModernSidebar;
