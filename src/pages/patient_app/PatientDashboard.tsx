import {
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  CalendarCheck,
  CalendarPlus,
  ChevronDown,
  ChevronRight,
  Clock,
  CreditCard,
  Droplet,
  FileText,
  FlaskConical,
  FolderOpen,
  Heart,
  HeartPulse,
  LayoutDashboard,
  List,
  Lock,
  LogOut,
  Menu,
  MessageSquare,
  Microscope,
  Moon,
  Pill,
  Search,
  Settings,
  Smartphone,
  Sparkles,
  TrendingDown,
  TrendingUp,
  User,
  Video,
  X
} from 'lucide-react'
import { useState } from 'react'
import { ActivityItem } from '../../components/Patient/ActivityItem'
import { AppointmentCard } from '../../components/Patient/Appointments/AppointmentCard'
import { MedicationItem } from '../../components/Patient/MedicationItem'
import { VitalCard } from '../../components/Patient/VitalCard'
export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Main',
    'Appointments',
  ])
  const tabs = ['Overview', 'Vitals', 'Insights', 'Activity']
  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    )
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
      {/* Sidebar - Fixed with internal scrolling */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 shadow-2xl shadow-slate-900/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header - Fixed at top */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200/60 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-red-600 to-rose-600 p-2 rounded-xl shadow-lg shadow-red-600/20">
                <Activity className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-slate-900">
                  MediCare
                </span>
                <p className="text-xs text-slate-500 font-medium">
                  Health Platform
                </p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={18} className="text-slate-500" />
            </button>
          </div>

          {/* Sidebar Navigation - Scrollable area */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6 min-h-0">
            {menuSections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2 hover:text-slate-700 transition-colors"
                >
                  {section.title}
                  <ChevronDown
                    size={12}
                    className={`transform transition-transform duration-200 ${expandedSections.includes(section.title) ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedSections.includes(section.title) && (
                  <div className="space-y-0.5">
                    {section.items.map((item) => (
                      <div key={item.name}>
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => setActiveMenuItem(item.name)}
                              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeMenuItem === item.name ? 'bg-gradient-to-r from-red-50 to-rose-50 text-red-600 shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}
                            >
                              <item.icon size={18} strokeWidth={2} />
                              <span className="flex-1 text-left">
                                {item.name}
                              </span>
                              <ChevronRight
                                size={14}
                                className="text-slate-400"
                              />
                            </button>
                            <div className="ml-9 mt-1 space-y-0.5">
                              {item.submenu.map((subitem) => (
                                <button
                                  key={subitem.name}
                                  onClick={() =>
                                    setActiveMenuItem(subitem.name)
                                  }
                                  className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeMenuItem === subitem.name ? 'text-red-600 font-semibold bg-red-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                                >
                                  <subitem.icon size={16} strokeWidth={2} />
                                  <span>{subitem.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setActiveMenuItem(item.name)}
                            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${item.highlight && item.name === 'Emergency' ? 'bg-gradient-to-r from-red-50 to-rose-50 text-red-600 hover:from-red-100 hover:to-rose-100 shadow-sm' : item.highlight && item.name === 'Sign Out' ? 'text-slate-600 hover:bg-slate-50 hover:text-slate-900' : activeMenuItem === item.name ? 'bg-gradient-to-r from-red-50 to-rose-50 text-red-600 shadow-sm' : 'text-slate-700 hover:bg-slate-50'}`}
                          >
                            <item.icon size={18} strokeWidth={2} />
                            <span>{item.name}</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sidebar Footer - Fixed at bottom */}
          <div className="p-4 border-t border-slate-200/60 bg-gradient-to-br from-slate-50 to-white flex-shrink-0">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all duration-200 cursor-pointer group">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center font-semibold text-base shadow-lg">
                  J
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  Jane Doe
                </p>
                <p className="text-xs text-slate-500 truncate">
                  Premium Member
                </p>
              </div>
              <Settings
                size={16}
                className="text-slate-400 group-hover:text-slate-600 transition-colors"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content - Takes remaining space */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-72">
        {/* Top Navigation Bar - Sticky header */}
        <header className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 pt-6 pb-4 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 shadow-sm"
                >
                  <Menu size={20} className="text-slate-700" />
                </button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                    Patient Dashboard
                  </h1>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Welcome back, Jane
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:block relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search records, medications..."
                    className="pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-sm focus:ring-2 focus:ring-red-500/20 focus:border-red-300 w-72 transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
                <button className="relative p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Quick Actions - Premium Design */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                  <Calendar size={18} strokeWidth={2} />
                  Schedule Visit
                </button>
                <button className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                  <Video size={18} strokeWidth={2} />
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
            </div>

            {/* Navigation Tabs - Premium Design */}
            <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-1.5 inline-flex gap-1 shadow-sm border border-slate-200/60">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${activeTab === tab ? 'bg-white text-red-600 shadow-md shadow-slate-900/5' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'Overview' && (
              <>
                {/* Vitals Grid - Premium Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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
                    {/* Appointments Section - Premium */}
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

                    {/* Medications Section - Premium */}
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
                    {/* AI Insight Card - Ultra Premium */}
                    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 text-white p-7 shadow-2xl shadow-red-600/30">
                      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-28 h-28 bg-rose-400 opacity-20 rounded-full blur-2xl"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2.5 mb-5">
                          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-lg">
                            <Sparkles size={20} className="text-yellow-300" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">
                              AI Health Insights
                            </h3>
                            <p className="text-xs text-red-100 font-medium">
                              Powered by advanced analytics
                            </p>
                          </div>
                        </div>

                        <p className="text-red-50 mb-6 leading-relaxed text-[15px]">
                          Steady heart rate all week! ECG shows normal sinus
                          rhythm. Keep up hydration & aim for a 20-min walk
                          today.
                        </p>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-white text-red-600 py-2.5 px-4 rounded-xl text-sm font-bold hover:bg-red-50 transition-all duration-200 shadow-lg">
                            View Report
                          </button>
                          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/15 transition-all duration-200 border border-white/20">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </section>

                    {/* Recent Activity - Premium */}
                    <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
                      <div className="mb-5">
                        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                          Recent Activity
                        </h2>
                        <p className="text-sm text-slate-500 mt-0.5">
                          Your health timeline
                        </p>
                      </div>
                      <div className="space-y-1">
                        <ActivityItem
                          title="ECG Analysis Report"
                          description="Normal sinus rhythm detected. No irregularities found."
                          time="2h ago"
                          Icon={FileText}
                          iconColor="text-red-600"
                          iconBg="bg-red-50"
                        />
                        <ActivityItem
                          title="Telemedicine Session"
                          description="Completed follow-up call with Dr. Sarah Chen."
                          time="Yesterday"
                          Icon={Video}
                          iconColor="text-emerald-600"
                          iconBg="bg-emerald-50"
                        />
                        <ActivityItem
                          title="Lab Results Available"
                          description="Blood work results from Jan 20 are now ready to view."
                          time="Jan 22"
                          Icon={Activity}
                          iconColor="text-purple-600"
                          iconBg="bg-purple-50"
                        />
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )}

            {/* Vitals Tab */}
            {activeTab === 'Vitals' && (
              <div className="space-y-6">
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
            )}

            {/* Insights Tab */}
            {activeTab === 'Insights' && (
              <div className="space-y-6">
                <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 text-white p-8 shadow-2xl shadow-red-600/30">
                  <div className="absolute top-0 right-0 -mt-12 -mr-12 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 bg-rose-400 opacity-20 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm shadow-xl">
                        <Sparkles size={28} className="text-yellow-300" />
                      </div>
                      <div>
                        <h2 className="font-bold text-2xl tracking-tight">
                          AI Health Insights
                        </h2>
                        <p className="text-sm text-red-100 font-medium">
                          Personalized health intelligence
                        </p>
                      </div>
                    </div>

                    <p className="text-red-50 text-lg mb-8 leading-relaxed">
                      Your health metrics show consistent improvement over the
                      past week. Here's what we've learned:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-200">
                        <h3 className="font-bold mb-2 text-lg">
                          Cardiovascular Health
                        </h3>
                        <p className="text-red-50 text-sm leading-relaxed">
                          Steady heart rate and optimal blood pressure indicate
                          excellent cardiovascular fitness.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-200">
                        <h3 className="font-bold mb-2 text-lg">
                          Sleep Patterns
                        </h3>
                        <p className="text-red-50 text-sm leading-relaxed">
                          Sleep duration improved by 15 minutes. Consider
                          maintaining your current bedtime routine.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-200">
                        <h3 className="font-bold mb-2 text-lg">
                          Oxygen Levels
                        </h3>
                        <p className="text-red-50 text-sm leading-relaxed">
                          SpO2 levels are excellent. Your respiratory system is
                          functioning optimally.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-200">
                        <h3 className="font-bold mb-2 text-lg">
                          Recommendations
                        </h3>
                        <p className="text-red-50 text-sm leading-relaxed">
                          Continue current exercise routine. Aim for 20-30
                          minutes of walking daily.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                    Health Goals
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-5 border border-slate-200/60 rounded-xl bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition-all duration-200">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          Daily Steps
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                          Target: 8,000 steps
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-emerald-600">
                          6,420
                        </p>
                        <p className="text-xs text-slate-500 font-semibold">
                          80% complete
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-5 border border-slate-200/60 rounded-xl bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition-all duration-200">
                      <div>
                        <h3 className="font-bold text-slate-900">Hydration</h3>
                        <p className="text-sm text-slate-500 font-medium">
                          Target: 8 glasses
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-blue-600">6</p>
                        <p className="text-xs text-slate-500 font-semibold">
                          75% complete
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-5 border border-slate-200/60 rounded-xl bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition-all duration-200">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          Medication Adherence
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                          This week
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-emerald-600">
                          100%
                        </p>
                        <p className="text-xs text-slate-500 font-semibold">
                          All doses taken
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'Activity' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                    Recent Activity
                  </h2>
                  <div className="space-y-1">
                    <ActivityItem
                      title="ECG Analysis Report"
                      description="Normal sinus rhythm detected. No irregularities found."
                      time="2h ago"
                      Icon={FileText}
                      iconColor="text-red-600"
                      iconBg="bg-red-50"
                    />
                    <ActivityItem
                      title="Telemedicine Session"
                      description="Completed follow-up call with Dr. Sarah Chen."
                      time="Yesterday"
                      Icon={Video}
                      iconColor="text-emerald-600"
                      iconBg="bg-emerald-50"
                    />
                    <ActivityItem
                      title="Lab Results Available"
                      description="Blood work results from Jan 20 are now ready to view."
                      time="Jan 22"
                      Icon={Activity}
                      iconColor="text-purple-600"
                      iconBg="bg-purple-50"
                    />
                    <ActivityItem
                      title="Medication Reminder"
                      description="Took Metoprolol 25mg as scheduled."
                      time="Jan 22"
                      Icon={Bell}
                      iconColor="text-blue-600"
                      iconBg="bg-blue-50"
                    />
                    <ActivityItem
                      title="Blood Pressure Reading"
                      description="Recorded: 118/78 mmHg - Optimal range."
                      time="Jan 21"
                      Icon={Heart}
                      iconColor="text-rose-600"
                      iconBg="bg-rose-50"
                    />
                    <ActivityItem
                      title="Appointment Scheduled"
                      description="Follow-up with Dr. Sarah Chen on Jan 25."
                      time="Jan 20"
                      Icon={Calendar}
                      iconColor="text-indigo-600"
                      iconBg="bg-indigo-50"
                    />
                  </div>
                </section>

                <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                    This Week's Summary
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-700">
                          Health Check-ins
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          12
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full shadow-sm"
                          style={{
                            width: '85%',
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-700">
                          Medications Taken
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          21/21
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full shadow-sm"
                          style={{
                            width: '100%',
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-700">
                          Exercise Sessions
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          5/7
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full shadow-sm"
                          style={{
                            width: '71%',
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-slate-700">
                          Sleep Quality
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          7.2 hrs avg
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2.5 rounded-full shadow-sm"
                          style={{
                            width: '90%',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60 rounded-xl">
                    <p className="text-sm text-emerald-900 leading-relaxed">
                      <span className="font-bold">Great work this week!</span>{' '}
                      You've maintained excellent medication adherence and
                      consistent health monitoring.
                    </p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
