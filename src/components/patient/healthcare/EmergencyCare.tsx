import { Activity, AlertCircle, Calendar, Clock, FileText, MapPin, Phone, Pill, Send, Shield, Users } from 'lucide-react';
import { useState } from 'react';

const EmergencyCare = () => {
  const [sosActivated, setSosActivated] = useState(false);
  const [activeTab, setActiveTab] = useState<'sos' | 'treatment'>('sos');

  const handleEmergency = () => {
    setSosActivated(true);
    // In a real application, this would:
    // 1. Alert emergency services
    // 2. Share location
    // 3. Send medical history
    // 4. Notify emergency contacts
  };

  const medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', purpose: 'Blood pressure control' },
    { name: 'Metoprolol', dosage: '25mg', frequency: 'Twice daily', purpose: 'Heart rate control' },
    { name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', purpose: 'Blood thinner' },
  ];

  const lifestyleChanges = [
    'Regular exercise: 30 minutes of moderate activity, 5 days/week',
    'Low-sodium diet',
    'Stress management techniques',
    'Avoid smoking and excessive alcohol',
    'Maintain healthy weight',
  ];

  const followUps = [
    { type: 'Cardiology Check-up', date: 'Jan 15, 2025', details: 'Regular follow-up with Dr. Smith' },
    { type: 'Blood Pressure Check', date: 'Jan 1, 2025', details: 'Routine BP monitoring' },
    { type: 'ECG', date: 'Feb 1, 2025', details: 'Regular heart rhythm check' },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1 flex gap-1">
        <button
          onClick={() => setActiveTab('sos')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'sos'
              ? 'bg-red-500 text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <AlertCircle className="w-4 h-4 inline mr-2" />
          Emergency SOS
        </button>
        <button
          onClick={() => setActiveTab('treatment')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'treatment'
              ? 'bg-red-500 text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-4 h-4 inline mr-2" />
          Treatment Plan
        </button>
      </div>

      {/* Emergency SOS Tab */}
      {activeTab === 'sos' && (
        <div className="space-y-6">
          {/* SOS Activation */}
          <div className="bg-red-50 rounded-lg border-2 border-red-500 p-6">
            <div className="text-center space-y-4">
              <AlertCircle className="h-16 w-16 text-red-600 mx-auto" />
              <h2 className="text-2xl font-bold text-red-900">Emergency SOS</h2>
              <p className="text-red-700 max-w-md mx-auto">
                Activate Emergency SOS to alert emergency services and share your
                location and medical information
              </p>
              <button
                onClick={handleEmergency}
                disabled={sosActivated}
                className={`py-4 px-8 rounded-lg text-white font-bold text-lg transition-all ${
                  sosActivated
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {sosActivated ? 'Emergency Services Notified' : 'Activate Emergency SOS'}
              </button>
            </div>

            {sosActivated && (
              <div className="mt-8 space-y-4 max-w-md mx-auto">
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Contacting Emergency Services</p>
                    <p className="text-sm text-gray-600">
                      Your medical history will be shared automatically
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Location Services Active</p>
                    <p className="text-sm text-gray-600">
                      Emergency responders can locate you
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-start">
                  <Send className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency Contacts Notified</p>
                    <p className="text-sm text-gray-600">
                      Your emergency contacts will be alerted immediately
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Emergency Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-500 mr-2" />
              Emergency Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Emergency Contacts
                  </p>
                  <p className="text-gray-900">John Doe (Spouse) - +1 (555) 123-4567</p>
                  <p className="text-gray-900">Mary Smith (Sister) - +1 (555) 987-6543</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-500 mb-2">Allergies</p>
                  <p className="text-gray-900">Penicillin, Sulfa Drugs</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  <Pill className="w-4 h-4 mr-2" />
                  Current Medications
                </p>
                <p className="text-gray-900">Lisinopril 10mg, Metoprolol 25mg</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Plan Tab */}
      {activeTab === 'treatment' && (
        <div className="space-y-6">
          {/* Treatment Plan Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
              <FileText className="w-6 h-6 text-red-500 mr-2" />
              Treatment Plan
            </h2>
            <p className="text-gray-600">Your personalized cardiac care plan</p>
          </div>

          {/* Medications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Pill className="w-5 h-5 text-red-500 mr-2" />
              Medications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {medications.map((med, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Pill className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-gray-900">
                        {med.name} - {med.dosage}
                      </p>
                      <p className="text-sm text-gray-600">{med.frequency}</p>
                      <p className="text-xs text-gray-500 mt-1">{med.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle Changes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 text-red-500 mr-2" />
              Lifestyle Changes
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-3">
                {lifestyleChanges.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow-up Schedule */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-red-500 mr-2" />
              Follow-up Schedule
            </h3>
            <div className="space-y-3">
              {followUps.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{appointment.type}</p>
                      <p className="text-sm text-gray-500">{appointment.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{appointment.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyCare;
