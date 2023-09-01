import { MusclePrimary } from '../enums/muscle-primary';
import { Set } from './set';

export interface Exercice {
  _id?: string;
  name: string;
  pictures: string[];
  sets: Set[];
  previousSets: Set[];
  muscle: MusclePrimary;
}
