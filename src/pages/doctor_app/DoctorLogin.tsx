import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Mail, Eye, EyeOff, Stethoscope } from 'lucide-react'

const DoctorLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would validate credentials with a backend
    if (email && password) {
      navigate('/doctor-dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-red-50 flex flex-col justify-center items-center p-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 opacity-10 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-red-600 to-rose-600 p-3 rounded-xl shadow-lg shadow-red-600/20">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">CardiacTek</h1>
          </div>
          <p className="text-slate-600">Doctor Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-xl shadow-slate-900/10 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-600 mb-6">Sign in to your doctor account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold py-2.5 rounded-lg hover:from-red-700 hover:to-rose-700 hover:shadow-lg hover:shadow-red-600/25 transition-all duration-200 shadow-md shadow-red-600/20 mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200/60"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">or</span>
            </div>
          </div>

          {/* Additional Options */}
          <button
            type="button"
            className="w-full px-4 py-2.5 border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Not a doctor?{' '}
          <Link to="/" className="text-red-600 hover:text-red-700 font-semibold">
            Return to homepage
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-xs text-blue-900 font-medium mb-1">Demo Credentials</p>
          <p className="text-xs text-blue-700">
            Email: <span className="font-mono">doctor@example.com</span>
          </p>
          <p className="text-xs text-blue-700">
            Password: <span className="font-mono">password123</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin
