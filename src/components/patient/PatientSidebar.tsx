import {
  Activity, AlertCircle, Bell, Calendar, CreditCard,
  HeartPulse, Home, LogOut, MessageSquare, Phone, Pill,
  Settings, Shield, Smartphone, Stethoscope, User,
} from 'lucide-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PatientSidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { name: 'Dashboard', icon: Home, path: '/patient-dashboard' },
  { name: 'Health Profile', icon: HeartPulse, path: '/patient-dashboard/health-profile' },
  { name: 'Diagnostics', icon: Stethoscope, path: '/patient-dashboard/diagnostics' },
  { name: 'Medications', icon: Pill, path: '/patient-dashboard/medications' },
  { name: 'Health Timeline', icon: Activity, path: '/patient-dashboard/timeline' },
  { name: 'Emergency Care', icon: AlertCircle, path: '/patient-dashboard/emergency-care' },
  { name: 'Appointments', icon: Calendar, path: '/patient-dashboard/appointments' },
  { name: 'Chat Assistant', icon: MessageSquare, path: '/patient-dashboard/chat' },
  { name: 'Notifications', icon: Bell, path: '/patient-dashboard/notifications' },
  { name: 'Schedule', icon: Phone, path: '/patient-dashboard/schedule' },
  { name: 'Wearables', icon: Smartphone, path: '/patient-dashboard/wearables' },
];

const bottomItems = [
  { name: 'Settings', icon: Settings, path: '/patient-dashboard/settings' },
  { name: 'Privacy', icon: Shield, path: '/patient-dashboard/privacy' },
  { name: 'Billing', icon: CreditCard, path: '/patient-dashboard/billing' },
];

const PatientSidebar: React.FC<PatientSidebarProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const getIconColor = (active: boolean) => {
    return active ? 'text-red-500' : 'text-gray-500';
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-50 border-r border-gray-200 flex flex-col shadow-sm z-50">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <HeartPulse className="h-8 w-8 text-red-500" />
        </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <div
              key={item.name}
              onClick={() => handleItemClick(item.path)}
              className={`group flex flex-col items-center py-3 px-2 mx-2 rounded-lg cursor-pointer transition-all duration-200 ${
                active ? 'bg-white shadow-sm' : 'hover:bg-gray-100'
              }`}
            >
              <div className={`relative`}>
                <item.icon className={`h-6 w-6 ${getIconColor(active)}`} />
                {active && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-lg transform -translate-x-full" />
                )}
              </div>
              <span className={`mt-1 text-xs font-medium ${active ? 'text-red-600' : 'text-gray-600'}`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200 space-y-1">
        {bottomItems.map((item) => {
          const active = isActive(item.path);
          return (
            <div
              key={item.name}
              onClick={() => handleItemClick(item.path)}
              className={`group flex flex-col items-center py-2 px-2 mx-2 rounded-lg cursor-pointer transition-all duration-200 ${
                active ? 'bg-white shadow-sm' : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className={`h-5 w-5 ${getIconColor(active)}`} />
            </div>
          );
        })}
        <div
          onClick={() => navigate('/')}
          className="group flex flex-col items-center py-2 px-2 mx-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5 text-gray-500 group-hover:text-red-500" />
        </div>
    </div>
  );
};

export default PatientSidebar;
