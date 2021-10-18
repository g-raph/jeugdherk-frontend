import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { EventItem } from '../event-item';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events$: Observable<EventItem[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.events$ = this.api.getTimeslots();
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
