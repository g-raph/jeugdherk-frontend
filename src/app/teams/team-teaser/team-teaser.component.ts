import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team-teaser',
  templateUrl: './team-teaser.component.html',
  styleUrls: ['./team-teaser.component.scss']
})
export class TeamTeaserComponent implements OnInit {

  @Input() item: Team;

  constructor() { }

  ngOnInit() {
  }

}
