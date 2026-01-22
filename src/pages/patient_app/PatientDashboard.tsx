import {
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  CalendarCheck,
  CalendarPlus,
  ChevronRight,
  Clock,
  CreditCard,
  Droplet,
  FlaskConical,
  FolderOpen,
  Heart,
  HeartPulse,
  LayoutDashboard,
  List,
  Lock,
  LogOut,
  MessageSquare,
  Microscope,
  Moon,
  Pill,
  Settings,
  Smartphone,
  TrendingDown,
  TrendingUp,
  User
} from 'lucide-react'
import { useState } from 'react'
import { AppointmentCard } from '../../components/Patient/Appointments/AppointmentCard'
import { MedicationItem } from '../../components/Patient/MedicationItem'
import HealthProfile from '../../components/Patient/MyHealth/HealthProfile'
import HealthRecords from '../../components/Patient/MyHealth/HealthRecords'
import PatientHeader from '../../components/Patient/PatientHeader'
import PatientSidebar from '../../components/patient/PatientSidebar'
import { VitalCard } from '../../components/Patient/VitalCard'

export default function PatientDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Main',
    'Appointments',
  ])
  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    )
  }

  const getPageTitle = (menuItem: string): string => {
    const titles: Record<string, string> = {
      Dashboard: 'Patient Dashboard',
      'Health Records': 'Medical Records',
      'Health Profile': 'Health Profile',
      Medications: 'Medications',
      Timeline: 'Health Timeline',
      'Diagnostic Tests': 'Diagnostic Tests',
      'Test Analysis': 'Test Analysis',
      'My Appointments': 'My Appointments',
      Schedule: 'Schedule Appointment',
      'View All': 'All Appointments',
      Emergency: 'Emergency Services',
      'Devices & Integrations': 'Devices & Integrations',
      Notifications: 'Notifications',
      Settings: 'Settings',
      Privacy: 'Privacy & Security',
      Billing: 'Billing & Payments',
    }
    return titles[menuItem] || 'Patient Dashboard'
  }

  const menuSections = [
    {
      title: 'Main',
      items: [
        {
          name: 'Dashboard',
          icon: LayoutDashboard,
          href: '#',
        },
        {
          name: 'My Health',
          icon: HeartPulse,
          submenu: [
            {
              name: 'Health Records',
              icon: FolderOpen,
            },
            {
              name: 'Health Profile',
              icon: User,
            },
            {
              name: 'Medications',
              icon: Pill,
            },
            {
              name: 'Timeline',
              icon: Clock,
            },
          ],
        },
      ],
    },
    {
      title: 'Diagnostics',
      items: [
        {
          name: 'Diagnostic Tests',
          icon: Microscope,
          href: '#',
        },
        {
          name: 'Test Analysis',
          icon: FlaskConical,
          href: '#',
        },
      ],
    },
    {
      title: 'Appointments',
      items: [
        {
          name: 'My Appointments',
          icon: CalendarCheck,
          href: '#',
        },
        {
          name: 'Schedule',
          icon: CalendarPlus,
          href: '#',
        },
        {
          name: 'View All',
          icon: List,
          href: '#',
        },
        {
          name: 'Emergency',
          icon: AlertCircle,
          href: '#',
          highlight: true,
        },
      ],
    },
    {
      title: 'Smart Tools',
      items: [
        {
          name: 'Devices & Integrations',
          icon: Smartphone,
          href: '#',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          name: 'Notifications',
          icon: Bell,
          href: '#',
        },
        {
          name: 'Settings',
          icon: Settings,
          href: '#',
        },
        {
          name: 'Privacy',
          icon: Lock,
          href: '#',
        },
        {
          name: 'Billing',
          icon: CreditCard,
          href: '#',
        },
        {
          name: 'Sign Out',
          icon: LogOut,
          href: '#',
          highlight: true,
        },
      ],
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 font-sans text-slate-900 flex">
      <PatientSidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        menuSections={menuSections}
      />

      {/* Main Content - Takes remaining space */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-72">
        <PatientHeader 
          setSidebarOpen={setSidebarOpen}
          pageTitle={getPageTitle(activeMenuItem)}
          headerType={activeMenuItem === 'Health Records' ? 'records' : 'default'}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Health Profile Section */}
            {activeMenuItem === 'Health Profile' && <HealthProfile />}

            {/* Health Records Section */}
            {activeMenuItem === 'Health Records' && <HealthRecords />}

            {/* Default Dashboard Content */}
            {activeMenuItem !== 'Health Profile' && activeMenuItem !== 'Health Records' && (
              <div className="space-y-6">
                {/* Vitals Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <VitalCard
                    title="Heart Rate"
                    value="72"
                    unit="BPM"
                    status="Normal"
                    statusType="normal"
                    trendValue="-2%"
                    trendDirection="down"
                    Icon={Heart}
                  />
                  <VitalCard
                    title="Blood Pressure"
                    value="118/78"
                    unit="mmHg"
                    status="Optimal"
                    statusType="optimal"
                    trendValue="0%"
                    trendDirection="neutral"
                    Icon={Activity}
                  />
                  <VitalCard
                    title="SpO2"
                    value="98"
                    unit="%"
                    status="Excellent"
                    statusType="excellent"
                    trendValue="+1%"
                    trendDirection="up"
                    Icon={Droplet}
                  />
                  <VitalCard
                    title="Sleep"
                    value="7.2"
                    unit="hrs"
                    status="Good"
                    statusType="good"
                    trendValue="+15min"
                    trendDirection="up"
                    Icon={Moon}
                  />
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <Calendar size={18} strokeWidth={2} />
                        Schedule Visit
                      </button>
                      <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <Calendar size={18} strokeWidth={2} />
                        Start TeleMed
                      </button>
                      <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                        <MessageSquare size={18} strokeWidth={2} />
                        Message Doctor
                      </button>
                      <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl text-sm font-semibold text-white hover:from-red-700 hover:to-rose-700 hover:shadow-lg hover:shadow-red-600/25 transition-all duration-200 shadow-md shadow-red-600/20">
                        <AlertCircle size={18} strokeWidth={2} />
                        Emergency
                      </button>
                    </div>

                    {/* Appointments Section */}
                    <section>
                      <div className="flex justify-between items-center mb-5">
                        <div>
                          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                            Upcoming Appointments
                          </h2>
                          <p className="text-sm text-slate-500 mt-0.5">
                            Your scheduled visits
                          </p>
                        </div>
                        <button className="text-sm font-semibold text-red-600 hover:text-red-700 flex items-center gap-1.5 px-3 py-1.5 hover:bg-red-50 rounded-lg transition-all duration-200">
                          View all <ChevronRight size={16} />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AppointmentCard
                          doctorName="Dr. Sarah Chen"
                          specialty="Cardiology"
                          date="Jan 25, 2024"
                          time="10:00 AM"
                          type="Follow-up"
                          initials="SC"
                          avatarColor="bg-indigo-100 text-indigo-600"
                        />
                        <AppointmentCard
                          doctorName="Dr. Michael Roberts"
                          specialty="General Practice"
                          date="Feb 2, 2024"
                          time="2:30 PM"
                          type="Check-up"
                          initials="MR"
                          avatarColor="bg-emerald-100 text-emerald-600"
                        />
                      </div>
                    </section>

                    {/* Medications Section */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 overflow-hidden">
                      <div className="p-6 border-b border-slate-200/60 flex justify-between items-center bg-gradient-to-br from-slate-50/50 to-white">
                        <div>
                          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                            Medications
                          </h2>
                          <p className="text-sm text-slate-500 mt-0.5">
                            Daily regimen tracking
                          </p>
                        </div>
                        <button className="text-sm font-semibold text-red-600 hover:text-red-700 px-3 py-1.5 hover:bg-red-50 rounded-lg transition-all duration-200">
                          Manage
                        </button>
                      </div>
                      <div className="p-5 space-y-2">
                        <MedicationItem
                          name="Metoprolol"
                          dosage="25mg"
                          frequency="Twice daily"
                          nextDose="8:00 PM"
                          nextDoseLabel="Today"
                          status="pending"
                        />
                        <MedicationItem
                          name="Aspirin"
                          dosage="81mg"
                          frequency="Once daily"
                          nextDose="8:00 AM"
                          nextDoseLabel="Tomorrow"
                          status="pending"
                        />
                        <MedicationItem
                          name="Atorvastatin"
                          dosage="10mg"
                          frequency="Once daily"
                          nextDose="10:00 PM"
                          nextDoseLabel="Today"
                          status="pending"
                        />
                      </div>
                    </section>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* 7-Day Trends */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
                      <h2 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                        7-Day Trends
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center shadow-sm">
                              <Heart
                                className="text-red-600"
                                size={26}
                                strokeWidth={2}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">
                                Heart Rate
                              </h3>
                              <p className="text-sm text-slate-500 font-medium">
                                Average: 74 BPM
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                            <TrendingDown size={18} strokeWidth={2} />
                            <span className="font-bold text-sm">-3%</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center shadow-sm">
                              <Activity
                                className="text-purple-600"
                                size={26}
                                strokeWidth={2}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">
                                Blood Pressure
                              </h3>
                              <p className="text-sm text-slate-500 font-medium">
                                Average: 120/80 mmHg
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                            <span className="font-bold text-sm">Stable</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center shadow-sm">
                              <Droplet
                                className="text-blue-600"
                                size={26}
                                strokeWidth={2}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">
                                Blood Oxygen
                              </h3>
                              <p className="text-sm text-slate-500 font-medium">
                                Average: 97%
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                            <TrendingUp size={18} strokeWidth={2} />
                            <span className="font-bold text-sm">+2%</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center shadow-sm">
                              <Moon
                                className="text-indigo-600"
                                size={26}
                                strokeWidth={2}
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">
                                Sleep Quality
                              </h3>
                              <p className="text-sm text-slate-500 font-medium">
                                Average: 7.5 hrs/night
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                            <TrendingUp size={18} strokeWidth={2} />
                            <span className="font-bold text-sm">+8%</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

