import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

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
    this.user = await lastValueFrom(this.userService.getUser('64f08ec249ac0b8d97b0a872'));
    this.users.push(this.user);
  }
}
