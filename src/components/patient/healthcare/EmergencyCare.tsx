import EmergencySOS from './EmergencySOS';
import Telemedicine from './Telemedicine';
import TreatmentPlan from './TreatmentPlan';

const EmergencyCare = () => {
  return (
    <div className="space-y-8">
      <EmergencySOS />
      <TreatmentPlan />
      <Telemedicine />
    </div>
  );
};

export default EmergencyCare;
