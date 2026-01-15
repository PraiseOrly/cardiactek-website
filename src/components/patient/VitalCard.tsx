import React from 'react'
import { ArrowDown, ArrowUp, Minus, BoxIcon } from 'lucide-react'
type TrendDirection = 'up' | 'down' | 'neutral'
type StatusType =
  | 'normal'
  | 'optimal'
  | 'excellent'
  | 'good'
  | 'warning'
  | 'critical'
interface VitalCardProps {
  title: string
  value: string
  unit: string
  status: string
  statusType: StatusType
  trendValue: string
  trendDirection: TrendDirection
  Icon: BoxIcon
  color?: string
}
export function VitalCard({
  title,
  value,
  unit,
  status,
  statusType,
  trendValue,
  trendDirection,
  Icon,
  color = 'red',
}: VitalCardProps) {
  const getStatusColor = (type: StatusType) => {
    switch (type) {
      case 'normal':
      case 'optimal':
      case 'excellent':
      case 'good':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
      case 'warning':
        return 'bg-amber-50 text-amber-700 border-amber-200/60'
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200/60'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200/60'
    }
  }
  const getTrendColor = (direction: TrendDirection) => {
    return 'text-slate-600'
  }
  const TrendIcon =
    trendDirection === 'up'
      ? ArrowUp
      : trendDirection === 'down'
        ? ArrowDown
        : Minus
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 relative overflow-hidden group">
      {/* Decorative gradient accent */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${statusType === 'warning' ? 'bg-gradient-to-b from-amber-400 to-amber-500' : statusType === 'critical' ? 'bg-gradient-to-b from-red-500 to-rose-500' : 'bg-gradient-to-b from-emerald-500 to-teal-500'}`}
      />

      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-2.5 text-slate-600 font-semibold text-sm">
          <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
            <Icon
              size={18}
              strokeWidth={2}
              className="text-slate-500 group-hover:text-red-600 transition-colors"
            />
          </div>
          {title}
        </div>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${getStatusColor(statusType)}`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-4xl font-bold text-slate-900 tracking-tight">
          {value}
        </span>
        <span className="text-base text-slate-500 font-semibold">{unit}</span>
      </div>

      <div
        className={`flex items-center text-sm font-semibold ${getTrendColor(trendDirection)}`}
      >
        <TrendIcon size={16} className="mr-1.5" strokeWidth={2.5} />
        <span>{trendValue}</span>
      </div>
    </div>
  )
}
