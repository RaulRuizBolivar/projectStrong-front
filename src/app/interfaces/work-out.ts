import { Exercice } from './exercice';
import { User } from './user';

export interface WorkOut {
  exercices: Exercice[];
  duration: number;
  records: number;
  volume: number;
  creator: User;
  date: Date;
  comments: any[];
}
