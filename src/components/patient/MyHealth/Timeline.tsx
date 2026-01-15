import { Activity as ActivityIcon } from 'lucide-react';
import React from 'react';
import PatientHistory from './Medications';
import PersonalInfo from './PersonalInfo';
import PhysicalExam from './PhysicalExam';

const HealthOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <ActivityIcon className="h-6 w-6 mr-2 text-red-500" />
          Health Overview
        </h2>
        <p className="text-gray-500">Your complete health information at a glance</p>
      </div>
      <PersonalInfo />
      <PatientHistory />
      <PhysicalExam />
    </div>
  );
};

export default HealthOverview;

