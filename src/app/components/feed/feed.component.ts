import { Component } from '@angular/core';
import { User } from '@interface/user';
import { userDto } from '@interface/userDto';
import { UserService } from '@services/user.service';
import { Theme } from 'app/enums/theme';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'strong-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  user!: User;
  users: User[] = [];
  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = await lastValueFrom(this.userService.getOne('6519f4bbcaf5a512e0309a5b'));
    // TODO delete
    console.log('user --->', this.user);
    this.users.push(this.user);
  }

  async createUser() {
    const userDto: userDto = {
      name: 'admin2',
      username: 'superAdmin2',
      password: 'admin-admin',
    };
    const response = await lastValueFrom(this.userService.create(userDto));
    // TODO delete
    console.log('response --->', response);
  }
}
