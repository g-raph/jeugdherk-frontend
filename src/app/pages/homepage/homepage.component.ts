import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Article } from 'src/app/articles/article';
import { EventItem } from 'src/app/events/event-item';
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
  metaSubscription: Subscription;

  constructor(
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.articles$ = this.api.getArticles();
    this.events$ = this.api.getTimeslots().pipe(
      takeUntil(this.destroy$),
      map(items => items.filter(item => new Date().setHours(0,0,0,0) <= new Date(item.startdate).setHours(0,0,0,0)))
    );
    this.teams$ = this.api.getTeams();
    this.infoBlock$ = this.api.getInfoblock();

    this.metaSubscription = this.homepage$.subscribe(data => {
      this.title.setTitle(data.Title);
      const keywords = data.Title.split(' ').join(',');
      const description = data.body;

      this.meta.updateTag({
          'name': 'keywords',
          'content': keywords
        },
        'name="keywords"'
      );
      this.meta.updateTag({
          'name': 'description',
          'content': description
        }, 
        'name="description"'
      );
      this.meta.updateTag({
        'property': 'og:title',
        'content': 'JVGH | ' + data.Title
      }, 
      'property="og:title"'
    );
    this.meta.updateTag({
        'property': 'og:description',
        'content': data.body.slice(0, 50) + '...'
      }, 
      'property="og:description"'
    );
    this.meta.updateTag({
        'property': 'og:image',
        'content': "https://www.jeugdherk.be/assets/logo.png"
      }, 
      'property="og:image"'
    );
    this.meta.updateTag({
        'property': 'og:type',
        'content': 'website'
      }, 
      'property="og:type"'
    );
    this.meta.updateTag({
        'property': 'og:url',
        'content': window.location.href
      }, 
      'property="og:url"'
    );
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.metaSubscription.unsubscribe();
  }

}
