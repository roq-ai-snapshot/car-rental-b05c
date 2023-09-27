import { BookingInterface } from 'interfaces/booking';
import { VehicleManagerInterface } from 'interfaces/vehicle-manager';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate_number: string;
  vehicle_manager_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  vehicle_manager?: VehicleManagerInterface;
  _count?: {
    booking?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate_number?: string;
  vehicle_manager_id?: string;
}
