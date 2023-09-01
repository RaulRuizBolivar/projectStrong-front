import { Comment } from './comment';
import { Exercice } from './exercice';
import { User } from './user';

export interface WorkOut {
  title: string;
  description: string;
  exercices: Exercice[];
  pictures?: string;
  duration: number;
  volume: number;
  creator: User;
  date: Date;
  comments: Comment[];
  likedBy: User[];
}
