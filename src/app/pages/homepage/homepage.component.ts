import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
export class HomepageComponent implements OnInit, OnDestroy {

  homepage$: Observable<Homepage>;
  articles$: Observable<Article[]>;
  events$: Observable<EventItem[]>;
  teams$: Observable<Team[]>;
  infoBlock$: Observable<InfoBlock>;
  destroy$ = new Subject();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.articles$ = this.api.getArticles();
    this.events$ = this.api.getTimeslots().pipe(
      takeUntil(this.destroy$),
      map(items => items.filter(item => new Date().setHours(0,0,0,0) <= new Date(item.startdate).setHours(0,0,0,0)))
    );
    this.teams$ = this.api.getTeams();
    this.infoBlock$ = this.api.getInfoblock();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
