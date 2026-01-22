import { Bell, Menu, Search } from 'lucide-react'

interface PatientHeaderProps {
  setSidebarOpen: (open: boolean) => void
  pageTitle?: string
  userName?: string
}

export default function PatientHeader({
  setSidebarOpen,
  pageTitle = 'Patient Dashboard',
  userName = 'Jane',
}: PatientHeaderProps) {
  return (
    /* Top Navigation Bar - Sticky header */
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
                {pageTitle}
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Welcome back, {userName}
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
  )
}

