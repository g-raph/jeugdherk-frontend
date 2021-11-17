import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { EventItem } from '../event-item';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  events$: Observable<EventItem[]>;
  destroy$ = new Subject();

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.events$ = this.api.getTimeslots().pipe(
      takeUntil(this.destroy$),
      map(items => items.filter(item => new Date().setHours(0,0,0,0) <= new Date(item.startdate).setHours(0,0,0,0)))
    );
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
