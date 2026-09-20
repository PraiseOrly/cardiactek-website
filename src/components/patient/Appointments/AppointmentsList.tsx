import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Video,
  Check,
  X,
  Edit2,
  MessageSquare,
} from 'lucide-react'
import React from 'react'

interface Appointment {
  id: string
  doctorName: string
  specialty: string
  date: string
  time: string
  type: 'follow-up' | 'check-up' | 'virtual' | 'in-person'
  location: string
  status: 'scheduled' | 'completed' | 'cancelled'
  notes?: string
}

const AppointmentsList: React.FC = () => {
  const appointments: Appointment[] = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Chen',
      specialty: 'Cardiologist',
      date: 'Jan 25, 2024',
      time: '10:00 AM',
      type: 'follow-up',
      location: 'Medical Center, Room 201',
      status: 'scheduled',
      notes: 'Regular cardiac checkup with stress test',
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Roberts',
      specialty: 'General Practitioner',
      date: 'Feb 2, 2024',
      time: '2:30 PM',
      type: 'virtual',
      location: 'Video Call',
      status: 'scheduled',
    },
    {
      id: '3',
      doctorName: 'Dr. Emily Johnson',
      specialty: 'Cardiologist',
      date: 'Jan 18, 2024',
      time: '11:00 AM',
      type: 'check-up',
      location: 'Cardiovascular Clinic',
      status: 'completed',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            My Appointments
          </h1>
          <p className="text-slate-600">
            Manage and track your scheduled medical appointments
          </p>
        </div>
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Schedule New
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'scheduled', 'completed', 'cancelled'].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 rounded-lg font-medium text-sm bg-white border border-slate-200/60 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments Grid */}
      <div className="grid gap-6">
        {/* Upcoming Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Upcoming Appointments
          </h2>

          {appointments
            .filter((a) => a.status === 'scheduled')
            .map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-indigo-600">
                          {appointment.doctorName
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {appointment.doctorName}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {appointment.specialty}
                        </p>
                        {appointment.notes && (
                          <p className="text-xs text-slate-500 mt-1">
                            {appointment.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-700">
                        <Calendar size={18} className="text-slate-500" />
                        <span className="text-sm font-medium">
                          {appointment.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700">
                        <Clock size={18} className="text-slate-500" />
                        <span className="text-sm font-medium">
                          {appointment.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700">
                        {appointment.type === 'virtual' ? (
                          <>
                            <Video size={18} className="text-slate-500" />
                            <span className="text-sm font-medium">
                              Video Call
                            </span>
                          </>
                        ) : (
                          <>
                            <MapPin size={18} className="text-slate-500" />
                            <span className="text-sm font-medium">
                              {appointment.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      <Video size={16} />
                      Join
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200/60 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                      <MessageSquare size={16} />
                      Message
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200/60 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                      <Edit2 size={16} />
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Past Appointments Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Past Appointments
          </h2>

          {appointments
            .filter((a) => a.status === 'completed')
            .map((appointment) => (
              <div
                key={appointment.id}
                className="bg-slate-50/50 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 opacity-75 hover:opacity-100 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                      <Check size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {appointment.doctorName}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-slate-200/60 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AppointmentsList
