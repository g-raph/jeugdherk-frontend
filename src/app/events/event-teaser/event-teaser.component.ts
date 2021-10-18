import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../event-item';

@Component({
  selector: 'app-event-teaser',
  templateUrl: './event-teaser.component.html',
  styleUrls: ['./event-teaser.component.scss']
})
export class EventTeaserComponent implements OnInit {

  @Input() item: EventItem;

  constructor() { }

  ngOnInit() {
  }

}
