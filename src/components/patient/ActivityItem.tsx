import React from 'react'
import { BoxIcon } from 'lucide-react'
interface ActivityItemProps {
  title: string
  description: string
  time: string
  Icon: BoxIcon
  iconColor?: string
  iconBg?: string
}
export function ActivityItem({
  title,
  description,
  time,
  Icon,
  iconColor = 'text-red-600',
  iconBg = 'bg-red-50',
}: ActivityItemProps) {
  return (
    <div className="flex gap-4 relative pb-8 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-5 top-12 bottom-0 w-px bg-slate-200 last:hidden" />

      <div
        className={`w-11 h-11 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white shadow-sm group-hover:shadow-md transition-all duration-200`}
      >
        <Icon size={20} strokeWidth={2} />
      </div>

      <div className="flex-1 pt-1">
        <div className="flex justify-between items-start mb-1.5">
          <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
          <span className="text-xs text-slate-400 whitespace-nowrap font-medium">
            {time}
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
