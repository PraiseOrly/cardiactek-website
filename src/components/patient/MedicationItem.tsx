import React from 'react'
import { Pill, Clock, CheckCircle2 } from 'lucide-react'
interface MedicationItemProps {
  name: string
  dosage: string
  frequency: string
  nextDose: string
  nextDoseLabel: string
  status?: 'taken' | 'pending' | 'missed'
}
export function MedicationItem({
  name,
  dosage,
  frequency,
  nextDose,
  nextDoseLabel,
  status = 'pending',
}: MedicationItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50/80 transition-all duration-200 border border-transparent hover:border-slate-200/60 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm">
        <Pill size={22} strokeWidth={2} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-bold text-slate-900">{name}</h4>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
            On track
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-1.5 font-medium">
          {dosage} • {frequency}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Clock size={13} strokeWidth={2} />
          <span>
            Next: <span className="font-bold text-slate-700">{nextDose}</span> (
            {nextDoseLabel})
          </span>
        </div>
      </div>

      <button
        className="w-9 h-9 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-300 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-50 transition-all duration-200 group-hover:border-slate-300"
        aria-label="Mark as taken"
      >
        <CheckCircle2 size={20} strokeWidth={2} />
      </button>
    </div>
  )
}
