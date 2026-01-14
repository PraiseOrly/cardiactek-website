import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import React, { useRef } from 'react'

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================
export function AnimatedSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  showIcon?: boolean
}

export function Button({
  children,
  variant = 'primary',
  showIcon = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl'
  const variants = {
    primary:
      'bg-red-600 text-white hover:bg-red-700 hover:scale-105 active:scale-95 border-red-600 shadow-lg shadow-red-600/20',
    secondary:
      'bg-red-50 text-red-600 hover:bg-red-100 hover:scale-105 active:scale-95 border-red-50',
    outline:
      'bg-transparent text-white border-white/20 hover:bg-white hover:text-gray-900 hover:scale-105 active:scale-95 backdrop-blur-sm',
  }
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
    </motion.button>
  )
}

// ============================================================================
// SECTION COMPONENT
// ============================================================================
interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  grid?: boolean
}

export function Section({
  children,
  className = '',
  id,
  grid = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 border-t border-white/10 ${className}`}
    >
      {grid && (
        <div className="absolute inset-0 technical-grid pointer-events-none opacity-30" />
      )}

      {/* Technical markers */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-600" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-600" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-600" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-600" />

      <div className="container mx-auto px-6 relative z-10">{children}</div>
    </section>
  )
}

// ============================================================================
// MODAL COMPONENT
// ============================================================================
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              type: 'spring',
              duration: 0.5,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-800 border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gray-800 border-b border-white/10 p-6 flex justify-between items-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ============================================================================
// FLOATING BACKGROUND ELEMENTS
// ============================================================================
export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
      />
    </div>
  )
}

