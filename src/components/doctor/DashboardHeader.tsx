import React from 'react'
import { Menu, LogOut, Settings } from 'lucide-react'

interface DashboardHeaderProps {
  role: 'doctor' | 'patient'
  userName: string
  onToggleSidebar: () => void
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  role,
  userName,
  onToggleSidebar,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left side - Menu toggle and branding */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={20} className="text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            {role === 'doctor' ? '👨‍⚕️ Doctor Portal' : '👤 Patient Portal'}
          </h1>
        </div>

        {/* Right side - User menu */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500 capitalize">{role}</p>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white font-semibold">
            {userName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>

          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-200">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
              <Settings size={18} />
            </button>
            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors text-gray-600 hover:text-red-600">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
