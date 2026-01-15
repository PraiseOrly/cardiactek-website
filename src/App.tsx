import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DoctorDashboard from './pages/doctor_app/DoctorDashboard';
import Blog from './pages/homepage/Blog';
import ContactPage from './pages/homepage/ContactPage';
import DoctorBenefits from './pages/homepage/DoctorBenefits';
import Homepage from './pages/homepage/Homepage';
import PatientBenefits from './pages/homepage/PatientBenefits';
import PatientDashboard from './pages/patient_app/PatientDashboard';
import AuthPage from './pages/shared/AuthPage';
import ErrorPage from './pages/shared/ErrorPage';

import ErrorBoundary from './components/shared/ErrorBoundary';
import LiveMessageAssistant from './components/shared/LiveMessageAssistant';
import { UserProvider } from './context/UserContext';
import ArrhythmiaDetection from './pages/homepage/ArrhythmiaDetection';
import Certifications from './pages/homepage/Certifications';
import EhrIntegration from './pages/homepage/EhrIntegration';
import Research from './pages/homepage/Research';
import TreatmentGuidelines from './pages/homepage/TreatmentGuidelines';
import EcgAnalysis from './pages/shared/EcgAnalysis';
import LiveAssistant from './pages/shared/LiveAssistant';
import LongitudinalTracking from './pages/shared/LongitudinalTracking';
import RiskAssessment from './pages/shared/RiskAssessment';
import './styles/homepage.css';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
      <Route path="/patient-dashboard/*" element={<PatientDashboard />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/for-doctors" element={<DoctorBenefits />} />
      <Route path="/for-patients" element={<PatientBenefits />} />
      <Route path="/error" element={<ErrorPage />} />

      <Route path="/research" element={<Research />} />
      <Route path="/arrhythmia-detection" element={<ArrhythmiaDetection />} />
      <Route path="/ecg-analysis" element={<EcgAnalysis />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/risk-assessment" element={<RiskAssessment />} />
      <Route path="/longitudinal-tracking" element={<LongitudinalTracking />} />
      <Route path="/ehr-integration" element={<EhrIntegration />} />
      <Route path="/treatment-guidelines" element={<TreatmentGuidelines />} />
      <Route path="/live-assistant" element={<LiveAssistant />} />
    </Routes>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <Router>
          <AppContent />
          <LiveMessageAssistant />
        </Router>
      </UserProvider>
    </ErrorBoundary>
  );
}
