import { Bell, HeartPulse, Menu } from "lucide-react";
import React from "react";

interface DashboardHeaderProps {
  role: "patient" | "doctor";
  userName: string;
  onToggleSidebar?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  role,
  userName,
  onToggleSidebar,
}) => {
  return (
    <header className="bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors lg:hidden"
                aria-label="Toggle sidebar"
              >
                <Menu className="h-5 w-5 text-white" />
              </button>
            )}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold">
                  {role === "doctor" ? `Dr. ${userName}` : `Welcome back, ${userName}`}
                </h1>
                <p className="text-red-100 text-xs">
                  {role === "doctor" ? "Doctor Dashboard" : "Here's how your heart is doing today"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <img
              className="h-9 w-9 rounded-full border-2 border-white/50"
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
              alt={userName}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

