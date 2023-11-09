import { User } from './user';
import { UserSettings } from './user-settings';
import { WorkOut } from './work-out';

export interface userDto {
  name: string;
  username: string;
  password: string;
  lastname?: string;
  profilePicture?: string;
  workOuts?: WorkOut[];
  following?: User[];
  followers?: User[];
  userSettings?: UserSettings;
}
