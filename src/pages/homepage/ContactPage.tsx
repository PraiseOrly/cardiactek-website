import { motion, useInView } from 'framer-motion'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Users,
  X
} from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Homepage/Navbar'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})
  const [showModal, setShowModal] = useState(false)

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      errors.email = 'Valid email is required'
    if (!formData.subject.trim()) errors.subject = 'Subject is required'
    if (!formData.message.trim()) errors.message = 'Message is required'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormStatus('submitting')
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormErrors({})
      setShowModal(true)
    } catch {
      setFormStatus('error')
      setShowModal(true)
    }
  }

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index)
  }

  const closeModal = () => {
    setShowModal(false)
    setFormStatus('idle')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
          {/* Background Grid */}
          <div className="absolute inset-0 technical-grid opacity-20" />

          {/* Floating Background Elements */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 border-l-2 border-red-600 pl-4"
              >
                <span className="text-red-400 font-mono text-xs tracking-widest">CLINICAL SUPPORT</span>
                <span className="text-gray-600 font-mono text-xs tracking-widest">///</span>
                <span className="text-white font-mono text-xs tracking-widest uppercase">24/7 Available</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter"
              >
                CONNECT WITH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  CARDIAC TEK
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
              >
                Your partner in advanced cardiac care. Our clinical support team is available 24/7 to assist you with medical inquiries and technical support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Support Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="#emergency"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200 rounded-xl backdrop-blur-sm hover:scale-105"
                >
                  Emergency Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Profiles */}
        <section className="py-24 bg-gray-900 border-t border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Clinical Support Team</h2>
              <p className="text-gray-400 italic">Dedicated professionals ready to assist you</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  name: 'Dr. Emily Chen',
                  role: 'Chief Cardiologist',
                  specialty: 'Interventional Cardiology',
                  image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
                  linkedin: 'https://linkedin.com/in/emilychen',
                },
                {
                  name: 'Dr. Michael Patel',
                  role: 'AI Research Lead',
                  specialty: 'Machine Learning',
                  image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
                  linkedin: 'https://linkedin.com/in/michaelpatel',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Clinical Support Manager',
                  specialty: 'Patient Care',
                  image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
                  linkedin: 'https://linkedin.com/in/sarahjohnson',
                },
                {
                  name: 'Dr. James Lee',
                  role: 'EHR Integration Specialist',
                  specialty: 'Health Informatics',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                  linkedin: 'https://linkedin.com/in/jameslee',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-red-400 font-medium text-sm">{member.role}</p>
                      <p className="text-gray-400 text-xs mt-1">{member.specialty}</p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/10 flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm font-medium"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="emergency" className="py-24 bg-gray-900 border-t border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Options</h2>
              <p className="text-gray-400 italic">Multiple ways to reach our clinical support team</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {[
                {
                  icon: <Mail className="h-12 w-12 text-red-400" />,
                  title: 'Clinical Support',
                  details: [
                    'Care Team: care@cardiactek.com',
                    'Emergency: emergency@cardiactek.com',
                  ],
                  urgent: false,
                },
                {
                  icon: <Phone className="h-12 w-12 text-red-400" />,
                  title: 'Emergency Contact',
                  details: [
                    'Clinical Support: 1-800-HEART-911',
                    'Technical Support: 1-800-CARD-TEK',
                  ],
                  urgent: true,
                },
                {
                  icon: <MapPin className="h-12 w-12 text-red-400" />,
                  title: 'HQ Location',
                  details: [
                    '123 Cardiac Way Suite 200',
                    'San Francisco, CA 94107',
                  ],
                  urgent: false,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-gray-800/80 backdrop-blur-sm border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                    item.urgent ? 'border-red-500/30 shadow-red-600/10' : 'border-white/10 hover:shadow-red-600/10'
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`p-4 rounded-2xl ${item.urgent ? 'bg-red-600/20' : 'bg-red-600/10'} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
                    <div className="space-y-3 text-center">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {item.urgent && (
                      <div className="mt-6 flex items-center justify-center gap-2 text-red-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">24/7 Available</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                title="CardiacTEK Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.635834241066!2d-122.406744584683!3d37.78377997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f4b81e3cd%3A0xe3a3f6907f2a525!2s123%20Cardiac%20Way%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1629781000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-24 bg-gray-900 border-t border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Clinical Inquiry Form</h2>
              <p className="text-gray-400 italic">Send us a message and our team will respond promptly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.name ? 'border-red-500' : 'border-white/20 bg-gray-900/50'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                      placeholder="Dr. John Smith"
                      required
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Institution Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.email ? 'border-red-500' : 'border-white/20 bg-gray-900/50'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                      placeholder="john.smith@hospital.org"
                      required
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.subject ? 'border-red-500' : 'border-white/20 bg-gray-900/50'
                    } focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                    placeholder="Clinical Support Inquiry"
                    required
                    aria-invalid={!!formErrors.subject}
                    aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  />
                  {formErrors.subject && (
                    <p id="subject-error" className="text-red-500 text-xs mt-1">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Clinical Details
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.message ? 'border-red-500' : 'border-white/20 bg-gray-900/50'
                    } focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all resize-none`}
                    placeholder="Include patient ID, symptoms, and relevant medical history..."
                    required
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full flex items-center justify-center py-4 px-6 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                    formStatus === 'submitting'
                      ? 'bg-red-800/50 cursor-not-allowed text-gray-400'
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Priority Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-900 border-t border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Clinical Support FAQ</h2>
              <p className="text-gray-400 italic">Frequently asked questions about our services</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {[
                {
                  question: 'What constitutes a cardiac emergency?',
                  answer:
                    'Immediately contact emergency services for chest pain lasting more than 5 minutes, sudden shortness of breath, or loss of consciousness. Our system will automatically notify your local EMS when critical rhythms are detected.',
                  icon: <Heart className="w-6 h-6 text-red-400" />,
                },
                {
                  question: 'How do you handle HIPAA compliance?',
                  answer:
                    'All data is encrypted end-to-end with AES-256 encryption. We maintain strict access controls and audit logs to ensure compliance with healthcare privacy regulations.',
                  icon: <Shield className="w-6 h-6 text-red-400" />,
                },
                {
                  question: 'What clinical integrations do you support?',
                  answer:
                    'Our system integrates with EPIC, Cerner, and HL7-compliant EHR systems. We support automated report generation and real-time monitoring alerts.',
                  icon: <Users className="w-6 h-6 text-red-400" />,
                },
                {
                  question: 'How quickly do you respond to inquiries?',
                  answer:
                    'Clinical emergencies receive immediate response. Standard inquiries are answered within 2 hours during business hours, and within 4 hours outside business hours.',
                  icon: <Clock className="w-6 h-6 text-red-400" />,
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-expanded={activeFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-red-600/20 rounded-xl">
                        {faq.icon}
                      </div>
                      <h3
                        id={`faq-question-${index}`}
                        className="text-xl font-bold text-white"
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-red-400 transform transition-transform duration-300 ${
                        activeFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaqIndex === index
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2 border-t border-white/10">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      

      {/* Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 border border-white/10 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center mb-6">
              {formStatus === 'success' ? (
                <div className="p-3 bg-green-600/20 rounded-2xl mr-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
              ) : (
                <div className="p-3 bg-red-600/20 rounded-2xl mr-4">
                  <AlertCircle className="h-10 w-10 text-red-500" />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {formStatus === 'success' ? 'Message Sent!' : 'Submission Failed'}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {formStatus === 'success'
                    ? 'Our clinical team will respond within 2 hours.'
                    : 'Please contact emergency support at emergency@cardiactek.com'}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ContactPage

