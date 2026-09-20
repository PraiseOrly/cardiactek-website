import {
  Activity,
  AlertCircle,
  Calendar,
  Heart,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import React from 'react'

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type: 'appointment' | 'medication' | 'test' | 'alert' | 'update'
  icon: React.ReactNode
  color: string
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      id: '1',
      date: 'Today, 10:30 AM',
      title: 'Blood Pressure Check',
      description: 'Regular monitoring completed. Reading: 120/80 mmHg',
      type: 'update',
      icon: <Activity size={20} />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: '2',
      date: 'Yesterday, 2:00 PM',
      title: 'Doctor Appointment',
      description: 'Follow-up consultation with Dr. Sarah Chen',
      type: 'appointment',
      icon: <Calendar size={20} />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '3',
      date: '2 days ago',
      title: 'Medication Refill',
      description: 'Metoprolol 25mg refilled at pharmacy',
      type: 'medication',
      icon: <Activity size={20} />,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: '4',
      date: '3 days ago',
      title: 'Heart Rate Trend',
      description: 'Average heart rate decreased by 3% this week',
      type: 'update',
      icon: <TrendingDown size={20} />,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: '5',
      date: '1 week ago',
      title: 'ECG Test Results',
      description: 'ECG test completed. Normal sinus rhythm detected.',
      type: 'test',
      icon: <Heart size={20} />,
      color: 'bg-red-100 text-red-600',
    },
    {
      id: '6',
      date: '2 weeks ago',
      title: 'Blood Work',
      description: 'Complete blood panel results available',
      type: 'test',
      icon: <Activity size={20} />,
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Health Timeline
        </h1>
        <p className="text-slate-600">
          Your complete health history and recent activities
        </p>
      </div>

      {/* Timeline View */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-8">
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 to-slate-100"></div>

          {/* Timeline events */}
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-16">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-2 w-12 h-12 rounded-full ${event.color} flex items-center justify-center shadow-md border-4 border-white`}
              >
                {event.icon}
              </div>

              {/* Event content */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60 p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      {event.description}
                    </p>
                    <span className="text-xs font-medium text-slate-500">
                      {event.date}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100">
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium mb-1">
                Total Appointments
              </p>
              <p className="text-3xl font-bold text-slate-900">24</p>
            </div>
            <Calendar size={32} className="text-blue-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium mb-1">
                Active Medications
              </p>
              <p className="text-3xl font-bold text-slate-900">5</p>
            </div>
            <Activity size={32} className="text-green-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium mb-1">
                Tests Completed
              </p>
              <p className="text-3xl font-bold text-slate-900">12</p>
            </div>
            <Heart size={32} className="text-red-500 opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
