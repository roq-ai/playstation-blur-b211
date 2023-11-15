import { UserInterface } from 'interfaces/user';
import { BluRayInterface } from 'interfaces/blu-ray';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  blu_ray_id: string;
  purchase_date?: any;
  price?: number;
  payment_method?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  blu_ray?: BluRayInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  blu_ray_id?: string;
  payment_method?: string;
}
