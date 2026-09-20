import {
  CreditCard,
  Download,
  DollarSign,
  FileText,
  Plus,
  Check,
} from 'lucide-react'
import React, { useState } from 'react'

interface Invoice {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'overdue'
  description: string
  details: string
}

const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('billing')

  const invoices: Invoice[] = [
    {
      id: 'INV-001',
      date: 'Jan 15, 2024',
      amount: 150.0,
      status: 'paid',
      description: 'Doctor Consultation - Dr. Sarah Chen',
      details: 'Follow-up appointment and cardiac assessment',
    },
    {
      id: 'INV-002',
      date: 'Jan 10, 2024',
      amount: 250.0,
      status: 'paid',
      description: 'ECG Test & Analysis',
      details: '12-lead ECG with comprehensive report',
    },
    {
      id: 'INV-003',
      date: 'Jan 5, 2024',
      amount: 75.0,
      status: 'pending',
      description: 'Blood Work - Lipid Panel',
      details: 'Comprehensive blood analysis',
    },
  ]

  const payments = [
    {
      method: 'Visa ending in 4242',
      expiryDate: '12/2025',
      isDefault: true,
    },
    {
      method: 'MasterCard ending in 8765',
      expiryDate: '06/2026',
      isDefault: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Billing & Payments
        </h1>
        <p className="text-slate-600">
          Manage your invoices, payments, and billing information
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200/60">
        <button
          onClick={() => setActiveTab('billing')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'billing'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText size={18} className="inline mr-2" />
          Invoices
        </button>
        <button
          onClick={() => setActiveTab('payment')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'payment'
              ? 'border-red-600 text-red-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <CreditCard size={18} className="inline mr-2" />
          Payment Methods
        </button>
      </div>

      {/* Invoices Tab */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          {/* Billing Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 font-medium mb-1">
                    Total Due
                  </p>
                  <p className="text-3xl font-bold text-slate-900">$75.00</p>
                </div>
                <DollarSign size={32} className="text-red-500 opacity-20" />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 font-medium mb-1">
                    Total Paid This Year
                  </p>
                  <p className="text-3xl font-bold text-slate-900">$400.00</p>
                </div>
                <Check size={32} className="text-green-500 opacity-20" />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 font-medium mb-1">
                    Insurance Coverage
                  </p>
                  <p className="text-3xl font-bold text-slate-900">75%</p>
                </div>
                <CreditCard size={32} className="text-blue-500 opacity-20" />
              </div>
            </div>
          </div>

          {/* Invoices List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 overflow-hidden">
            <div className="p-6 border-b border-slate-200/60 bg-gradient-to-br from-slate-50/50 to-white">
              <h2 className="text-lg font-bold text-slate-900">
                Recent Invoices
              </h2>
            </div>

            <div className="divide-y divide-slate-200/60">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="p-6 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">
                          {invoice.description}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            invoice.status === 'paid'
                              ? 'bg-green-100 text-green-700'
                              : invoice.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {invoice.status.charAt(0).toUpperCase() +
                            invoice.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">
                        {invoice.details}
                      </p>
                      <p className="text-xs text-slate-500">{invoice.date}</p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="text-lg font-bold text-slate-900 mb-2">
                        ${invoice.amount.toFixed(2)}
                      </p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600 hover:text-slate-900">
                          <FileText size={18} />
                        </button>
                        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600 hover:text-slate-900">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Tab */}
      {activeTab === 'payment' && (
        <div className="space-y-6">
          {/* Current Payment Methods */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                Payment Methods
              </h2>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm">
                <Plus size={16} />
                Add Payment Method
              </button>
            </div>

            <div className="space-y-4">
              {payments.map((payment, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-5 border border-slate-200/60 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                      <CreditCard size={24} className="text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {payment.method}
                      </p>
                      <p className="text-sm text-slate-600">
                        Expires {payment.expiryDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {payment.isDefault && (
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Default
                      </span>
                    )}
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Address */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              Billing Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Jane"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Main Street"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="San Francisco"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  defaultValue="CA"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="md:col-span-2">
                <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Save Address
                </button>
              </div>
            </div>
          </div>

          {/* Insurance Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              Insurance Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  defaultValue="Blue Cross Blue Shield"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Member ID
                </label>
                <input
                  type="text"
                  defaultValue="••••••••••••"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Group Number
                </label>
                <input
                  type="text"
                  defaultValue="••••••"
                  className="w-full px-4 py-2 border border-slate-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="md:col-span-2">
                <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Update Insurance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Billing
