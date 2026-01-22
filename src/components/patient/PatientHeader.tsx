import { Bell, Download, Menu, Search, Share2, Upload } from 'lucide-react'

interface PatientHeaderProps {
  setSidebarOpen?: (open: boolean) => void
  pageTitle?: string
  userName?: string
  headerType?: 'default' | 'records'
  searchValue?: string
  onSearchChange?: (value: string) => void
  onImport?: () => void
  onShare?: () => void
  onExport?: () => void
}

export default function PatientHeader({
  setSidebarOpen,
  pageTitle = 'Patient Dashboard',
  userName = 'Jane',
  headerType = 'default',
  searchValue = '',
  onSearchChange,
  onImport,
  onShare,
  onExport,
}: PatientHeaderProps) {
  // Records header type
  if (headerType === 'records') {
    return (
      <header className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 pt-6 pb-4 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-sm text-slate-500 font-medium mt-1">
                View and manage your complete health history
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search records..."
                  value={searchValue}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-sm focus:ring-2 focus:ring-red-500/20 focus:border-red-300 w-64 transition-all duration-200 placeholder:text-slate-400"
                />
              </div>
              {onImport && (
                <button
                  onClick={onImport}
                  className="flex items-center px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </button>
              )}
              {onShare && (
                <button
                  onClick={onShare}
                  className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              )}
              {onExport && (
                <button
                  onClick={onExport}
                  className="flex items-center px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-sm font-medium shadow-sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </button>
              )}
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

  // Default header type (Dashboard)
  return (
    <header className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 pt-6 pb-4 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {setSidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 shadow-sm"
              >
                <Menu size={20} className="text-slate-700" />
              </button>
            )}
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
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
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

