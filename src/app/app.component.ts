import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'strong-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subscriptionKiller: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.subscriptionKiller)).subscribe((_queryParams) => {
      if (!_queryParams) return;
      console.log(_queryParams);
    });
  }
}
