import {
  ActivityIcon,
  AlertCircleIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardListIcon,
  ClockIcon,
  FileTextIcon,
  FilterIcon,
  PillIcon,
  PlusIcon,
  StethoscopeIcon
} from 'lucide-react';
import React, { useState } from 'react';
import PatientHeader from '../PatientHeader';

interface MedicalRecord {
  id: string;
  type: 'diagnosis' | 'procedure' | 'lab_result' | 'prescription' | 'imaging' | 'immunization' | 'allergy';
  title: string;
  date: string;
  provider: string;
  facility: string;
  status: 'active' | 'resolved' | 'pending' | 'completed';
  details?: string;
  notes?: string;
  attachments?: number;
}

interface LabResult {
  id: string;
  testName: string;
  date: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: 'normal' | 'abnormal' | 'critical';
}

interface Allergy {
  id: string;
  allergen: string;
  reaction: string;
  severity: 'mild' | 'moderate' | 'severe';
  dateIdentified: string;
}

interface Immunization {
  id: string;
  vaccine: string;
  date: string;
  provider: string;
  lotNumber: string;
  nextDue?: string;
}

const HealthRecords: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'diagnoses' | 'procedures' | 'labs' | 'immunizations' | 'allergies'>('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    recentActivity: true,
    upcomingAppointments: true,
    activeMedications: true,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const [medicalRecords] = useState<MedicalRecord[]>([
    {
      id: '1',
      type: 'diagnosis',
      title: 'Essential Hypertension',
      date: '2024-01-15',
      provider: 'Dr. Sarah Johnson',
      facility: 'CardiacTek Medical Center',
      status: 'active',
      details: 'Primary diagnosis - managed with medication',
      notes: 'Blood pressure well controlled with current regimen',
      attachments: 2,
    },
    {
      id: '2',
      type: 'lab_result',
      title: 'Complete Blood Count (CBC)',
      date: '2024-02-01',
      provider: 'LabCorp',
      facility: 'CardiacTek Medical Center',
      status: 'completed',
      details: 'All values within normal limits',
      attachments: 1,
    },
    {
      id: '3',
      type: 'procedure',
      title: 'Echocardiogram',
      date: '2024-01-20',
      provider: 'Dr. Michael Chen',
      facility: 'CardiacTek Imaging Center',
      status: 'completed',
      details: 'Normal echocardiogram - EF 60%',
      notes: 'No structural abnormalities detected',
      attachments: 3,
    },
    {
      id: '4',
      type: 'imaging',
      title: 'Chest X-Ray',
      date: '2024-01-10',
      provider: 'Dr. Emily Rodriguez',
      facility: 'CardiacTek Imaging Center',
      status: 'completed',
      details: 'Clear lung fields bilaterally',
      attachments: 1,
    },
    {
      id: '5',
      type: 'diagnosis',
      title: 'Type 2 Diabetes Mellitus',
      date: '2023-06-15',
      provider: 'Dr. Sarah Johnson',
      facility: 'CardiacTek Medical Center',
      status: 'active',
      details: 'Well controlled with Metformin',
      notes: 'A1C at 6.8%',
      attachments: 1,
    },
    {
      id: '6',
      type: 'prescription',
      title: 'Lisinopril 10mg',
      date: '2024-01-15',
      provider: 'Dr. Sarah Johnson',
      facility: 'CardiacTek Medical Center',
      status: 'active',
      details: 'Take once daily for blood pressure control',
      attachments: 0,
    },
  ]);

  const [labResults] = useState<LabResult[]>([
    { id: '1', testName: 'Hemoglobin A1C', date: '2024-02-01', value: '6.8', unit: '%', referenceRange: '4.0-5.6', status: 'abnormal' },
    { id: '2', testName: 'Total Cholesterol', date: '2024-02-01', value: '185', unit: 'mg/dL', referenceRange: '<200', status: 'normal' },
    { id: '3', testName: 'LDL Cholesterol', date: '2024-02-01', value: '110', unit: 'mg/dL', referenceRange: '<100', status: 'abnormal' },
    { id: '4', testName: 'HDL Cholesterol', date: '2024-02-01', value: '55', unit: 'mg/dL', referenceRange: '>40', status: 'normal' },
    { id: '5', testName: 'Triglycerides', date: '2024-02-01', value: '145', unit: 'mg/dL', referenceRange: '<150', status: 'normal' },
    { id: '6', testName: 'Fasting Glucose', date: '2024-02-01', value: '118', unit: 'mg/dL', referenceRange: '70-100', status: 'abnormal' },
    { id: '7', testName: 'Creatinine', date: '2024-02-01', value: '1.0', unit: 'mg/dL', referenceRange: '0.7-1.3', status: 'normal' },
    { id: '8', testName: 'eGFR', date: '2024-02-01', value: '95', unit: 'mL/min/1.73m²', referenceRange: '>60', status: 'normal' },
  ]);

  const [allergies] = useState<Allergy[]>([
    { id: '1', allergen: 'Penicillin', reaction: 'Skin rash, hives', severity: 'moderate', dateIdentified: '2020-03-15' },
    { id: '2', allergen: 'Sulfa Drugs', reaction: 'Difficulty breathing', severity: 'severe', dateIdentified: '2018-07-22' },
    { id: '3', allergen: 'Latex', reaction: 'Skin irritation', severity: 'mild', dateIdentified: '2015-01-10' },
  ]);

  const [immunizations] = useState<Immunization[]>([
    { id: '1', vaccine: 'Influenza (Flu)', date: '2023-10-15', provider: 'CardiacTek Clinic', lotNumber: 'FL2023-456', nextDue: '2024-10-15' },
    { id: '2', vaccine: 'COVID-19 Booster (Pfizer)', date: '2023-09-01', provider: 'City Pharmacy', lotNumber: 'PF2023-789' },
    { id: '3', vaccine: 'Tdap', date: '2021-05-20', provider: 'CardiacTek Clinic', lotNumber: 'TD2021-123', nextDue: '2031-05-20' },
    { id: '4', vaccine: 'Pneumococcal (PPSV23)', date: '2022-11-10', provider: 'CardiacTek Clinic', lotNumber: 'PN2022-321' },
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diagnosis':
        return <StethoscopeIcon className="h-5 w-5 text-blue-500" />;
      case 'procedure':
        return <ClipboardListIcon className="h-5 w-5 text-purple-500" />;
      case 'lab_result':
        return <ActivityIcon className="h-5 w-5 text-green-500" />;
      case 'prescription':
        return <PillIcon className="h-5 w-5 text-orange-500" />;
      case 'imaging':
        return <FileTextIcon className="h-5 w-5 text-indigo-500" />;
      case 'immunization':
        return <CalendarIcon className="h-5 w-5 text-teal-500" />;
      default:
        return <FileTextIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'abnormal':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'severe':
        return 'text-red-600 bg-red-50';
      case 'moderate':
        return 'text-orange-600 bg-orange-50';
      case 'mild':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filteredRecords = medicalRecords.filter(record =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
    
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <StethoscopeIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Active Diagnoses</p>
              <p className="text-xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <ActivityIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Lab Results</p>
              <p className="text-xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <PillIcon className="h-5 w-5 text-orange-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Medications</p>
              <p className="text-xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircleIcon className="h-5 w-5 text-red-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500">Allergies</p>
              <p className="text-xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'diagnoses', label: 'Diagnoses' },
              { id: 'procedures', label: 'Procedures' },
              { id: 'labs', label: 'Lab Results' },
              { id: 'immunizations', label: 'Immunizations' },
              { id: 'allergies', label: 'Allergies' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-4 px-6 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Recent Activity Section */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div
                  className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection('recentActivity')}
                >
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <h3 className="text-md font-medium text-gray-900">Recent Activity</h3>
                  </div>
                  {expandedSections.recentActivity ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                {expandedSections.recentActivity && (
                  <div className="px-6 pb-6">
                    <div className="space-y-3">
                      {medicalRecords.slice(0, 5).map((record) => (
                        <div key={record.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                            {getTypeIcon(record.type)}
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">{record.title}</h4>
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(record.status)}`}>
                                {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{record.provider} • {formatDate(record.date)}</p>
                            {record.details && (
                              <p className="text-sm text-gray-600 mt-1">{record.details}</p>
                            )}
                          </div>
                          <div className="ml-4 flex items-center space-x-2">
                            {record.attachments && record.attachments > 0 && (
                              <span className="text-xs text-gray-500 flex items-center">
                                <FileTextIcon className="h-4 w-4 mr-1" />
                                {record.attachments}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Lab Results Summary */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-md font-medium text-gray-900">Recent Lab Results</h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Test</th>
                          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Date</th>
                          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Value</th>
                          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Reference</th>
                          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {labResults.slice(0, 5).map((lab) => (
                          <tr key={lab.id} className="hover:bg-gray-50">
                            <td className="text-sm font-medium text-gray-900 py-3">{lab.testName}</td>
                            <td className="text-sm text-gray-500 py-3">{formatDate(lab.date)}</td>
                            <td className="text-sm text-gray-900 py-3 font-medium">{lab.value} {lab.unit}</td>
                            <td className="text-sm text-gray-500 py-3">{lab.referenceRange}</td>
                            <td className="py-3">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(lab.status)}`}>
                                {lab.status.charAt(0).toUpperCase() + lab.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Allergies Summary */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-md font-medium text-gray-900 flex items-center">
                    <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                    Known Allergies
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {allergies.map((allergy) => (
                      <div key={allergy.id} className={`p-4 rounded-lg border ${getSeverityColor(allergy.severity)}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-bold">{allergy.allergen}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            allergy.severity === 'severe' ? 'bg-red-200 text-red-800' :
                            allergy.severity === 'moderate' ? 'bg-orange-200 text-orange-800' :
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {allergy.severity.charAt(0).toUpperCase() + allergy.severity.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm">Reaction: {allergy.reaction}</p>
                        <p className="text-xs mt-2 opacity-75">Identified: {formatDate(allergy.dateIdentified)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diagnoses' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Diagnoses History</h3>
                <button className="flex items-center px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Diagnosis
                </button>
              </div>
              <div className="space-y-3">
                {medicalRecords.filter(r => r.type === 'diagnosis').map((record) => (
                  <div key={record.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <StethoscopeIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{record.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{record.provider} • {record.facility}</p>
                          <p className="text-sm text-gray-600 mt-2">{record.details}</p>
                          {record.notes && (
                            <p className="text-sm text-gray-500 mt-2 italic">"{record.notes}"</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                        <span className="text-xs text-gray-500 mt-2">{formatDate(record.date)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'labs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Lab Results</h3>
                <button className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <FilterIcon className="h-4 w-4 mr-1" />
                  Filter
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Test Name</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Date</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Value</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Reference Range</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Status</th>
                      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {labResults.map((lab) => (
                      <tr key={lab.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{lab.testName}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{formatDate(lab.date)}</td>
                        <td className="px-4 py-4 text-sm text-gray-900 font-medium">{lab.value} {lab.unit}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{lab.referenceRange}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(lab.status)}`}>
                            {lab.status.charAt(0).toUpperCase() + lab.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <button className="text-sm text-red-600 hover:text-red-800">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'procedures' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Procedures & Treatments</h3>
              <div className="space-y-3">
                {medicalRecords.filter(r => r.type === 'procedure' || r.type === 'imaging').map((record) => (
                  <div key={record.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <ClipboardListIcon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{record.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{record.provider} • {record.facility}</p>
                          <p className="text-sm text-gray-600 mt-2">{record.details}</p>
                          {record.notes && (
                            <p className="text-sm text-gray-500 mt-2 italic">"{record.notes}"</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                        <span className="text-xs text-gray-500 mt-2">{formatDate(record.date)}</span>
                        {record.attachments && record.attachments > 0 && (
                          <span className="text-xs text-gray-500 flex items-center mt-1">
                            <FileTextIcon className="h-3 w-3 mr-1" />
                            {record.attachments} files
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'immunizations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Immunization Records</h3>
                <button className="flex items-center px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Immunization
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {immunizations.map((imm) => (
                  <div key={imm.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{imm.vaccine}</h4>
                        <p className="text-sm text-gray-500 mt-1">Administered: {formatDate(imm.date)}</p>
                        <p className="text-sm text-gray-500">Provider: {imm.provider}</p>
                        <p className="text-xs text-gray-400 mt-1">Lot Number: {imm.lotNumber}</p>
                      </div>
                      {imm.nextDue && (
                        <div className="text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Next Due: {formatDate(imm.nextDue)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'allergies' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">Allergies</h3>
                  <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    {allergies.length} recorded
                  </span>
                </div>
                <button className="flex items-center px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Allergy
                </button>
              </div>
              <div className="space-y-3">
                {allergies.map((allergy) => (
                  <div key={allergy.id} className={`p-4 rounded-lg border ${getSeverityColor(allergy.severity)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <AlertCircleIcon className="h-5 w-5 text-red-600 mt-0.5" />
                        <div className="ml-3">
                          <div className="flex items-center">
                            <h4 className="text-sm font-bold text-gray-900">{allergy.allergen}</h4>
                            <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-medium ${
                              allergy.severity === 'severe' ? 'bg-red-200 text-red-800' :
                              allergy.severity === 'moderate' ? 'bg-orange-200 text-orange-800' :
                              'bg-yellow-200 text-yellow-800'
                            }`}>
                              {allergy.severity.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2">
                            <span className="font-medium">Reaction:</span> {allergy.reaction}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Identified: {formatDate(allergy.dateIdentified)}
                          </p>
                        </div>
                      </div>
                      <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;

