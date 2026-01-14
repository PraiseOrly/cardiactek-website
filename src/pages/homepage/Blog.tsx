import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Homepage/Navbar'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// ============================================================================
// BLOG POST DATA
// ============================================================================
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Atrial Fibrillation: Symptoms, Causes, and Modern Treatment Approaches',
    excerpt: 'Atrial fibrillation (AFib) affects millions worldwide. Learn about the latest diagnostic tools and treatment strategies that are revolutionizing cardiac care.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Cardiac Conditions',
    image: '/api/placeholder/600/400',
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Remote Cardiac Monitoring: AI-Powered Insights',
    excerpt: 'How artificial intelligence is transforming the way we monitor and predict cardiac events, enabling proactive healthcare delivery.',
    author: 'Dr. Michael Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology',
    image: '/api/placeholder/600/400',
    featured: false,
  },
  {
    id: 3,
    title: 'Lifestyle Modifications for Heart Health: Evidence-Based Strategies',
    excerpt: 'Comprehensive guide to proven lifestyle changes that can significantly reduce cardiovascular risk and improve overall heart health.',
    author: 'Dr. Emily Watson',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Prevention',
    image: '/api/placeholder/600/400',
    featured: false,
  },
  {
    id: 4,
    title: 'Advances in ECG Technology: From Holter Monitors to Continuous AI Analysis',
    excerpt: 'Explore the evolution of electrocardiogram technology and how continuous AI-powered analysis is changing cardiac diagnostics.',
    author: 'Dr. James Park',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Technology',
    image: '/api/placeholder/600/400',
    featured: false,
  },
  {
    id: 5,
    title: 'Managing Hypertension: A Comprehensive Guide for Patients',
    excerpt: 'Understanding blood pressure management, home monitoring techniques, and the role of digital health tools in hypertension control.',
    author: 'Dr. Lisa Thompson',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Patient Care',
    image: '/api/placeholder/600/400',
    featured: false,
  },
  {
    id: 6,
    title: 'Cardiac Rehabilitation: Building Strength and Confidence After Heart Events',
    excerpt: 'The importance of structured cardiac rehabilitation programs and how they contribute to long-term recovery and prevention.',
    author: 'Dr. Robert Kim',
    date: '2023-12-15',
    readTime: '11 min read',
    category: 'Rehabilitation',
    image: '/api/placeholder/600/400',
    featured: false,
  },
]

// ============================================================================
// BLOG HERO SECTION
// ============================================================================
function BlogHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 border-l-2 border-red-600 pl-4"
          >
            <span className="text-red-400 font-mono text-xs tracking-widest">CARDIAC INSIGHTS</span>
            <span className="text-gray-600 font-mono text-xs tracking-widest">///</span>
            <span className="text-white font-mono text-xs tracking-widest uppercase">Medical Blog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter"
          >
            EXPERT KNOWLEDGE FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              HEART HEALTH
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Stay informed with the latest insights, research, and guidance on cardiovascular health from leading medical experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="#featured"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              Read Latest Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="#categories"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200 rounded-xl backdrop-blur-sm hover:scale-105"
            >
              Browse Categories
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURED POST SECTION
// ============================================================================
function FeaturedPost() {
  const featuredPost = blogPosts.find(post => post.featured)
  if (!featuredPost) return null

return (
    <section id="featured" className="py-24 bg-gray-800 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Article</h2>
          <p className="text-gray-400 italic">Our most recent in-depth analysis</p>
</motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-red-500/10 transition-all duration-500 group">
            <div className="aspect-video bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-600/20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <User className="w-16 h-16 text-red-600" />
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">Featured Article</p>
                </div>
              </div>
              {/* Premium corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full" />
            </div>

            <div className="p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                  <Calendar className="w-5 h-5" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                  <Clock className="w-5 h-5" />
                  {featuredPost.readTime}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                {featuredPost.title}
              </h3>

              <p className="text-gray-700 mb-8 text-xl leading-relaxed font-medium">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">{featuredPost.author}</p>
                    <p className="text-gray-600 font-medium">Cardiologist</p>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold uppercase tracking-wider hover:from-red-700 hover:to-red-800 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 transform"
                >
                  Read Article
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// BLOG POSTS GRID
// ============================================================================
function BlogPostsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === selectedCategory && !post.featured)

  return (
    <section id="categories" className="py-24 bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-400 italic">Comprehensive insights from cardiac health experts</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>

                  <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200 rounded-xl backdrop-blur-sm hover:scale-105">
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// NEWSLETTER SUBSCRIPTION
// ============================================================================
function NewsletterSubscription() {
  return (
    <section className="py-24 bg-gray-800 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get the latest cardiac health insights and research delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-900 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded-xl hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN BLOG COMPONENT
// ============================================================================
const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <BlogHero />
        <FeaturedPost />
        <BlogPostsGrid />
        <NewsletterSubscription />
      </main>
    </div>
  )
}

export default Blog
