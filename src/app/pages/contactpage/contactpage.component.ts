import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Page } from '../page';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit, OnDestroy {

  contactpage$: Observable<Page>;

  metaSubscription: Subscription;

  constructor(
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.contactpage$ = this.api.getContactPage();

    this.metaSubscription = this.contactpage$.subscribe(data => {
      this.title.setTitle(data.title);
      const keywords = data.title.split(' ').join(',');
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
        'content': 'JVGH | ' + data.title
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
    this.metaSubscription.unsubscribe();
  }

}
