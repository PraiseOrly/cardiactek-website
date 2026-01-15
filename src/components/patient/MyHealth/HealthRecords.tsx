import {
  Activity as ActivityIcon,
  AlertCircle as AlertCircleIcon,
  Brain as BrainIcon,
  Calendar as CalendarIcon,
  ClipboardList as ClipboardListIcon,
  Droplet as DropletIcon,
  FileText as FileTextIcon,
  HeartPulse as HeartPulseIcon,
  Shield as ShieldIcon,
  Smartphone as SmartphoneIcon,
  Stethoscope as StethoscopeIcon,
  User as UserIcon,
  Video as VideoIcon
} from 'lucide-react';
import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';

// Personal Information Component
const PersonalInfoSection = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    patientId: '#12345',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    emergencyContactName: 'John Doe (Spouse)',
    emergencyContactPhone: '+1 (555) 987-6543',
    insuranceProvider: 'HealthCare Plus',
    insurancePolicy: 'HD123456789',
    shareData: true,
    emergencyAccess: true,
  });

  React.useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || prev.name,
        patientId: user.patientId || prev.patientId,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        emergencyContactName: user.emergencyContactName || prev.emergencyContactName,
        emergencyContactPhone: user.emergencyContactPhone || prev.emergencyContactPhone,
        insuranceProvider: user.insuranceProvider || prev.insuranceProvider,
        insurancePolicy: user.insurancePolicy || prev.insurancePolicy,
        shareData: user.shareData !== undefined ? user.shareData : prev.shareData,
        emergencyAccess: user.emergencyAccess !== undefined ? user.emergencyAccess : prev.emergencyAccess,
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    setUser({
      ...formData,
      role: user?.role || 'patient',
    });
    setIsEditing(false);
  };

  return (
    <div id="personal-info">
      <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
        <UserIcon className="h-5 w-5 mr-2 text-red-500" />
        Personal Information
      </h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <div className="flex-1 space-y-2 w-full max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                ) : (
                  <p className="text-gray-900">{formData.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient ID</label>
                <p className="text-gray-500">{formData.patientId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                ) : (
                  <p className="text-gray-500">{formData.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                ) : (
                  <p className="text-gray-500">{formData.phone}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md">
            <div className="border rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Emergency Contacts</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{formData.emergencyContactName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{formData.emergencyContactPhone}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Insurance Information</h4>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Provider</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{formData.insuranceProvider}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Policy #</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="insurancePolicy"
                      value={formData.insurancePolicy}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{formData.insurancePolicy}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-md">
            <div className="flex items-center text-gray-500 mb-4">
              <ShieldIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Privacy Settings</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Share data with healthcare providers</label>
                <input
                  type="checkbox"
                  name="shareData"
                  className="form-checkbox h-4 w-4 text-red-600"
                  checked={formData.shareData}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Emergency contact access</label>
                <input
                  type="checkbox"
                  name="emergencyAccess"
                  className="form-checkbox h-4 w-4 text-red-600"
                  checked={formData.emergencyAccess}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(!isEditing)}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

// Patient History Component
const PatientHistorySection = () => {
  const historyRecords = [
    { date: '2023-10-15', type: 'Cardiac Checkup', notes: 'Regular checkup, normal heart function' },
    { date: '2023-08-20', type: 'ECG Test', notes: 'Normal sinus rhythm' },
    { date: '2023-06-05', type: 'Blood Pressure Review', notes: 'BP: 120/80, within normal range' },
  ];

  return (
    <div id="patient-history">
      <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
        <ActivityIcon className="h-5 w-5 mr-2 text-blue-500" />
        Health Profile
      </h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {historyRecords.map((record, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileTextIcon className="h-8 w-8 text-gray-400" />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">{record.type}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {record.date}
                    </div>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-900 text-sm font-medium">
                  View Details
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{record.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Physical Examination Component
const PhysicalExamSection = () => {
  return (
    <div id="physical-exam">
      <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
        <StethoscopeIcon className="h-5 w-5 mr-2 text-green-500" />
        Physical Examination
      </h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <HeartPulseIcon className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-medium">Cardiovascular</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Heart Rate: 72 bpm</li>
                <li>Blood Pressure: 120/80 mmHg</li>
                <li>Heart Sounds: Normal S1/S2</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <ActivityIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-medium">Physical Status</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Weight: 70 kg</li>
                <li>Height: 175 cm</li>
                <li>BMI: 22.9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Diagnostic Tests Section
const DiagnosticTestsSection = () => {
  const diagnosticTests = [
    { name: 'ECG Analysis', icon: HeartPulseIcon, path: '/patient-dashboard/ecg', color: 'red' },
    { name: 'Holter Monitor', icon: SmartphoneIcon, path: '/patient-dashboard/holter', color: 'blue' },
    { name: 'Blood Tests', icon: DropletIcon, path: '/patient-dashboard/blood-tests', color: 'pink' },
    { name: 'Cardiac MRI', icon: BrainIcon, path: '/patient-dashboard/mri', color: 'purple' },
  ];

  return (
    <div id="diagnostic-tests">
      <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
        <ActivityIcon className="h-5 w-5 mr-2 text-orange-500" />
        Diagnostic Tests
      </h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticTests.map((test) => (
              <div
                key={test.name}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => window.location.href = test.path}
              >
                <div className="flex items-center mb-3">
                  <test.icon className={`h-8 w-8 text-${test.color}-500`} />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{test.name}</h3>
                <p className="text-xs text-gray-500 mt-1">Click to view details</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Emergency & Care Section
const EmergencyCareSection = () => {
  const emergencyItems = [
    { name: 'Emergency SOS', icon: AlertCircleIcon, path: '/patient-dashboard/sos', color: 'red', description: 'Quick access to emergency services' },
    { name: 'Treatment Plan', icon: ClipboardListIcon, path: '/patient-dashboard/treatment', color: 'blue', description: 'View your current treatment plan' },
    { name: 'Telemedicine', icon: VideoIcon, path: '/patient-dashboard/telemedicine', color: 'green', description: 'Schedule virtual appointments' },
  ];

  return (
    <div id="emergency-care">
      <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
        <AlertCircleIcon className="h-5 w-5 mr-2 text-red-500" />
        Emergency & Care
      </h2>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyItems.map((item) => (
              <div
                key={item.name}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => window.location.href = item.path}
              >
                <div className="flex items-center mb-3">
                  <item.icon className={`h-8 w-8 text-${item.color}-500`} />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MedicalRecords: React.FC = () => {
  return (
    <div className="space-y-8">
      <PersonalInfoSection />
      <PatientHistorySection />
      <PhysicalExamSection />
      <DiagnosticTestsSection />
      <EmergencyCareSection />
    </div>
  );
};

export default MedicalRecords;

