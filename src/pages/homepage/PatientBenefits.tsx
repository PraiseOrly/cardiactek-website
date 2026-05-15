import Footer from '../../components/Homepage/Footer'
import Navbar from '../../components/Homepage/Navbar'
import { EmergencySupport, HealthInsights, HealthMonitoringDashboard, PersonalizedCareTools } from './PatientBenefitsFeatures'
import { Hero, ValueProps } from './PatientBenefitsHero'

// ============================================================================
// PATIENT BENEFITS PAGE
// ============================================================================
const PatientBenefits = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HealthMonitoringDashboard />
        <PersonalizedCareTools />
        <EmergencySupport />
        <HealthInsights />
      </main>
      <Footer />
    </div>
  )
}

export default PatientBenefits
