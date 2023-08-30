import { Component } from '@angular/core';
import { WorkOut } from 'src/app/interfaces/work-out';

@Component({
  selector: 'strong-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  workOuts: WorkOut[] = [
    {
      exercices: [],
      duration: 12,
      records: 2,
      volume: 33,
      comments: [],
      date: new Date(Date.now()),
      creator: {
        name: 'nombre',
        username: 'usuarIo',
        profilePicture: 'url',
      },
    },
  ];
}
