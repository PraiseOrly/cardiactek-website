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
  { id: "insights", label: "Health Insights", icon: TrendingUp },
  { id: "activity", label: "Activity", icon: Watch },
];

const healthMetrics = [
  { title: "Heart Rate", value: "72", unit: "BPM", status: "Normal", statusColor: "green", trend: "-2%", trendIcon: "↓", icon: HeartPulse, color: "red", progress: 60 },
  { title: "Blood Pressure", value: "118/78", unit: "mmHg", status: "Optimal", statusColor: "green", trend: "0%", trendIcon: "→", icon: Activity, color: "blue", progress: 56 },
  { title: "SpO2", value: "98", unit: "%", status: "Excellent", statusColor: "green", trend: "+1%", trendIcon: "↑", icon: Zap, color: "purple", progress: 98 },
  { title: "Sleep", value: "7.2", unit: "hrs", status: "Good", statusColor: "yellow", trend: "+15min", trendIcon: "↑", icon: Clock, color: "indigo", progress: 72 },
];

const upcomingAppointments = [
  { id: 1, doctor: "Dr. Sarah Chen", specialty: "Cardiology", date: "Jan 25, 2025", time: "10:00 AM", type: "Follow-up", avatar: "SC" },
  { id: 2, doctor: "Dr. Michael Roberts", specialty: "General Practice", date: "Feb 2, 2025", time: "2:30 PM", type: "Check-up", avatar: "MR" },
];

const medications = [
  { name: "Metoprolol", dosage: "25mg", frequency: "Twice daily", nextDose: "8:00 PM" },
  { name: "Aspirin", dosage: "81mg", frequency: "Once daily", nextDose: "Tomorrow" },
  { name: "Atorvastatin", dosage: "10mg", frequency: "Once daily", nextDose: "10:00 PM" },
];

const recentActivity = [
  { id: 1, icon: FileText, title: "ECG Analysis Report", detail: "Normal sinus rhythm confirmed", color: "green", time: "2 hours ago" },
  { id: 2, icon: Video, title: "Telemedicine Session", detail: "Completed with Dr. Chen", color: "blue", time: "Yesterday" },
  { id: 3, icon: Pill, title: "Medication Refill", detail: "Metoprolol renewed for 90 days", color: "purple", time: "3 days ago" },
];

const quickActions = [
  { id: 1, icon: Calendar, label: "Schedule", color: "red" },
  { id: 2, icon: Video, label: "Telemedicine", color: "blue" },
  { id: 3, icon: MessageSquare, label: "Chat", color: "green" },
  { id: 4, icon: Phone, label: "Emergency", color: "orange" },
];

const insightsData = [
  { title: "Sleep Quality", score: 85, trend: "+10%", insight: "Your sleep duration has improved by 30 minutes on average.", color: "indigo" },
  { title: "Activity Level", score: 72, trend: "+5%", insight: "You are averaging 6,500 steps daily. Target: 8,000 steps.", color: "green" },
  { title: "Stress Management", score: 68, trend: "+15%", insight: "Your stress levels have decreased significantly this week.", color: "yellow" },
  { title: "Diet Compliance", score: 78, trend: "0%", insight: "Maintaining a heart-healthy diet. Keep up the good work!", color: "orange" },
];

const devices = [
  { name: "Apple Watch", status: "Connected", battery: 85, icon: "W" },
  { name: "Blood Pressure Monitor", status: "Synced", battery: 62, icon: "B" },
  { name: "Smart Scale", status: "Active", battery: 100, icon: "S" },
];

const alerts = [
  { type: "success", message: "All vitals within normal range", time: "5 min ago" },
  { type: "info", message: "Water intake goal: Drink 2 more glasses today", time: "1 hour ago" },
  { type: "warning", message: "Take medication in 2 hours", time: "2 hours ago" },
];

const getTrendColor = (trendIcon: string) => {
  if (trendIcon === "↑") return "green";
  if (trendIcon === "↓") return "red";
  return "gray";
};

const MetricCard = ({ metric, index }: { metric: typeof healthMetrics[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2.5 rounded-lg bg-${metric.color}-50`}>
        <metric.icon className={`w-5 h-5 text-${metric.color}-500`} />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${metric.statusColor}-100 text-${metric.statusColor}-700`}>
        {metric.status}
      </span>
    </div>
    <div className="mb-3">
      <p className="text-sm text-gray-500">{metric.title}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
        <span className="text-sm text-gray-500">{metric.unit}</span>
      </div>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className={`h-2 rounded-full bg-${metric.color}-500 transition-all duration-500`}
        style={{ width: `${metric.progress}%` }}
      />
    </div>
    <div className="flex justify-between mt-2">
      <span className={`text-xs font-medium text-${getTrendColor(metric.trendIcon)}-600`}>
        {metric.trendIcon} {metric.trend}
      </span>
    </div>
  </motion.div>
);

const InsightCard = ({ insight, index }: { insight: typeof insightsData[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-semibold text-gray-900">{insight.title}</h3>
      <span className="text-xs font-medium text-green-600">{insight.trend}</span>
    </div>
    <div className="flex items-end gap-2 mb-3">
      <span className="text-3xl font-bold text-gray-900">{insight.score}</span>
      <span className="text-sm text-gray-500 mb-1">/100</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
      <div
        className={`h-2 rounded-full bg-${insight.color}-500`}
        style={{ width: `${insight.score}%` }}
      />
    </div>
    <p className="text-sm text-gray-600">{insight.insight}</p>
  </motion.div>
);

const PatientHome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap border border-gray-100"
          >
            <action.icon className={`w-5 h-5 text-${action.color}-500`} />
            <span className="text-sm font-medium text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2 flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Health Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {healthMetrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} index={i} />
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Appointments */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Upcoming Appointments</h3>
                  <button className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1">
                    View all <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {apt.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{apt.doctor}</p>
                        <p className="text-sm text-gray-500">{apt.specialty}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{apt.date}</p>
                        <p className="text-sm text-gray-500">{apt.time}</p>
                        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                          {apt.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medications */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Medications</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    All on track
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  {medications.map((med, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-50 mt-0.5">
                        <Pill className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-500">{med.dosage} - {med.frequency}</p>
                        <p className="text-xs text-gray-400 mt-1">Next: {med.nextDose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Sparkles className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    Daily Wellness Insight
                    <span className="text-xs font-normal px-2 py-0.5 bg-red-100 text-red-700 rounded-full">
                      AI Powered
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-3">
                    You have maintained a steady heart rate all week! Your ECG readings show consistent
                    normal sinus rhythm. Keep up your hydration and aim for a 20-minute evening walk today.
                  </p>
                  <div className="flex gap-3">
                    <button className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                      View Full Report
                    </button>
                    <button className="text-sm px-4 py-2 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Recent Health Activity</h3>
              </div>
              <div className="p-5 space-y-4">
                {recentActivity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={`p-3 rounded-xl bg-${item.color}-50`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "vitals" && (
          <motion.div
            key="vitals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Vitals Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Vital Signs Monitoring</h2>
              <p className="text-red-100">Real-time health metrics and trends</p>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-${metric.color}-50`}>
                      <metric.icon className={`w-6 h-6 text-${metric.color}-500`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{metric.title}</h3>
                      <p className="text-sm text-gray-500">Last updated: Just now</p>
                    </div>
                    <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium bg-${metric.statusColor}-100 text-${metric.statusColor}-700`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-center py-4">
                    <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
                    <span className="text-lg text-gray-500 ml-1">{metric.unit}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-${metric.color}-500`}
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>0</span>
                    <span>100%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Health Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">7-Day Health Summary</h3>
              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const heights = [65, 80, 75, 90, 85, 70, 78];
                  const isToday = i === 6;
                  return (
                    <div key={day} className="text-center">
                      <div
                        className={`w-full rounded-lg ${isToday ? "bg-red-500" : "bg-red-200"} transition-all duration-500`}
                        style={{ height: `${heights[i]}px`, marginBottom: "8px" }}
                      />
                      <span className={`text-xs ${isToday ? "font-bold text-red-500" : "text-gray-500"}`}>
                        {day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Average heart rate: <span className="font-medium text-gray-900">74 BPM</span>
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === "insights" && (
          <motion.div
            key="insights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* AI Insights Section */}
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6" />
                <h2 className="text-xl font-bold">AI Health Insights</h2>
              </div>
              <p className="text-red-100 mb-6">
                Advanced analysis of your health data powered by machine learning
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-sm text-red-100 mb-1">Heart Health Score</p>
                  <p className="text-3xl font-bold">92/100</p>
                  <p className="text-xs text-red-200 mt-1">3 points from last week</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-sm text-red-100 mb-1">Risk Level</p>
                  <p className="text-3xl font-bold">Low</p>
                  <p className="text-xs text-red-200 mt-1">Maintained for 30 days</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-sm text-red-100 mb-1">Next Checkup</p>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-xs text-red-200 mt-1">Days remaining</p>
                </div>
              </div>
            </div>

            {/* Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insightsData.map((insight, i) => (
                <InsightCard key={i} insight={insight} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "activity" && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Activity Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Today&apos;s Activity</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-red-600">6,542</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Steps</p>
                  <p className="text-xs text-gray-500">Goal: 8,000</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-blue-600">45</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Minutes</p>
                  <p className="text-xs text-gray-500">Active Time</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-green-600">320</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Calories</p>
                  <p className="text-xs text-gray-500">Burned</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-purple-600">8.5</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Hours</p>
                  <p className="text-xs text-gray-500">Stand Time</p>
                </div>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Connected Devices</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {devices.map((device, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl font-bold text-gray-400 bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                      {device.icon}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{device.name}</p>
                      <p className="text-sm text-green-600">{device.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Battery</p>
                      <p className="text-sm font-medium text-gray-900">{device.battery}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Health Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      alert.type === "success"
                        ? "bg-green-50"
                        : alert.type === "warning"
                        ? "bg-yellow-50"
                        : "bg-blue-50"
                    }`}
                  >
                    {alert.type === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {alert.type === "warning" && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                    {alert.type === "info" && <MessageSquare className="w-5 h-5 text-blue-600" />}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
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

