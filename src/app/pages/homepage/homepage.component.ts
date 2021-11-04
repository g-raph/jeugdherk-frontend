import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Article } from 'src/app/articles/article';
import { EventItem } from 'src/app/events/event-item';
import { Sponsor } from 'src/app/sponsors/sponsor';
import { Team } from 'src/app/teams/team';
import { Homepage, InfoBlock } from './homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage$: Observable<Homepage>;
  articles$: Observable<Article[]>;
  events$: Observable<EventItem[]>;
  sponsors$: Observable<Sponsor[]>;
  teams$: Observable<Team[]>;
  infoBlock$: Observable<InfoBlock>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.articles$ = this.api.getArticles();
    this.events$ = this.api.getTimeslots();
    this.sponsors$ = this.api.getSponsors();
    this.teams$ = this.api.getTeams();
    this.infoBlock$ = this.api.getInfoblock();
  }

}
