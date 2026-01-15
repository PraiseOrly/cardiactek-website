import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Calendar,
  CheckCircle,
  Clock,
  HeartPulse,
  MessageSquare,
  Pill,
  Sparkles,
  TrendingUp,
  Video,
  Watch,
} from "lucide-react";
import { useState } from "react";

const PatientHome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "monitoring", label: "Health Monitoring", icon: Watch },
    { id: "insights", label: "Health Insights", icon: TrendingUp },
    { id: "support", label: "Support & Tools", icon: MessageSquare },
  ];

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-3 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-red-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Key Health Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Heart Rate",
                  value: "72 BPM",
                  note: "Normal",
                  icon: HeartPulse,
                  color: "red",
                },
                {
                  title: "Next Appointment",
                  value: "Jan 25",
                  note: "Cardiology Review",
                  icon: Calendar,
                  color: "blue",
                },
                {
                  title: "Medications",
                  value: "3 Active",
                  note: "All on track",
                  icon: Pill,
                  color: "green",
                },
                {
                  title: "Last Checkup",
                  value: "7 days",
                  note: "All vitals normal",
                  icon: Clock,
                  color: "purple",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`bg-white p-5 rounded-xl shadow-sm border-l-4 border-${card.color}-500 flex items-center`}
                >
                  <card.icon className={`h-10 w-10 text-${card.color}-500`} />
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                    <p className="text-xs text-green-600 font-medium">{card.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl shadow-sm flex gap-4 items-start">
              <Sparkles className="w-8 h-8 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Daily Wellness Insight
                </h3>
                <p className="text-sm text-gray-600">
                  You've maintained a steady heart rate all week! Keep up your
                  hydration and aim for a 20-minute evening walk today.
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Health Activity
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "ECG Reading Recorded",
                    detail: "Normal sinus rhythm detected",
                    color: "green",
                    time: "2h ago",
                  },
                  {
                    icon: MessageSquare,
                    title: "AI Coach Message",
                    detail: "Your average sleep improved by 30 mins",
                    color: "blue",
                    time: "4h ago",
                  },
                  {
                    icon: Video,
                    title: "Telemedicine Session",
                    detail: "Completed with Dr. Smith",
                    color: "purple",
                    time: "1 day ago",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-4 bg-${item.color}-50 rounded-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={`w-5 h-5 text-${item.color}-600`}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "monitoring" && (
          <motion.div
            key="monitoring"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Live Monitoring */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Live Health Monitoring
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    ECG Live Feed
                  </h3>
                  <div className="h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                    ECG waveform visualization
                  </div>
                  <div className="mt-4 grid grid-cols-2 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Heart Rate</p>
                      <p className="text-lg font-bold text-red-600">72 BPM</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rhythm</p>
                      <p className="text-lg font-bold text-green-600">Normal</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Device Sync Status
                  </h3>
                  {[
                    ["Smartwatch", "Connected", "green"],
                    ["BP Monitor", "Synced", "green"],
                    ["Scale", "Syncing…", "yellow"],
                  ].map(([device, status, color], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b last:border-none"
                    >
                      <span className="text-sm">{device}</span>
                      <span className={`text-${color}-600 font-medium`}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Health Alerts
              </h2>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    All systems normal
                  </p>
                  <p className="text-xs text-gray-500">
                    Last checked 5 minutes ago
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PatientHome;

