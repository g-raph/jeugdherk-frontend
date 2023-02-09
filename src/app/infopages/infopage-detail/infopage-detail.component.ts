import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Infopage } from '../infopage';

@Component({
  selector: 'app-infopage-detail',
  templateUrl: './infopage-detail.component.html',
  styleUrls: ['./infopage-detail.component.scss']
})
export class InfopageDetailComponent implements OnInit, OnDestroy {

  page$: Observable<Infopage>;
  infopages$: Observable<Infopage>;

  metaSubscription: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.infopages$ = this.api.getInfoPages();
    this.route.paramMap.subscribe(params => {
      this.page$ = this.api.getInfoPage(this.route.snapshot.params.slug)
    });

    this.metaSubscription = this.page$.subscribe(data => {
      this.title.setTitle('Jeugdvoetbal Herk | ' + data.title);
      const keywords = data.title.split(' ').join(',');
      const description = data.text;

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
          'content': 'JVGH | ' + data.title
        }, 
        'property="og:title"'
      );
      this.meta.updateTag({
          'property': 'og:description',
          'content': data.text.slice(0, 50) + '...'
        }, 
        'property="og:description"'
      );
      this.meta.updateTag({
          'property': 'og:image',
          'content': data.images[0].url
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
    this.metaSubscription.unsubscribe();
  }

}
