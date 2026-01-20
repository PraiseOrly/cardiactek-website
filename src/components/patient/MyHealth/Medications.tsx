import {
  AlertCircle,
  Bell,
  Calendar,
  Check,
  Clock,
  Droplet,
  Info,
  Pill,
  Plus,
  Search,
  Trash2,
  X
} from 'lucide-react';
import React, { useState } from 'react';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  endDate?: string;
  purpose: string;
  sideEffects?: string[];
  refillsRemaining: number;
  pharmacy: string;
  instructions: string;
  status: 'active' | 'completed' | 'discontinued';
  times: string[];
  lastTaken?: string;
}

interface MedicationLog {
  id: string;
  medicationId: string;
  date: string;
  time: string;
  status: 'taken' | 'missed' | 'skipped';
}

const Medications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedMedication, setExpandedMedication] = useState<string | null>(null);

  const [medications] = useState<Medication[]>([
    {
      id: '1',
      name: 'Metoprolol Succinate',
      dosage: '25mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Chen',
      startDate: '2024-01-15',
      purpose: 'Blood pressure control',
      sideEffects: ['Dizziness', 'Fatigue', 'Slow heart rate'],
      refillsRemaining: 3,
      pharmacy: 'CVS Pharmacy - Main St',
      instructions: 'Take in the morning with food',
      status: 'active',
      times: ['08:00 AM'],
      lastTaken: '2024-01-22'
    },
    {
      id: '2',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Chen',
      startDate: '2024-01-15',
      purpose: 'Heart failure management',
      sideEffects: ['Dry cough', 'Dizziness', 'Headache'],
      refillsRemaining: 5,
      pharmacy: 'CVS Pharmacy - Main St',
      instructions: 'Take at the same time each day',
      status: 'active',
      times: ['08:00 AM'],
      lastTaken: '2024-01-22'
    },
    {
      id: '3',
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Chen',
      startDate: '2023-06-01',
      purpose: 'Antiplatelet therapy',
      sideEffects: ['Stomach irritation', 'Easy bruising'],
      refillsRemaining: 2,
      pharmacy: 'Walgreens - Oak Ave',
      instructions: 'Take with food',
      status: 'active',
      times: ['07:00 AM'],
      lastTaken: '2024-01-22'
    },
    {
      id: '4',
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily at bedtime',
      prescribedBy: 'Dr. Michael Roberts',
      startDate: '2023-03-15',
      purpose: 'Cholesterol management',
      sideEffects: ['Muscle pain', 'Joint pain', 'Digestive issues'],
      refillsRemaining: 4,
      pharmacy: 'CVS Pharmacy - Main St',
      instructions: 'Take at bedtime',
      status: 'active',
      times: ['10:00 PM'],
      lastTaken: '2024-01-21'
    },
    {
      id: '5',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      prescribedBy: 'Dr. Emily Watson',
      startDate: '2023-06-15',
      purpose: 'Type 2 Diabetes',
      sideEffects: ['Nausea', 'Stomach upset', 'Diarrhea'],
      refillsRemaining: 1,
      pharmacy: 'Walgreens - Oak Ave',
      instructions: 'Take with meals',
      status: 'completed',
      times: ['08:00 AM', '06:00 PM'],
      lastTaken: '2023-12-31'
    }
  ]);

  const [medicationLog] = useState<MedicationLog[]>([
    { id: '1', medicationId: '1', date: '2024-01-22', time: '08:00 AM', status: 'taken' },
    { id: '2', medicationId: '2', date: '2024-01-22', time: '08:00 AM', status: 'taken' },
    { id: '3', medicationId: '3', date: '2024-01-22', time: '07:00 AM', status: 'taken' },
    { id: '4', medicationId: '1', date: '2024-01-21', time: '08:00 AM', status: 'taken' },
    { id: '5', medicationId: '2', date: '2024-01-21', time: '08:00 AM', status: 'taken' },
    { id: '6', medicationId: '3', date: '2024-01-21', time: '07:00 AM', status: 'missed' },
  ]);

  const filteredMedications = medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'active' ? med.status === 'active' :
                      activeTab === 'completed' ? med.status === 'completed' :
                      med.status === 'discontinued';
    return matchesSearch && matchesTab;
  });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'discontinued':
        return 'bg-red-100 text-red-800';
      case 'missed':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const todayMedications = medications.filter(m => m.status === 'active');
  const takenToday = medicationLog.filter(
    log => log.date === '2024-01-22' && log.status === 'taken'
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Medications</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your prescriptions and medication schedule</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm w-64"
            />
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </button>
        </div>
      </div>

      {/* Today's Summary */}
      <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border border-red-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Pill className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Today&apos;s Medications</h3>
              <p className="text-sm text-gray-600">
                {takenToday} of {todayMedications.length} medications taken
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium shadow-sm">
              <Check className="h-4 w-4 mr-2" />
              Mark All Taken
            </button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{Math.round((takenToday / todayMedications.length) * 100)}%</span>
          </div>
          <div className="w-full bg-red-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(takenToday / todayMedications.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Pill className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-xl font-bold text-gray-900">
                {medications.filter(m => m.status === 'active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Check className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-xl font-bold text-gray-900">
                {medications.filter(m => m.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Refills Needed</p>
              <p className="text-xl font-bold text-gray-900">
                {medications.filter(m => m.status === 'active' && m.refillsRemaining <= 2).length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Reminders</p>
              <p className="text-xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {[
              { id: 'active', label: 'Active Medications' },
              { id: 'completed', label: 'Completed' },
              { id: 'history', label: 'History' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Medications List */}
          <div className="space-y-4">
            {filteredMedications.length === 0 ? (
              <div className="text-center py-8">
                <Pill className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No medications found</p>
              </div>
            ) : (
              filteredMedications.map((medication) => (
                <div 
                  key={medication.id} 
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Main Info */}
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedMedication(
                      expandedMedication === medication.id ? null : medication.id
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          medication.status === 'active' ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          <Pill className={`h-6 w-6 ${
                            medication.status === 'active' ? 'text-green-600' : 'text-gray-500'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {medication.name}
                            </h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(medication.status)}`}>
                              {medication.status.charAt(0).toUpperCase() + medication.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-600 font-medium">{medication.dosage} • {medication.frequency}</p>
                          <p className="text-sm text-gray-500 mt-1">{medication.purpose}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {medication.times.join(', ')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Since {formatDate(medication.startDate)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {medication.status === 'active' && (
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            <Check className="h-4 w-4" />
                            Take
                          </button>
                        )}
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Info className="h-5 w-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedMedication === medication.id && (
                    <div className="border-t border-gray-200 bg-gray-50 p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Prescription Details</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-gray-500">Prescribed by:</span> {medication.prescribedBy}</p>
                            <p><span className="text-gray-500">Start date:</span> {formatDate(medication.startDate)}</p>
                            <p><span className="text-gray-500">Pharmacy:</span> {medication.pharmacy}</p>
                            <p><span className="text-gray-500">Refills remaining:</span> {medication.refillsRemaining}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Instructions</h4>
                          <p className="text-sm text-gray-600">{medication.instructions}</p>
                          {medication.sideEffects && (
                            <div className="mt-2">
                              <p className="text-sm font-medium text-gray-700">Possible side effects:</p>
                              <p className="text-sm text-gray-500">{medication.sideEffects.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          <Trash2 className="h-4 w-4" />
                          Discontinue
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          <Bell className="h-4 w-4" />
                          Set Reminder
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          <Droplet className="h-4 w-4" />
                          Request Refill
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Medication History Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {medicationLog.slice(0, 5).map((log) => {
            const med = medications.find(m => m.id === log.medicationId);
            return (
              <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {log.status === 'taken' ? (
                    <div className="p-1.5 bg-green-100 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="p-1.5 bg-yellow-100 rounded-full">
                      <X className="h-4 w-4 text-yellow-600" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{med?.name}</p>
                    <p className="text-xs text-gray-500">{log.time} • {formatDate(log.date)}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                  {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Medications;

