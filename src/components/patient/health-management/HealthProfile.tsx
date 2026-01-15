import {
    ActivityIcon,
    AlertCircleIcon,
    DropletsIcon,
    HeartIcon,
    TargetIcon,
    ThermometerIcon,
    TrendingDownIcon,
    TrendingUpIcon
} from 'lucide-react';
import React, { useState } from 'react';

interface HealthMetric {
  name: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface HealthGoal {
  id: number;
  name: string;
  target: string;
  current: string;
  progress: number;
  status: 'on-track' | 'behind' | 'achieved';
}

const HealthProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [healthMetrics] = useState<HealthMetric[]>([
    { name: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', trend: 'stable' },
    { name: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', trend: 'stable' },
    { name: 'Body Temperature', value: '98.6', unit: '°F', status: 'normal', trend: 'stable' },
    { name: 'Blood Oxygen', value: '98', unit: '%', status: 'normal', trend: 'up' },
    { name: 'Cholesterol', value: '185', unit: 'mg/dL', status: 'normal', trend: 'down' },
    { name: 'Blood Glucose', value: '95', unit: 'mg/dL', status: 'normal', trend: 'stable' },
  ]);

  const [healthGoals] = useState<HealthGoal[]>([
    { id: 1, name: 'Daily Steps', target: '10,000', current: '7,500', progress: 75, status: 'on-track' },
    { id: 2, name: 'Water Intake', target: '8 glasses', current: '6', progress: 75, status: 'on-track' },
    { id: 3, name: 'Sleep Duration', target: '8 hours', current: '6.5', progress: 81, status: 'behind' },
    { id: 4, name: 'Exercise Minutes', target: '30 min', current: '30', progress: 100, status: 'achieved' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUpIcon className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDownIcon className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 bg-gray-300 rounded-full" />;
    }
  };

  const getGoalStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-500';
      case 'behind':
        return 'bg-yellow-500';
      case 'achieved':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Health Overview Header */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Health Profile Overview</h2>
            <p className="text-sm text-gray-500">Last updated: Today at 9:00 AM</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-red-600 hover:text-red-800 font-semibold"
          >
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Health Metrics Grid */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-md font-medium text-gray-900 flex items-center">
            <ActivityIcon className="h-5 w-5 mr-2 text-red-500" />
            Vital Signs & Metrics
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthMetrics.map((metric) => (
              <div 
                key={metric.name} 
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {metric.name === 'Heart Rate' && (
                      <HeartIcon className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    {metric.name === 'Body Temperature' && (
                      <ThermometerIcon className="h-5 w-5 text-orange-500 mr-2" />
                    )}
                    {metric.name === 'Blood Oxygen' && (
                      <DropletsIcon className="h-5 w-5 text-blue-500 mr-2" />
                    )}
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className="ml-1 text-sm text-gray-500">{metric.unit}</span>
                </div>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(metric.status)}`}>
                    {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Goals Section */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-md font-medium text-gray-900 flex items-center">
            <TargetIcon className="h-5 w-5 mr-2 text-green-500" />
            Health Goals
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {healthGoals.map((goal) => (
              <div key={goal.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">{goal.name}</span>
                    {goal.status === 'behind' && (
                      <AlertCircleIcon className="h-4 w-4 text-yellow-500 ml-2" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    {goal.current} / {goal.target}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${getGoalStatusColor(goal.status)}`} 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{goal.progress}% completed</span>
                  <span className={`text-xs font-medium ${
                    goal.status === 'on-track' ? 'text-green-600' :
                    goal.status === 'behind' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`}>
                    {goal.status === 'on-track' && 'On Track'}
                    {goal.status === 'behind' && 'Behind Schedule'}
                    {goal.status === 'achieved' && 'Achieved! ✓'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Summary */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h3 className="text-md font-medium text-gray-900 mb-3">Health Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Overall Health Score</div>
              <div className="text-3xl font-bold text-green-600">85</div>
              <div className="text-xs text-gray-400">out of 100</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Active Goals</div>
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-xs text-gray-400">of 4 in progress</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Risk Level</div>
              <div className="text-3xl font-bold text-green-600">Low</div>
              <div className="text-xs text-gray-400">Based on current metrics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-md font-medium text-gray-900">Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
              <AlertCircleIcon className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Increase daily steps</p>
                <p className="text-sm text-yellow-700">Try to reach 10,000 steps daily for better cardiovascular health.</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-blue-50 rounded-lg">
              <div className="h-5 w-5 text-blue-600 mr-3 mt-0.5">💡</div>
              <div>
                <p className="text-sm font-medium text-blue-800">Maintain healthy sleep</p>
                <p className="text-sm text-blue-700">Aim for 7-9 hours of quality sleep each night.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;

