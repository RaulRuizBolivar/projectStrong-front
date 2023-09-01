import { User } from './user';

export interface Comment {
  creator: User;
  message: string;
  date: Date;
}
