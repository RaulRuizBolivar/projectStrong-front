import { WorkOut } from './work-out';

export interface User {
  _id?: string;
  name: string;
  lastname?: string;
  username: string;
  profilePicture: string;
  workOuts: WorkOut[];
  following?: User[];
  followers: User[];
}
