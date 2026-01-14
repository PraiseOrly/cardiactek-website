import React from 'react';
import { HeartPulseIcon } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-pulse">
          <HeartPulseIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading CardiacTek</h2>
        <p className="text-gray-300">Preparing your cardiac care experience...</p>
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
