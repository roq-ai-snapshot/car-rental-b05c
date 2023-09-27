import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdministratorInterface {
  id?: string;
  name: string;
  user_id: string;
  description?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  description?: string;
}
