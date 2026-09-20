import {
  Eye,
  EyeOff,
  Key,
  Lock,
  LogOut,
  Shield,
  Smartphone,
  Check,
  AlertCircle,
} from 'lucide-react'
import React, { useState } from 'react'

const Security: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('security')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Privacy & Security
        </h1>
        <p className="text-slate-600">
          Manage your account security and privacy settings
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200/60">
        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'security'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Shield size={18} className="inline mr-2" />
          Security
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'privacy'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Lock size={18} className="inline mr-2" />
          Privacy
        </button>
      </div>

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          {/* Password Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Key size={24} className="text-red-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Change Password
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors">
                Update Password
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Smartphone size={24} className="text-red-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Two-Factor Authentication
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Check size={16} />
                Enabled
              </span>
            </div>

            <p className="text-slate-600 mb-4">
              Two-factor authentication adds an extra layer of security to your
              account.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex gap-3">
              <AlertCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900">
                Your account is protected with authenticator app. You can also
                add backup codes for emergency access.
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-2 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
                Manage 2FA Methods
              </button>
              <button className="w-full px-4 py-2 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
                View Backup Codes
              </button>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone size={24} className="text-slate-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Active Sessions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  device: 'Chrome on MacOS',
                  location: 'San Francisco, CA',
                  lastActive: 'Now',
                  current: true,
                },
                {
                  device: 'Safari on iPhone',
                  location: 'San Francisco, CA',
                  lastActive: '2 hours ago',
                  current: false,
                },
                {
                  device: 'Chrome on Windows',
                  location: 'San Francisco, CA',
                  lastActive: '1 day ago',
                  current: false,
                },
              ].map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-slate-900">
                      {session.device}
                      {session.current && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                          Current
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-slate-600">
                      {session.location} • Last active: {session.lastActive}
                    </p>
                  </div>
                  {!session.current && (
                    <button className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded transition-colors">
                      Sign Out
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700 flex items-center justify-center gap-2">
              <LogOut size={16} />
              Sign Out All Other Sessions
            </button>
          </div>
        </div>
      )}

      {/* Privacy Tab */}
      {activeTab === 'privacy' && (
        <div className="space-y-6">
          {/* Data Sharing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Data & Privacy Controls
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Share data with doctors',
                  description: 'Allow your healthcare providers to access your health data',
                  enabled: true,
                },
                {
                  title: 'Share data with research',
                  description: 'Help advance medical research by sharing anonymized data',
                  enabled: false,
                },
                {
                  title: 'Health analytics',
                  description:
                    'Allow us to analyze your health trends to provide better insights',
                  enabled: true,
                },
                {
                  title: 'Marketing communications',
                  description: 'Receive personalized health tips and wellness updates',
                  enabled: false,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={item.enabled}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Download Data */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Download Your Data
            </h2>
            <p className="text-slate-600 mb-4">
              Download a copy of your health data in a portable format
            </p>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Request Data Export
            </button>
          </div>

          {/* Delete Account */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-red-200 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Delete Account
            </h2>
            <p className="text-slate-600 mb-4">
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </p>
            <button className="px-6 py-2 border border-red-300 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Security
