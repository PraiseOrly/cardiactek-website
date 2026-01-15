import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  HeartPulse,
  MessageSquare,
  Phone,
  Pill,
  Sparkles,
  TrendingUp,
  Video,
  Watch,
  Zap,
} from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "vitals", label: "Vitals", icon: HeartPulse },
  { id: "insights", label: "Insights", icon: TrendingUp },
  { id: "activity", label: "Activity", icon: Watch },
];

const healthMetrics = [
  { title: "Heart Rate", value: "72", unit: "BPM", status: "Normal", statusColor: "green", trend: "-2%", trendIcon: "↓", icon: HeartPulse, color: "red", progress: 60 },
  { title: "Blood Pressure", value: "118/78", unit: "mmHg", status: "Optimal", statusColor: "green", trend: "0%", trendIcon: "→", icon: Activity, color: "blue", progress: 56 },
  { title: "SpO2", value: "98", unit: "%", status: "Excellent", statusColor: "green", trend: "+1%", trendIcon: "↑", icon: Zap, color: "purple", progress: 98 },
  { title: "Sleep", value: "7.2", unit: "hrs", status: "Good", statusColor: "yellow", trend: "+15min", trendIcon: "↑", icon: Clock, color: "indigo", progress: 72 },
];

const upcomingAppointments = [
  { id: 1, doctor: "Dr. Sarah Chen", specialty: "Cardiology", date: "Jan 25", time: "10:00 AM", type: "Follow-up", avatar: "SC" },
  { id: 2, doctor: "Dr. Michael Roberts", specialty: "General Practice", date: "Feb 2", time: "2:30 PM", type: "Check-up", avatar: "MR" },
];

const medications = [
  { name: "Metoprolol", dosage: "25mg", frequency: "Twice daily", nextDose: "8:00 PM" },
  { name: "Aspirin", dosage: "81mg", frequency: "Once daily", nextDose: "Tomorrow" },
  { name: "Atorvastatin", dosage: "10mg", frequency: "Once daily", nextDose: "10:00 PM" },
];

const recentActivity = [
  { id: 1, icon: FileText, title: "ECG Analysis Report", detail: "Normal sinus rhythm", color: "green", time: "2h ago" },
  { id: 2, icon: Video, title: "Telemedicine Session", detail: "Completed", color: "blue", time: "Yesterday" },
  { id: 3, icon: Pill, title: "Medication Refill", detail: "Metoprolol renewed", color: "purple", time: "3d ago" },
];

const quickActions = [
  { id: 1, icon: Calendar, label: "Schedule", color: "red" },
  { id: 2, icon: Video, label: "TeleMed", color: "blue" },
  { id: 3, icon: MessageSquare, label: "Chat", color: "green" },
  { id: 4, icon: Phone, label: "Emergency", color: "orange" },
];

const insightsData = [
  { title: "Sleep Quality", score: 85, trend: "+10%", insight: "Sleep duration improved by 30 min.", color: "indigo" },
  { title: "Activity Level", score: 72, trend: "+5%", insight: "Averaging 6,500 steps daily.", color: "green" },
  { title: "Stress Management", score: 68, trend: "+15%", insight: "Stress levels decreased.", color: "yellow" },
  { title: "Diet Compliance", score: 78, trend: "0%", insight: "Maintaining heart-healthy diet.", color: "orange" },
];

const devices = [
  { name: "Apple Watch", status: "Connected", battery: 85, icon: "W" },
  { name: "BP Monitor", status: "Synced", battery: 62, icon: "B" },
  { name: "Smart Scale", status: "Active", battery: 100, icon: "S" },
];

const alerts = [
  { type: "success", message: "All vitals within normal range", time: "5 min ago" },
  { type: "info", message: "Water intake goal: 2 more glasses", time: "1 hour ago" },
  { type: "warning", message: "Take medication in 2 hours", time: "2 hours ago" },
];

const getTrendColor = (trendIcon: string) => {
  if (trendIcon === "↑") return "green";
  if (trendIcon === "↓") return "red";
  return "gray";
};

const MetricCard = ({ metric, index }: { metric: typeof healthMetrics[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-sm transition-shadow"
  >
    <div className="flex justify-between items-start mb-1.5">
      <div className={`p-1.5 rounded-lg bg-${metric.color}-50`}>
        <metric.icon className={`w-3.5 h-3.5 text-${metric.color}-500`} />
      </div>
      <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-${metric.statusColor}-100 text-${metric.statusColor}-700`}>
        {metric.status}
      </span>
    </div>
    <div className="mb-1.5">
      <p className="text-[10px] text-gray-500">{metric.title}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-gray-900">{metric.value}</span>
        <span className="text-[10px] text-gray-500">{metric.unit}</span>
      </div>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-1.5">
      <div
        className={`h-1.5 rounded-full bg-${metric.color}-500 transition-all duration-500`}
        style={{ width: `${metric.progress}%` }}
      />
    </div>
    <div className="flex justify-end mt-1">
      <span className={`text-[9px] font-medium text-${getTrendColor(metric.trendIcon)}-600`}>
        {metric.trendIcon} {metric.trend}
      </span>
    </div>
  </motion.div>
);

const InsightCard = ({ insight, index }: { insight: typeof insightsData[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xs font-semibold text-gray-900">{insight.title}</h3>
      <span className="text-[9px] font-medium text-green-600">{insight.trend}</span>
    </div>
    <div className="flex items-end gap-1 mb-2">
      <span className="text-2xl font-bold text-gray-900">{insight.score}</span>
      <span className="text-xs text-gray-500 mb-0.5">/100</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
      <div
        className={`h-1.5 rounded-full bg-${insight.color}-500`}
        style={{ width: `${insight.score}%` }}
      />
    </div>
    <p className="text-[10px] text-gray-600">{insight.insight}</p>
  </motion.div>
);

const PatientHome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-3">
      {/* Quick Actions */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap border border-gray-100"
          >
            <action.icon className={`w-4 h-4 text-${action.color}-500`} />
            <span className="text-xs font-medium text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-1.5 flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Health Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {healthMetrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} index={i} />
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Upcoming Appointments */}
              <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100">
                <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-900">Appointments</h3>
                  <button className="text-[10px] text-red-500 hover:text-red-600 font-medium flex items-center gap-0.5">
                    View <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="p-3 space-y-2">
                  {upcomingAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-[10px]">
                        {apt.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-xs">{apt.doctor}</p>
                        <p className="text-[10px] text-gray-500">{apt.specialty}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-medium text-gray-900">{apt.date}</p>
                        <p className="text-[10px] text-gray-500">{apt.time}</p>
                        <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                          {apt.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medications */}
              <div className="bg-white rounded-lg border border-gray-100">
                <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-xs font-bold text-gray-900">Medications</h3>
                  <span className="text-[9px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                    On track
                  </span>
                </div>
                <div className="p-3 space-y-2">
                  {medications.map((med, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="p-1 rounded-lg bg-green-50 mt-0.5">
                        <Pill className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-xs">{med.name}</p>
                        <p className="text-[10px] text-gray-500">{med.dosage} - {med.frequency}</p>
                        <p className="text-[9px] text-gray-400">Next: {med.nextDose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights & Recent Activity Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* AI Wellness Insight */}
              <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-lg p-3 border border-red-100">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 bg-white rounded-lg shadow-sm">
                    <Sparkles className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-gray-900 mb-0.5 flex items-center gap-1.5">
                      Daily Insight
                      <span className="text-[9px] font-normal px-1.5 py-0.5 bg-red-100 text-red-700 rounded-full">
                        AI
                      </span>
                    </h3>
                    <p className="text-[10px] text-gray-600 mb-2">
                      Steady heart rate all week! ECG shows normal sinus rhythm. Keep up hydration & aim for 20-min walk.
                    </p>
                    <div className="flex gap-1.5">
                      <button className="text-[10px] px-2.5 py-1 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                        View Report
                      </button>
                      <button className="text-[10px] px-2.5 py-1 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg border border-gray-100">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-xs font-bold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-3 space-y-2">
                  {recentActivity.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`p-1.5 rounded-lg bg-${item.color}-50`}>
                        <item.icon className={`w-3.5 h-3.5 text-${item.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-xs">{item.title}</p>
                        <p className="text-[10px] text-gray-500">{item.detail}</p>
                      </div>
                      <span className="text-[9px] text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "vitals" && (
          <motion.div
            key="vitals"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Vitals Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-4 text-white">
              <h2 className="text-base font-bold mb-1">Vital Signs Monitoring</h2>
              <p className="text-xs text-red-100">Real-time health metrics and trends</p>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {healthMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`p-2 rounded-lg bg-${metric.color}-50`}>
                      <metric.icon className={`w-5 h-5 text-${metric.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs font-semibold text-gray-900">{metric.title}</h3>
                      <p className="text-[10px] text-gray-500">Updated: Just now</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium bg-${metric.statusColor}-100 text-${metric.statusColor}-700`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-center py-2">
                    <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                    <span className="text-base text-gray-500 ml-1">{metric.unit}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-${metric.color}-500`}
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-[9px] text-gray-500">
                    <span>0</span>
                    <span>100%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Health Summary */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-900 mb-3">7-Day Health Summary</h3>
              <div className="grid grid-cols-7 gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const heights = [65, 80, 75, 90, 85, 70, 78];
                  const isToday = i === 6;
                  return (
                    <div key={day} className="text-center">
                      <div
                        className={`w-full rounded-md ${isToday ? "bg-red-500" : "bg-red-200"} transition-all duration-500`}
                        style={{ height: `${heights[i]}px`, marginBottom: "6px" }}
                      />
                      <span className={`text-[9px] ${isToday ? "font-bold text-red-500" : "text-gray-500"}`}>
                        {day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[10px] text-gray-500 mt-3 text-center">
                Average heart rate: <span className="font-medium text-gray-900">74 BPM</span>
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === "insights" && (
          <motion.div
            key="insights"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* AI Insights Header */}
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-base font-bold">AI Health Insights</h2>
              </div>
              <p className="text-xs text-red-100 mb-4">
                Advanced analysis powered by machine learning
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/20 rounded-lg p-2.5 backdrop-blur-sm">
                  <p className="text-[10px] text-red-100 mb-0.5">Heart Health</p>
                  <p className="text-xl font-bold">92/100</p>
                  <p className="text-[9px] text-red-200 mt-0.5">+3 from last week</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2.5 backdrop-blur-sm">
                  <p className="text-[10px] text-red-100 mb-0.5">Risk Level</p>
                  <p className="text-xl font-bold">Low</p>
                  <p className="text-[9px] text-red-200 mt-0.5">30 days maintained</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2.5 backdrop-blur-sm">
                  <p className="text-[10px] text-red-100 mb-0.5">Next Checkup</p>
                  <p className="text-xl font-bold">12</p>
                  <p className="text-[9px] text-red-200 mt-0.5">Days remaining</p>
                </div>
              </div>
            </div>

            {/* Insights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {insightsData.map((insight, i) => (
                <InsightCard key={i} insight={insight} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "activity" && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Activity Stats */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h2 className="text-xs font-bold text-gray-900 mb-4">Today&apos;s Activity</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-red-600">6.5k</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-900">Steps</p>
                  <p className="text-[9px] text-gray-500">Goal: 8k</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-blue-600">45</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-900">Minutes</p>
                  <p className="text-[9px] text-gray-500">Active Time</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-green-600">320</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-900">Calories</p>
                  <p className="text-[9px] text-gray-500">Burned</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-purple-600">8.5</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-900">Hours</p>
                  <p className="text-[9px] text-gray-500">Stand Time</p>
                </div>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-900 mb-3">Connected Devices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {devices.map((device, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
                    <span className="text-xl font-bold text-gray-400 bg-white w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
                      {device.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-900">{device.name}</p>
                      <p className="text-[10px] text-green-600">{device.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-500">Battery</p>
                      <p className="text-xs font-medium text-gray-900">{device.battery}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="text-xs font-bold text-gray-900 mb-3">Health Alerts</h3>
              <div className="space-y-2">
                {alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg ${
                      alert.type === "success"
                        ? "bg-green-50"
                        : alert.type === "warning"
                        ? "bg-yellow-50"
                        : "bg-blue-50"
                    }`}
                  >
                    {alert.type === "success" && <CheckCircle className="w-4 h-4 text-green-600" />}
                    {alert.type === "warning" && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                    {alert.type === "info" && <MessageSquare className="w-4 h-4 text-blue-600" />}
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-900">{alert.message}</p>
                      <p className="text-[9px] text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PatientHome;

