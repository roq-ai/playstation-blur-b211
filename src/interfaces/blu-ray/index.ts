import { CustomerInterface } from 'interfaces/customer';
import { OwnerInterface } from 'interfaces/owner';
import { CollectionInterface } from 'interfaces/collection';
import { GetQueryInterface } from 'interfaces';

export interface BluRayInterface {
  id?: string;
  title: string;
  description?: string;
  release_date?: any;
  rating?: number;
  collection_id: string;
  created_at?: any;
  updated_at?: any;
  customer?: CustomerInterface[];
  owner?: OwnerInterface[];
  collection?: CollectionInterface;
  _count?: {
    customer?: number;
    owner?: number;
  };
}

export interface BluRayGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  collection_id?: string;
}
