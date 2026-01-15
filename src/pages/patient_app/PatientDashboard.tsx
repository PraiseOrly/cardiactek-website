import { Route, Routes } from 'react-router-dom';
import { PatientHome } from '../../components/patient';
import Appointments from '../../components/patient/Appointments';
import { ChatAssistant, Notifications, ScheduleAppointment } from '../../components/patient/appointments';
import { BloodTests, CardiacMRI, CTScan, Diagnostics, ECGAnalysis, HolterMonitor, SymptomChecker } from '../../components/patient/diagnostics';
import { HealthProfile } from '../../components/patient/health-management';
import { EmergencyCare } from '../../components/patient/healthcare';
import PatientDashboardLayout from '../../components/patient/PatientDashboardLayout';
import { WearableDevices } from '../../components/patient/smart';

const PatientDashboard = () => {
  const patientName = 'Jane Doe';
  return <PatientDashboardLayout userName={patientName}>
      <Routes>
        <Route path="/" element={<PatientHome />} />
        <Route path="/health-profile" element={<HealthProfile />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/emergency-care" element={<EmergencyCare />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/schedule" element={<ScheduleAppointment />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/wearables" element={<WearableDevices />} />
      </Routes>
    </PatientDashboardLayout>;
};
export default PatientDashboard;

