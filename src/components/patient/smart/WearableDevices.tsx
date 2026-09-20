import {
  Watch,
  Activity,
  Smartphone,
  Bluetooth,
  Plus,
  Check,
  AlertCircle,
} from 'lucide-react'
import React from 'react'

interface Device {
  id: string
  name: string
  type: string
  status: 'connected' | 'disconnected' | 'pairing'
  battery: number
  lastSync: string
  icon: React.ReactNode
}

export const WearableDevices: React.FC = () => {
  const [devices] = React.useState<Device[]>([
    {
      id: '1',
      name: 'Apple Watch Series 9',
      type: 'Smartwatch',
      status: 'connected',
      battery: 85,
      lastSync: '2 minutes ago',
      icon: <Watch size={24} />,
    },
    {
      id: '2',
      name: 'Fitbit Charge 6',
      type: 'Fitness Tracker',
      status: 'connected',
      battery: 72,
      lastSync: '5 minutes ago',
      icon: <Activity size={24} />,
    },
    {
      id: '3',
      name: 'iPhone 15 Pro',
      type: 'Smartphone',
      status: 'connected',
      battery: 100,
      lastSync: 'Now',
      icon: <Smartphone size={24} />,
    },
  ])

  return (
    <div className="space-y-6">
      {/* Connected Devices */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Connected Devices
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {devices.length} device{devices.length !== 1 ? 's' : ''} syncing
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm">
            <Plus size={16} />
            Add Device
          </button>
        </div>

        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between p-5 border border-slate-200/60 rounded-xl hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600">
                  {device.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {device.name}
                  </h3>
                  <p className="text-sm text-slate-600">{device.type}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Last sync: {device.lastSync}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Battery */}
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {device.battery}%
                  </p>
                  <div className="w-24 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        device.battery > 50
                          ? 'bg-green-500'
                          : device.battery > 20
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                      }`}
                      style={{ width: `${device.battery}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status */}
                <div className="text-right">
                  {device.status === 'connected' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <Check size={14} />
                      Connected
                    </span>
                  ) : device.status === 'pairing' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      <Bluetooth size={14} />
                      Pairing...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                      <AlertCircle size={14} />
                      Disconnected
                    </span>
                  )}
                </div>

                {/* Actions */}
                <button className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  Settings
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Permissions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">
          Data Permissions
        </h2>

        <div className="space-y-4">
          {[
            {
              name: 'Heart Rate Data',
              description: 'Real-time heart rate monitoring from wearables',
              enabled: true,
            },
            {
              name: 'Activity Data',
              description: 'Steps, calories, and exercise data',
              enabled: true,
            },
            {
              name: 'Sleep Data',
              description: 'Sleep quality and duration tracking',
              enabled: true,
            },
            {
              name: 'Blood Pressure',
              description: 'BP readings from compatible devices',
              enabled: false,
            },
          ].map((perm, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div>
                <p className="font-medium text-slate-900">{perm.name}</p>
                <p className="text-sm text-slate-600">{perm.description}</p>
              </div>
              <input
                type="checkbox"
                defaultChecked={perm.enabled}
                className="w-5 h-5 rounded cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sync Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Sync Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Sync Frequency
            </label>
            <select className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
              <option>Real-time (Recommended)</option>
              <option>Every 15 minutes</option>
              <option>Every hour</option>
              <option>Daily</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-medium text-slate-900">
                WiFi-only Sync
              </p>
              <p className="text-sm text-slate-600">
                Reduce battery usage on cellular
              </p>
            </div>
            <input type="checkbox" className="w-5 h-5 rounded cursor-pointer" />
          </div>

          <button className="w-full px-4 py-2 border border-slate-200/60 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium mt-4">
            Sync Now
          </button>
        </div>
      </div>
    </div>
  )
}
