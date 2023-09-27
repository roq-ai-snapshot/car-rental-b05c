import { UserInterface } from 'interfaces/user';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id: string;
  vehicle_id: string;
  start_time: any;
  end_time: any;
  pickup_location: string;
  dropoff_location: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vehicle?: VehicleInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  vehicle_id?: string;
  pickup_location?: string;
  dropoff_location?: string;
}
