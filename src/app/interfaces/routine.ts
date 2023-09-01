import { Exercice } from './exercice';
import { User } from './user';

export interface Routine {
  creator: User; // User who create the routine
  exercices: Exercice[];
  owner: User; // User who do the routine
}
