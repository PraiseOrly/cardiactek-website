import {
  Bell,
  Check,
  CheckCircle,
  Clock,
  Heart,
  MessageSquare,
  Pill,
  Settings,
  Trash2,
  X,
} from 'lucide-react'
import React, { useState } from 'react'

interface Notification {
  id: string
  type: 'appointment' | 'medication' | 'alert' | 'test' | 'message'
  title: string
  message: string
  timestamp: string
  read: boolean
  icon: React.ReactNode
  color: string
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'You have an appointment with Dr. Sarah Chen on Jan 25, 2024 at 10:00 AM',
      timestamp: '2 hours ago',
      read: false,
      icon: <Clock size={20} />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: '2',
      type: 'medication',
      title: 'Medication Reminder',
      message: 'Time to take your Metoprolol 25mg (evening dose)',
      timestamp: '30 minutes ago',
      read: false,
      icon: <Pill size={20} />,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: '3',
      type: 'test',
      title: 'Test Results Available',
      message: 'Your ECG test results are now available for review',
      timestamp: '1 day ago',
      read: true,
      icon: <Heart size={20} />,
      color: 'bg-red-100 text-red-600',
    },
    {
      id: '4',
      type: 'message',
      title: 'New Message from Doctor',
      message: 'Dr. Sarah Chen replied to your health inquiry',
      timestamp: '2 days ago',
      read: true,
      icon: <MessageSquare size={20} />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '5',
      type: 'alert',
      title: 'Vital Sign Alert',
      message: 'Your blood pressure reading is slightly elevated. Please monitor closely.',
      timestamp: '3 days ago',
      read: true,
      icon: <Bell size={20} />,
      color: 'bg-orange-100 text-orange-600',
    },
  ])

  const [filter, setFilter] = useState<string>('all')

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const filteredNotifications =
    filter === 'all'
      ? notifications
      : notifications.filter((n) => n.type === filter)

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Notifications
          </h1>
          <p className="text-slate-600">
            Stay updated with your health alerts and reminders
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllAsRead}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
          >
            <Check size={16} />
            Mark All as Read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {['all', 'appointment', 'medication', 'alert', 'test', 'message'].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                filter === tab
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white border border-slate-200/60 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ),
        )}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-12 text-center">
            <Bell size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              No notifications
            </h3>
            <p className="text-slate-600">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white/80 backdrop-blur-sm rounded-xl border transition-all duration-200 ${
                notification.read
                  ? 'border-slate-200/60'
                  : 'border-red-200 bg-red-50/30'
              } shadow-sm hover:shadow-md p-5`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg ${notification.color} flex items-center justify-center`}
                >
                  {notification.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-slate-900">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="flex-shrink-0 w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-slate-500">
                    {notification.timestamp}
                  </p>
                </div>

                <div className="flex-shrink-0 flex gap-2">
                  {!notification.read && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900"
                      title="Mark as read"
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="p-2 hover:bg-red-100 rounded-lg transition-colors text-slate-600 hover:text-red-600"
                    title="Delete notification"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Notification Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Notification Settings
          </h2>
          <Settings size={20} className="text-slate-400" />
        </div>

        <div className="space-y-4">
          {[
            { label: 'Appointment Reminders', enabled: true },
            { label: 'Medication Reminders', enabled: true },
            { label: 'Health Alerts', enabled: true },
            { label: 'Test Results', enabled: true },
            { label: 'Messages from Doctor', enabled: true },
            { label: 'Weekly Health Summary', enabled: false },
          ].map((setting, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors">
              <label className="text-sm font-medium text-slate-900 cursor-pointer">
                {setting.label}
              </label>
              <input
                type="checkbox"
                defaultChecked={setting.enabled}
                className="w-5 h-5 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications
