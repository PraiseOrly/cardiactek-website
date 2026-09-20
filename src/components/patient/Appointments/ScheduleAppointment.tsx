import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Star,
  CheckCircle,
  Video,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'

interface Doctor {
  id: string
  name: string
  specialty: string
  rating: number
  reviews: number
  available: boolean
  image: string
}

const ScheduleAppointment: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [appointmentType, setAppointmentType] = useState<'virtual' | 'in-person'>(
    'virtual'
  )
  const [step, setStep] = useState(1)

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 142,
      available: true,
      image: 'SC',
    },
    {
      id: '2',
      name: 'Dr. Michael Roberts',
      specialty: 'General Practice',
      rating: 4.8,
      reviews: 98,
      available: true,
      image: 'MR',
    },
    {
      id: '3',
      name: 'Dr. Emily Johnson',
      specialty: 'Cardiologist',
      rating: 4.7,
      reviews: 76,
      available: true,
      image: 'EJ',
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      specialty: 'Interventional Cardiologist',
      rating: 4.9,
      reviews: 112,
      available: false,
      image: 'JW',
    },
  ]

  const availableTimes = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
  ]

  const handleSubmit = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      setStep(3)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Schedule an Appointment
        </h1>
        <p className="text-slate-600">
          Book a consultation with one of our experienced doctors
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step >= s
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {step > s ? <CheckCircle size={20} /> : s}
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                step > s ? 'bg-red-600' : 'bg-slate-200'
              }`}
            ></div>
          </div>
        ))}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
            step >= 3 ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-600'
          }`}
        >
          {step > 3 ? <CheckCircle size={20} /> : 3}
        </div>
      </div>

      {/* Step 1: Select Doctor */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => {
                    setSelectedDoctor(doctor.id)
                    setStep(2)
                  }}
                  disabled={!doctor.available}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                    selectedDoctor === doctor.id
                      ? 'border-red-600 bg-red-50'
                      : doctor.available
                        ? 'border-slate-200/60 bg-white hover:border-red-300 hover:shadow-md'
                        : 'border-slate-200/60 bg-slate-50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-indigo-600">
                        {doctor.image}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center gap-2">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-slate-900">
                          {doctor.rating}
                        </span>
                        <span className="text-xs text-slate-500">
                          ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  {!doctor.available && (
                    <p className="text-xs text-slate-600 mt-3">Not available</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Appointment Type Selection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Appointment Type
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setAppointmentType('virtual')}
                className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                  appointmentType === 'virtual'
                    ? 'border-red-600 bg-red-50'
                    : 'border-slate-200/60 bg-white hover:border-red-300'
                }`}
              >
                <Video size={24} className="text-red-600" />
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Video Call</p>
                  <p className="text-xs text-slate-600">From home</p>
                </div>
              </button>

              <button
                onClick={() => setAppointmentType('in-person')}
                className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                  appointmentType === 'in-person'
                    ? 'border-red-600 bg-red-50'
                    : 'border-slate-200/60 bg-white hover:border-red-300'
                }`}
              >
                <MapPin size={24} className="text-red-600" />
                <div className="text-left">
                  <p className="font-semibold text-slate-900">In-Person</p>
                  <p className="text-xs text-slate-600">At clinic</p>
                </div>
              </button>
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar size={20} />
              Select Date
            </h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock size={20} />
                Select Time
              </h2>
              <div className="grid grid-cols-4 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 rounded-lg border-2 font-medium text-sm transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-slate-200/60 bg-white hover:border-red-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 px-6 py-3 border border-slate-200/60 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedDate || !selectedTime}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-12 text-center">
          <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Appointment Confirmed!
          </h2>
          <p className="text-slate-600 mb-6">
            Your appointment has been successfully scheduled. You'll receive a
            confirmation email and reminder notifications.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 text-left">
            <p className="text-sm text-slate-600 mb-2">Doctor</p>
            <p className="font-semibold text-slate-900 mb-4">
              {doctors.find((d) => d.id === selectedDoctor)?.name}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Date</p>
                <p className="font-semibold text-slate-900">{selectedDate}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Time</p>
                <p className="font-semibold text-slate-900">{selectedTime}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Type</p>
                <p className="font-semibold text-slate-900 capitalize">
                  {appointmentType}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Confirmation #</p>
                <p className="font-semibold text-slate-900">APT-20240125</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setStep(1)
              setSelectedDoctor(null)
              setSelectedDate('')
              setSelectedTime('')
            }}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Schedule Another
          </button>
        </div>
      )}
    </div>
  )
}

export default ScheduleAppointment
