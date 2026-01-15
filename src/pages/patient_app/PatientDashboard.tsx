import { Route, Routes } from 'react-router-dom';
import { Appointments, PatientHome } from '../../components/patient';
import AppointmentsOverview from '../../components/patient/appointments/AppointmentsOverview';
import ChatAssistant from '../../components/patient/appointments/ChatAssistant';
import Notifications from '../../components/patient/appointments/Notifications';
import { Diagnostics } from '../../components/patient/diagnostics';
import { HealthOverview, HealthProfile, MedicalRecords } from '../../components/patient/health-management';
import { EmergencyCare } from '../../components/patient/healthcare';
import PatientDashboardLayout from '../../components/patient/PatientDashboardLayout';
import { WearableDevices } from '../../components/patient/smart';
import DevicesIntegrations from '../../components/patient/smart/DevicesIntegrations';

const PatientDashboard = () => {
  const patientName = 'Jane Doe';
  return <PatientDashboardLayout userName={patientName}>
      <Routes>
        <Route path="/" element={<PatientHome />} />
        <Route path="/health-profile" element={<HealthProfile />} />
        <Route path="/health-overview" element={<HealthOverview />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/emergency-care" element={<EmergencyCare />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments-overview" element={<AppointmentsOverview />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<ChatAssistant />} />
        <Route path="/devices-integrations" element={<DevicesIntegrations />} />
        <Route path="/wearables" element={<WearableDevices />} />
      </Routes>
    </PatientDashboardLayout>;
};
export default PatientDashboard;

