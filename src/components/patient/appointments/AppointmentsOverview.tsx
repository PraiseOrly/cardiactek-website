import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import Appointments from '../Appointments';
import ScheduleAppointment from './ScheduleAppointment';

const AppointmentsOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <CalendarIcon className="h-6 w-6 mr-2 text-blue-500" />
          Appointments
        </h2>
        <p className="text-gray-500">Manage your appointments and schedule new ones</p>
      </div>
      <ScheduleAppointment />
      <Appointments />
    </div>
  );
};

export default AppointmentsOverview;

