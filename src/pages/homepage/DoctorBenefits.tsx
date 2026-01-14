
import Navbar from '../../components/Homepage/Navbar'
import { CareCoordination, DiagnosticCenter, DiagnosticTools, PatientMonitoring, PerformanceAnalytics } from './DoctorBenefitsFeatures'
import { Hero, ValueProps } from './DoctorBenefitsHero'

// ============================================================================
// DOCTOR BENEFITS PAGE
// ============================================================================
const DoctorBenefits = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <DiagnosticCenter />
        <DiagnosticTools />
        <CareCoordination />
        <PatientMonitoring />
        <PerformanceAnalytics />
      </main>
    </div>
  )
}

export default DoctorBenefits

