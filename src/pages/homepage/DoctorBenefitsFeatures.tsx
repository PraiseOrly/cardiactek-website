import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart,
  BarChart2,
  Bell,
  Calendar,
  CheckCircle,
  CheckSquare,
  ClipboardList,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
  Video,
  Watch
} from 'lucide-react'
import { useRef, useState } from 'react'

import { Button, Modal, Section, scaleIn, staggerContainer } from './DoctorBenefitsShared'

// ============================================================================
// DIAGNOSTIC CENTER COMPONENT (Light Background - bg-gray-100)
// ============================================================================
export function DiagnosticCenter() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const tabs = [
    { id: 'dashboard', label: 'Real-Time Dashboard', icon: Activity },
    { id: 'alerts', label: 'Critical Alert System', icon: AlertTriangle },
    { id: 'records', label: '360° Patient Records', icon: FileText },
    { id: 'reports', label: 'Diagnostic Reports Hub', icon: BarChart2 },
  ]

  return (
    <Section id="diagnostics" className="bg-gray-100 text-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
              DIAGNOSTIC COMMAND CENTER
            </h2>
            <p className="text-gray-600 max-w-2xl italic">
              Centralized intelligence for real-time cardiac monitoring and analysis.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-red-600 rounded-full"
            />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Live Stream Active
            </span>
          </div>
        </div>

        <div className="border-2 border-gray-600 bg-white backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 bg-gray-50 backdrop-blur-sm">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === tab.id ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabDiagnostic" className="absolute bottom-0 left-0 right-0 h-1 bg-red-400" />
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
                <div className="lg:col-span-2 bg-gray-50 p-6 relative overflow-hidden flex flex-col border-2 border-red-600 rounded-2xl shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-gray-700 font-mono text-xs">LEAD II - CONTINUOUS</div>
                    <div className="text-red-600 font-mono text-xs">25mm/s</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative border-2 border-gray-600 rounded-xl bg-white overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <svg viewBox="0 0 800 200" className="w-full h-48 stroke-red-600 fill-none stroke-2 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                      <path d="M0,100 L50,100 L60,100 L70,80 L80,120 L90,100 L130,100 L140,100 L150,50 L160,150 L170,100 L210,100 L220,100 L230,80 L240,120 L250,100 L290,100 L300,100 L310,50 L320,150 L330,100 L370,100 L380,100 L390,80 L400,120 L410,100 L450,100 L460,100 L470,50 L480,150 L490,100 L530,100 L540,100 L550,80 L560,120 L570,100 L610,100 L620,100 L630,50 L640,150 L650,100 L690,100 L700,100 L710,80 L720,120 L730,100 L770,100 L780,100 L790,50 L800,150" />
                    </svg>
                    <motion.div
                      animate={{ x: [0, 800] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 bottom-0 w-[2px] bg-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                    />
                  </div>

                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mt-6 grid grid-cols-4 gap-4 text-center">
                    {[
                      { label: 'Heart Rate', value: '72', unit: 'BPM' },
                      { label: 'PR Interval', value: '164', unit: 'ms' },
                      { label: 'QRS Dur', value: '88', unit: 'ms' },
                      { label: 'QT/QTc', value: '392', unit: 'ms' },
                    ].map((metric, i) => (
                      <motion.div key={i} variants={scaleIn} className="bg-white border-2 border-red-600 p-2 rounded-xl">
                        <div className="text-gray-500 text-[10px] font-mono uppercase">{metric.label}</div>
                        <div className="text-gray-900 font-bold text-xl">
                          {metric.value} <span className="text-xs font-normal text-gray-500">{metric.unit}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Sidebar - Alerts & AI */}
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-4">
                  <motion.div variants={scaleIn} className="bg-red-100 border-l-8 border-red-600 p-4 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-red-800 text-sm uppercase">STEMI Alert</h4>
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Priority Red</span>
                    </div>
                    <p className="text-red-700 text-xs mb-3">Inferior wall myocardial infarction suspected. ST elevation in II, III, aVF.</p>
                    <div className="text-right text-[10px] font-mono text-red-600">T-minus 2m 30s</div>
                  </motion.div>

                  <motion.div variants={scaleIn} className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-yellow-800 text-sm uppercase">Arrhythmia Detected</h4>
                      <span className="bg-yellow-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Warning</span>
                    </div>
                    <p className="text-yellow-700 text-xs">Atrial Fibrillation with rapid ventricular response.</p>
                  </motion.div>

                  <motion.div variants={scaleIn} className="bg-white border-2 border-red-600 p-4 flex-1 flex flex-col justify-between rounded-2xl">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-4">AI Analysis</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">Confidence Score</span>
                        <span className="text-lg font-bold text-red-600">98.7%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 mb-6 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '98.7%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-red-600 h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Sinus Rhythm confirmed</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>No artifact detected</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <Button variant="primary" className="w-full text-xs py-2 px-0">Accept AI</Button>
                      <Button variant="secondary" className="w-full text-xs py-2 px-0">Review</Button>
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
// DIAGNOSTIC TOOLS COMPONENT (White Background)
// ============================================================================
export function DiagnosticTools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', description: '' })

  const tools = [
    {
      icon: Activity,
      title: 'AI-ECG Analysis',
      features: ['98.7% interpretation accuracy', 'Arrhythmia and myocardial infarction detection', 'Annotated waveforms and downloadable reports'],
      details: 'Our AI-ECG Analysis uses deep learning models trained on millions of ECG recordings to provide instant, accurate interpretations.',
    },
    {
      icon: Watch,
      title: 'Holter Monitoring',
      features: ['24/48/72-hour recording capability', 'Correlation with stress and sleep patterns', 'Direct integration with mobile recorders'],
      details: 'Continuous cardiac monitoring that integrates seamlessly with wearable devices.',
    },
    {
      icon: FileText,
      title: 'Risk Stratification',
      features: ['ASCVD 10-year risk estimation', 'Heart failure and stroke risk flags', 'Evidence-based clinical recommendations'],
      details: 'Advanced risk prediction algorithms that combine patient history, lab values, and imaging data.',
    },
  ]

  const openModal = (tool: typeof tools[0]) => {
    setModalContent({ title: tool.title, description: tool.details })
    setModalOpen(true)
  }

  return (
    <Section id="tools" className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, -20, 0], x: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ADVANCED DIAGNOSTIC TOOLS</h2>
          <motion.div initial={{ width: 0 }} animate={isInView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="h-1 bg-red-600" />
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <motion.div key={idx} variants={scaleIn} whileHover={{ scale: 1.03, y: -10 }} className="group cursor-pointer">
              <div className="border-2 border-red-600 bg-white p-8 h-full hover:border-red-600 transition-all duration-300 flex flex-col rounded-3xl shadow-lg hover:shadow-xl hover:shadow-red-600/10">
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6 inline-block p-3 bg-gray-100 rounded-2xl group-hover:bg-red-600 transition-colors w-fit">
                  <tool.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{tool.title}</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {tool.features.map((feature, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-600 mt-1.5 flex-shrink-0 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <button onClick={() => openModal(tool)} className="inline-flex items-center text-red-600 font-bold uppercase text-sm tracking-wider hover:text-red-700 transition-colors group-hover:translate-x-2 duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title}>
        <p className="text-gray-700 leading-relaxed">{modalContent.description}</p>
        <div className="mt-6 flex gap-4">
          <Button variant="primary" className="flex-1">Request Demo</Button>
          <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100" onClick={() => setModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </Section>
  )
}

// ============================================================================
// CARE COORDINATION COMPONENT (Light Background - bg-gray-100)
// ============================================================================
export function CareCoordination() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: ClipboardList,
      title: 'Treatment Plans',
      description: 'Dynamic, trackable care pathways for every patient.',
      items: ['Personalized medication and rehab schedules', 'Lifestyle modification protocols', 'Care goal tracking'],
    },
    {
      icon: MessageSquare,
      title: 'Secure Messaging',
      description: 'Confidential communication for care teams.',
      items: ['Patient Q&A inbox', 'Specialist referrals and direct team chat', 'Attach ECGs, imaging, and lab reports'],
    },
    {
      icon: Watch,
      title: 'Device Integration',
      description: 'Connect patient devices directly into care workflows.',
      items: ['Apple Watch, Fitbit, KardiaMobile', 'BP cuffs, oximeters, pacemakers', 'Continuous data syncing'],
    },
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Integrated telehealth for real-time cardiac care.',
      items: ['Live video consults with vitals overlay', 'E-prescriptions and diagnostic ordering', 'Auto-generated visit summaries'],
    },
  ]

  return (
    <Section id="coordination" className="bg-gray-100 text-gray-900">
      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">CARE COORDINATION & WORKFLOW</h2>
          <p className="text-gray-600 text-lg italic">Streamline communication and data flow between patients, cardiologists, and care teams.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 border-2 border-red-600 rounded-3xl overflow-hidden">
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={scaleIn} whileHover={{ scale: 1.02 }} className="bg-white border-2 border-red-600 p-10 hover:bg-gray-50 transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="p-3 bg-red-600 text-white rounded-2xl shadow-lg shadow-red-600/30">
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <span className="font-mono text-xs text-gray-400">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-sm italic">{feature.description}</p>
              <ul className="space-y-3 mb-8 border-t border-gray-200 pt-6">
                {feature.items.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-red-600 pb-1 text-red-600 hover:text-red-700 hover:border-red-700 transition-colors inline-block">
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
// PATIENT MONITORING COMPONENT (White Background)
// ============================================================================
export function PatientMonitoring() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { icon: Calendar, title: 'Follow-Up Scheduler', description: 'Never miss a follow-up with auto-scheduled post-discharge visits and smart reminders.' },
    { icon: CheckSquare, title: 'Patient Adherence Tracker', description: 'Monitor medication compliance and lifestyle changes with daily vitals tracking.' },
    { icon: Bell, title: 'Patient Engagement Feed', description: 'AI-generated daily summaries and irregular pattern highlights for proactive review.' },
    { icon: TrendingUp, title: 'Predictive Analytics', description: 'Forecast risk for deterioration and readmission with trend visualization.' },
  ]

  return (
    <Section id="monitoring" className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, -20, 0], x: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            CONTINUOUS <br /> PATIENT <br />
            <span className="text-red-600">MONITORING</span>
          </h2>
          <p className="text-gray-600 mb-8 italic">Extend care beyond the clinic walls with intelligent tracking and engagement tools.</p>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border-2 border-red-600 bg-gray-50 rounded-2xl shadow-lg">
            <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="text-5xl font-bold text-gray-900 mb-2">
              73%
            </motion.div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Reduction in 30-day readmissions</div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-8">
          <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }} className="border-2 border-red-600 bg-white p-8 hover:border-red-600/50 transition-all group cursor-pointer rounded-3xl shadow-lg">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <feature.icon className="w-8 h-8 text-red-600 mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-red-600 transition-colors">
                  Learn More <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// PERFORMANCE ANALYTICS COMPONENT (Light Background - bg-gray-100)
// ============================================================================
export function PerformanceAnalytics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="analytics" className="bg-gray-100 text-gray-900">
      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">PERFORMANCE & OUTCOMES ANALYTICS</h2>
          <p className="text-gray-600 italic">Quantify your clinical impact and optimize team efficiency.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={scaleIn} whileHover={{ scale: 1.02, y: -5 }} className="bg-white border-2 border-red-600 p-10 flex flex-col rounded-3xl shadow-xl hover:shadow-red-600/10 transition-all">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-6 rounded-2xl shadow-lg shadow-red-600/30">
              <BarChart className="w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Patient Outcomes Dashboard</h3>
            <p className="text-gray-600 mb-8 flex-1">Track recovery metrics, efficiency scores, and compliance rates. Benchmark your institution's performance against peer data.</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="bg-gray-50 border-2 border-red-600 p-6 mb-8 rounded-2xl">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold uppercase text-gray-600">Recovery Rate</span>
                <motion.span initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.7, type: 'spring' }} className="text-2xl font-bold text-green-600">
                  +12.4%
                </motion.span>
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.8 }} className="bg-green-500 h-1" />
              </div>
            </motion.div>
            <a href="#" className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-red-600 hover:text-red-700 transition-colors group">
              View Analytics Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={scaleIn} whileHover={{ scale: 1.02, y: -5 }} className="bg-white border-2 border-red-600 p-10 flex flex-col rounded-3xl shadow-xl hover:shadow-red-600/10 transition-all">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-6 rounded-2xl shadow-lg shadow-red-600/30">
              <Users className="w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Care Team Collaboration Hub</h3>
            <p className="text-gray-600 mb-8 flex-1">Your command center for multidisciplinary care. Assign cases, centralize updates, and visualize workflow bottlenecks.</p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="bg-gray-50 border-2 border-red-600 p-6 mb-8 rounded-2xl">
              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ scale: 1.2, zIndex: 10 }} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 cursor-pointer">
                    U{i}
                  </motion.div>
                ))}
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1 }} whileHover={{ scale: 1.2, zIndex: 10 }} className="w-8 h-8 rounded-full bg-red-600 text-white border-2 border-white flex items-center justify-center text-xs font-bold cursor-pointer">
                  +8
                </motion.div>
              </div>
              <div className="text-xs text-gray-600 font-mono">ACTIVE_CASES: 24 // URGENT: 3</div>
            </motion.div>
            <a href="#" className="inline-flex items-center font-bold uppercase tracking-wider text-sm text-red-600 hover:text-red-700 transition-colors group">
              Explore Collaboration Tools <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

