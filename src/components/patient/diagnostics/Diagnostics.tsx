import BloodTests from './BloodTests';
import CardiacMRI from './CardiacMRI';
import CTScan from './CTScan';
import ECGAnalysis from './ECGAnalysis';
import HolterMonitor from './HolterMonitor';
import SymptomChecker from './SymptomChecker';

const Diagnostics = () => {
  return (
    <div className="space-y-8">
      <ECGAnalysis />
      <HolterMonitor />
      <BloodTests />
      <CardiacMRI />
      <CTScan />
      <SymptomChecker />
    </div>
  );
};

export default Diagnostics;
