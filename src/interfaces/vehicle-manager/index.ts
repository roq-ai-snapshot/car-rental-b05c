import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleManagerInterface {
  id?: string;
  name: string;
  user_id: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  vehicle?: VehicleInterface[];
  user?: UserInterface;
  _count?: {
    vehicle?: number;
  };
}

export interface VehicleManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  description?: string;
}
