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
  TrendingDown,
  TrendingUp,
  User,
  X
} from 'lucide-react'

interface MenuItem {
  name: string
  icon: any
  href?: string
  submenu?: MenuItem[]
  highlight?: boolean
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

interface PatientSidebarProps {
  activeMenuItem: string
  setActiveMenuItem: (item: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  expandedSections: string[]
  toggleSection: (section: string) => void
  menuSections: MenuSection[]
}

export default function PatientSidebar({
  activeMenuItem,
  setActiveMenuItem,
  sidebarOpen,
  setSidebarOpen,
  expandedSections,
  toggleSection,
  menuSections,
}: PatientSidebarProps) {
  return (
    <>
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
    </>
  )
}
