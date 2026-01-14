import { motion, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'
import React, { useRef } from 'react'

import { Button, FloatingElements } from './DoctorBenefitsShared'

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// ============================================================================
// HERO COMPONENT
// ============================================================================
export function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 technical-grid opacity-20" />

      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10" />
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/10" />
      <div className="absolute left-1/4 top-0 h-full w-[1px] bg-white/10" />
      <div className="absolute left-3/4 top-0 h-full w-[1px] bg-white/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 mb-6 border-l-2 border-red-600 pl-4"
            >
              <span className="text-red-400 font-mono text-xs tracking-widest">
                EST. 2024
              </span>
              <span className="text-gray-600 font-mono text-xs tracking-widest">
                {' '}
                ///
              </span>
              <span className="text-white font-mono text-xs tracking-widest uppercase">
                Clinical Intelligence
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter"
            >
              TRANSFORM <br />
              CARDIAC OUTCOMES <br />
              WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                AI PRECISION
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="text-xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed border-l border-white/20 pl-6 italic"
            >
              Clinical-grade diagnostics, seamless workflow integration, and
              predictive analytics trusted by cardiologists worldwide.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" showIcon>
                Schedule Live Demo
              </Button>
              <Button variant="outline">Explore Platform</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="lg:col-span-5 relative"
          >
            {/* Technical Diagram Abstract */}
            <div className="relative aspect-square border border-white/20 rounded-3xl p-8 bg-gray-800/50 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 right-0 p-2 bg-gray-900/80 backdrop-blur-sm border-l border-b border-white/20 rounded-bl-2xl">
                <Plus className="text-red-400 w-4 h-4" />
              </div>
              <div className="absolute bottom-0 left-0 p-2 bg-gray-900/80 backdrop-blur-sm border-r border-t border-white/20 rounded-tr-2xl">
                <Plus className="text-red-400 w-4 h-4" />
              </div>

              <div className="h-full w-full border border-dashed border-white/20 rounded-2xl relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                {/* ECG Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 500 150"
                    className="w-full h-32 stroke-red-500 fill-none stroke-2"
                    initial={{
                      pathLength: 0,
                    }}
                    animate={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <motion.path
                      d="M0,75 L50,75 L60,75 L70,60 L80,90 L90,75 L130,75 L140,75 L150,40 L160,110 L170,75 L210,75 L220,75 L230,60 L240,90 L250,75 L290,75 L300,75 L310,40 L320,110 L330,75 L370,75 L380,75 L390,60 L400,90 L410,75 L450,75 L460,75 L470,40 L480,110 L490,75 L500,75"
                      className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    />
                  </motion.svg>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50"></div>

                {/* Data Points */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className="absolute top-4 left-4 font-mono text-xs text-red-400 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <div>HR: 72 BPM</div>
                  <div>QRS: 88 ms</div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.2,
                  }}
                  className="absolute bottom-4 right-4 font-mono text-xs text-gray-400 text-right bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <div>AI_CONFIDENCE</div>
                  <div className="text-red-400">ACCURACY: 98.7%</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// VALUE PROPS COMPONENT
// ============================================================================
import { Brain, HeartPulse, Link } from 'lucide-react'

export function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const props = [
    {
      icon: Brain,
      title: 'AI-Powered Clinical Intelligence',
      description:
        '12-lead automated interpretation, arrhythmia & MI detection, STEMI alerts with red priority flag.',
      stat: '98.7%',
      statLabel: 'Diagnostic Accuracy',
    },
    {
      icon: Link,
      title: 'Integrated Care Coordination',
      description:
        'Secure team messaging, shared treatment plans, real-time collaboration across your care network.',
      stat: '50%',
      statLabel: 'Faster Care Decisions',
    },
    {
      icon: HeartPulse,
      title: 'Continuous Patient Intelligence',
      description:
        '24/7 monitoring, predictive alerts, engagement tracking for proactive cardiac care management.',
      stat: '73%',
      statLabel: 'Reduction in Readmissions',
    },
  ]

  return (
    <Section id="platform" className="bg-gray-800 border-t border-white/10">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden"
      >
        {props.map((prop, idx) => (
          <motion.div
            key={idx}
            variants={scaleIn}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            className="bg-gray-900/80 backdrop-blur-sm p-10 group hover:bg-gray-800/80 transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <prop.icon
                className="w-24 h-24 text-red-500 -mr-8 -mt-8 rotate-12"
                strokeWidth={0.5}
              />
            </div>

            <motion.div
              whileHover={{
                rotate: 360,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <prop.icon
                className="w-10 h-10 text-red-500 mb-6"
                strokeWidth={1.5}
              />
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight relative z-10">
              {prop.title}
            </h3>

            <p className="text-gray-300 mb-8 text-sm leading-relaxed relative z-10 min-h-[80px]">
              {prop.description}
            </p>

            <div className="border-t border-white/10 pt-6">
              <div className="text-4xl font-bold text-white mb-1 tracking-tighter">
                {prop.stat}
              </div>
              <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
                {prop.statLabel}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative py-24 border-t border-white/10 ${className}`}>
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-600" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-600" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-600" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-600" />
      <div className="container mx-auto px-6 relative z-10">{children}</div>
    </section>
  )
}

