import { Smartphone as SmartphoneIcon } from 'lucide-react';
import React from 'react';
import { WearableDevices } from './index';

const DevicesIntegrations: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <SmartphoneIcon className="h-6 w-6 mr-2 text-purple-500" />
          Devices & Integrations
        </h2>
        <p className="text-gray-500">Manage your wearables and connected devices</p>
      </div>
      <WearableDevices />
    </div>
  );
};

export default DevicesIntegrations;

