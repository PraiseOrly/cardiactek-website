import React from 'react'
import { Calendar, Clock } from 'lucide-react'
interface AppointmentCardProps {
  doctorName: string
  specialty: string
  date: string
  time: string
  type: string
  initials: string
  avatarColor?: string
}
export function AppointmentCard({
  doctorName,
  specialty,
  date,
  time,
  type,
  initials,
  avatarColor = 'bg-red-100 text-red-600',
}: AppointmentCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 hover:border-red-200 transition-all duration-300 cursor-pointer group">
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm ${avatarColor}`}
        >
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 truncate group-hover:text-red-600 transition-colors text-base">
                {doctorName}
              </h3>
              <p className="text-sm text-slate-500 truncate font-medium">
                {specialty}
              </p>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-50 text-slate-600 border border-slate-200/60">
              {type}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-slate-400" strokeWidth={2} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-slate-400" strokeWidth={2} />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
