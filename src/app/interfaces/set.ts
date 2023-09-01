import { TypeSet } from '../enums/type-set';
import { Record } from './record';

export interface Set {
  type: TypeSet;
  weight: number;
  reps: number;
  records?: Record[];
}
