import { BluRayInterface } from 'interfaces/blu-ray';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CollectionInterface {
  id?: string;
  name: string;
  description?: string;
  release_date?: any;
  rating?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  blu_ray?: BluRayInterface[];
  user?: UserInterface;
  _count?: {
    blu_ray?: number;
  };
}

export interface CollectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
