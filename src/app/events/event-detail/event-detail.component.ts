import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { EventItem } from '../event-item';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  page$: Observable<EventItem>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.page$ = this.api.getTimeslot(this.route.snapshot.params.slug);
  }

}
