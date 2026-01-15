 import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle,
  ClipboardList,
  HeartPulse,
  MessageSquare,
  Phone,
  Shield,
  TrendingUp,
  Video,
  Watch
} from 'lucide-react'
import { useRef, useState } from 'react'

import { Button, Modal, Section, scaleIn, staggerContainer } from './DoctorBenefitsShared'

// ============================================================================
// HEALTH MONITORING DASHBOARD COMPONENT
// ============================================================================
export function HealthMonitoringDashboard() {
  const [activeTab, setActiveTab] = useState('ecg')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const tabs = [
    { id: 'ecg', label: 'ECG Analysis', icon: Activity },
    { id: 'wearables', label: 'Wearable Sync', icon: Watch },
    { id: 'alerts', label: 'Health Alerts', icon: AlertTriangle },
    { id: 'trends', label: 'Health Trends', icon: TrendingUp },
  ]

  return (
    <Section id="monitoring" className="bg-white text-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              HEALTH MONITORING DASHBOARD
            </h2>
            <p className="text-gray-400 max-w-2xl italic">
              Real-time insights into your heart health with AI-powered analysis and continuous tracking.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-red-500 rounded-full"
            />
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Live Monitoring Active
            </span>
          </div>
        </div>

        <div className="border border-white/10 bg-gray-800/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-white/10 bg-gray-900/80 backdrop-blur-sm">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === tab.id ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-red-400" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 min-h-[500px] relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                {/* Main Viz - ECG */}
                <div className="lg:col-span-2 bg-gray-900 p-6 relative overflow-hidden flex flex-col border border-white/10 rounded-2xl shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-mono text-xs">LIVE ECG - CONTINUOUS</div>
                    <div className="text-red-400 font-mono text-xs">25mm/s</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative border border-white/10 rounded-xl bg-gray-800/50 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <svg viewBox="0 0 800 200" className="w-full h-48 stroke-red-500 fill-none stroke-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                      <path d="M0,100 L50,100 L60,100 L70,80 L80,120 L90,100 L130,100 L140,100 L150,50 L160,150 L170,100 L210,100 L220,100 L230,80 L240,120 L250,100 L290,100 L300,100 L310,50 L320,150 L330,100 L370,100 L380,100 L390,80 L400,120 L410,100 L450,100 L460,100 L470,50 L480,150 L490,100 L530,100 L540,100 L550,80 L560,120 L570,100 L610,100 L620,100 L630,50 L640,150 L650,100 L690,100 L700,100 L710,80 L720,120 L730,100 L770,100 L780,100 L790,50 L800,150" />
                    </svg>
                    <motion.div
                      animate={{ x: [0, 800] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 bottom-0 w-[2px] bg-red-400/50 shadow-[0_0_10px_rgba(248,113,113,0.8)]"
                    />
                  </div>

                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mt-6 grid grid-cols-4 gap-4 text-center">
                    {[
                      { label: 'Heart Rate', value: '72', unit: 'BPM' },
                      { label: 'Rhythm', value: 'Normal', unit: '' },
                      { label: 'Activity', value: 'Active', unit: '' },
                      { label: 'Risk Level', value: 'Low', unit: '' },
                    ].map((metric, i) => (
                      <motion.div key={i} variants={scaleIn} className="bg-gray-800/80 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
                        <div className="text-gray-400 text-[10px] font-mono uppercase">{metric.label}</div>
                        <div className="text-white font-bold text-xl">
                          {metric.value} <span className="text-xs font-normal text-gray-400">{metric.unit}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Sidebar - Health Status */}
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-4">
                  <motion.div variants={scaleIn} className="bg-green-950/50 backdrop-blur-sm border-l-4 border-green-600 p-4 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-green-200 text-sm uppercase">Health Status</h4>
                      <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Excellent</span>
                    </div>
                    <p className="text-green-300 text-xs mb-3">Your heart rhythm is normal with good variability.</p>
                    <div className="text-right text-[10px] font-mono text-green-400">Last checked: 2 min ago</div>
                  </motion.div>

                  <motion.div variants={scaleIn} className="bg-blue-950/50 backdrop-blur-sm border-l-4 border-blue-600 p-4 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-blue-200 text-sm uppercase">Daily Activity</h4>
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">On Track</span>
                    </div>
                    <p className="text-blue-300 text-xs">8,432 steps today. Exercise goal: 85% complete.</p>
                  </motion.div>

                  <motion.div variants={scaleIn} className="bg-gray-800/80 backdrop-blur-sm border border-white/10 p-4 flex-1 flex flex-col justify-between rounded-2xl">
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase mb-4">AI Health Insights</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Wellness Score</span>
                        <span className="text-lg font-bold text-green-500">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 mb-6 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-green-500 h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Consistent exercise routine</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Medication adherence: 100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <Button variant="primary" className="w-full text-xs py-2 px-0">View Report</Button>
                      <Button variant="secondary" className="w-full text-xs py-2 px-0">Share</Button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// PERSONALIZED CARE TOOLS COMPONENT
// ============================================================================
export function PersonalizedCareTools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', description: '' })

  const tools = [
    {
      icon: ClipboardList,
      title: 'Treatment Plans',
      features: ['Personalized medication schedules', 'Lifestyle modification goals', 'Progress tracking and reminders'],
      details: 'Custom care plans designed by your cardiologist and powered by AI to optimize your heart health outcomes.',
    },
    {
      icon: Video,
      title: 'Virtual Consultations',
      features: ['Video visits with cardiologists', 'Secure messaging with your care team', 'E-prescription management'],
      details: 'Access expert cardiac care from home with our integrated telemedicine platform.',
    },
    {
      icon: HeartPulse,
      title: 'Symptom Checker',
      features: ['AI-powered symptom analysis', 'Emergency guidance and alerts', 'Health trend correlation'],
      details: 'Advanced AI that helps you understand symptoms and when to seek medical attention.',
    },
    {
      icon: Brain,
      title: 'AI Health Coach & Patient Education',
      features: ['Personalized health objectives and feedback', 'Daily plans adapted to your condition', 'Guideline-based home blood pressure measurement', 'Feedback and gamified motivation', 'Easy data sharing with your healthcare team'],
      details: 'Your AI coach keeps you informed, motivated, and supported. It combines medicine, behavioral psychology, and artificial intelligence to help you adhere to your therapy and improve cardiovascular health. Change is inspired by goals, feedback, and rewards.',
    },
  ]

  const openModal = (tool: typeof tools[0]) => {
    setModalContent({ title: tool.title, description: tool.details })
    setModalOpen(true)
  }

  return (
    <Section id="care" className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, -20, 0], x: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PERSONALIZED CARE TOOLS</h2>
          <motion.div initial={{ width: 0 }} animate={isInView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="h-1 bg-red-600" />
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <motion.div key={idx} variants={scaleIn} whileHover={{ scale: 1.03, y: -10 }} className="group cursor-pointer">
              <div className="border border-white/20 bg-gray-900/80 backdrop-blur-sm p-8 h-full hover:border-red-600 transition-all duration-300 flex flex-col rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-red-600/20">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6 inline-block p-3 bg-white/5 rounded-2xl group-hover:bg-red-600 transition-colors w-fit">
                  <tool.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-6">{tool.title}</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {tool.features.map((feature, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 mt-1.5 flex-shrink-0 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <button onClick={() => openModal(tool)} className="inline-flex items-center text-red-400 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors group-hover:translate-x-2 duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title}>
        <p className="text-gray-300 leading-relaxed">{modalContent.description}</p>
        <div className="mt-6 flex gap-4">
          <Button variant="primary" className="flex-1">Schedule Demo</Button>
          <Button variant="outline" className="flex-1" onClick={() => setModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </Section>
  )
}

// ============================================================================
// EMERGENCY & SUPPORT COMPONENT
// ============================================================================
export function EmergencySupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Phone,
      title: 'Emergency SOS',
      description: 'One-touch emergency calling with automatic location sharing and medical history transmission.',
      items: ['Instant 911 connection', 'GPS location tracking', 'Emergency contacts notification'],
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Military-grade encryption and HIPAA compliance for complete peace of mind.',
      items: ['End-to-end encryption', 'HIPAA certified platform', 'Secure cloud storage'],
    },
    {
      icon: MessageSquare,
      title: '24/7 Support',
      description: 'Round-the-clock access to cardiac nurses and health coaches.',
      items: ['Live chat support', 'Nurse consultations', 'Health coaching sessions'],
    },
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Seamless scheduling and coordination with your healthcare providers.',
      items: ['Online booking system', 'Appointment reminders', 'Virtual waiting rooms'],
    },
  ]

  return (
    <Section id="support" className="bg-white text-gray-900">
      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">EMERGENCY & SUPPORT SERVICES</h2>
          <p className="text-gray-600 text-lg italic">Comprehensive support system ensuring you're never alone in your heart health journey.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={scaleIn} whileHover={{ scale: 1.02 }} className="bg-gray-800/80 backdrop-blur-sm p-10 hover:bg-gray-700/80 transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="p-3 bg-red-600 text-white rounded-2xl shadow-lg shadow-red-600/30">
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <span className="font-mono text-xs text-gray-400">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-sm italic">{feature.description}</p>
              <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {feature.items.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-red-600 pb-1 text-red-400 hover:text-white hover:border-white transition-colors inline-block">
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// HEALTH INSIGHTS & ANALYTICS COMPONENT
// ============================================================================
export function HealthInsights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="insights" className="bg-white border-t border-gray-200">
      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">HEALTH INSIGHTS & ANALYTICS</h2>
          <p className="text-gray-600 italic">Understand your heart health patterns and track your progress over time.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={scaleIn} whileHover={{ scale: 1.02, y: -5 }} className="bg-white backdrop-blur-sm border border-gray-200 p-10 flex flex-col rounded-3xl shadow-2xl hover:shadow-red-600/10 transition-all">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-6 rounded-2xl shadow-lg shadow-red-600/30">
              <TrendingUp className="w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Health Trend Analysis</h3>
            <p className="text-gray-600 mb-8 flex-1">Interactive charts showing your heart rate patterns, activity levels, and risk factor trends over time.</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="bg-white backdrop-blur-sm border border-gray-200 p-6 mb-8 rounded-2xl">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold uppercase text-gray-500">Heart Health Score</span>
                <motion.span initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.7, type: 'spring' }} className="text-2xl font-bold text-green-600">
                  87%
                </motion.span>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={isInView ? { width: '87%' } : {}} transition={{ duration: 1, delay: 0.8 }} className="bg-green-500 h-1" />
              </div>
            </motion.div>
            <a href="#" className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-red-600 hover:text-red-700 transition-colors group">
              View Full Report <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={scaleIn} whileHover={{ scale: 1.02, y: -5 }} className="bg-white backdrop-blur-sm border border-gray-200 p-10 flex flex-col rounded-3xl shadow-2xl hover:shadow-red-600/10 transition-all">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-6 rounded-2xl shadow-lg shadow-red-600/30">
              <Activity className="w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lifestyle Impact Tracking</h3>
            <p className="text-gray-600 mb-8 flex-1">Monitor how your daily habits affect your cardiovascular health with detailed analytics and recommendations.</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="bg-white backdrop-blur-sm border border-gray-200 p-6 mb-8 rounded-2xl">
              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.2, zIndex: 10 }} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">
                    D{i}
                  </motion.div>
                ))}
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1 }} whileHover={{ scale: 1.2, zIndex: 10 }} className="w-8 h-8 rounded-full bg-red-600 text-white border-2 border-white flex items-center justify-center text-xs font-bold cursor-pointer">
                  +12
                </motion.div>
              </div>
              <div className="text-xs text-gray-500 font-mono">WEEKLY_ACTIVITY: 5/7 DAYS // GOAL: 90%</div>
            </motion.div>
            <a href="#" className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-red-600 hover:text-red-700 transition-colors group">
              Lifestyle Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
