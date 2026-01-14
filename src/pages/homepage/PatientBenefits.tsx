import Navbar from '../../components/Homepage/Navbar'
import { EmergencySupport, HealthInsights, HealthMonitoringDashboard, PersonalizedCareTools } from './PatientBenefitsFeatures'
import { Hero, ValueProps } from './PatientBenefitsHero'

// ============================================================================
// PATIENT BENEFITS PAGE
// ============================================================================
const PatientBenefits = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HealthMonitoringDashboard />
        <PersonalizedCareTools />
        <EmergencySupport />
        <HealthInsights />
      </main>
    </div>
  )
}

export default PatientBenefits
