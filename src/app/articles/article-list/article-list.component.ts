import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) {
  }

  ngOnInit(): void {
    this.articles$ = this.api.getArticles();

    this.title.setTitle("JVGH | Nieuws");
    const keywords = "JVGH, nieuws";
    const description = "JVGH | Nieuws";

    this.meta.updateTag(
      {
        name: "keywords",
        content: keywords,
      },
      'name="keywords"'
    );
    this.meta.updateTag(
      {
        name: "description",
        content: description,
      },
      'name="description"'
    );
    this.meta.updateTag(
      {
        property: "og:title",
        content: "JVGH | Nieuws",
      },
      'property="og:title"'
    );
    this.meta.updateTag(
      {
        property: "og:description",
        content: "JVGH | Nieuws",
      },
      'property="og:description"'
    );
    this.meta.updateTag(
      {
        property: "og:image",
        content: "https://www.jeugdherk.be/assets/logo.png",
      },
      'property="og:image"'
    );
    this.meta.updateTag(
      {
        property: "og:type",
        content: "website",
      },
      'property="og:type"'
    );
    this.meta.updateTag(
      {
        property: "og:url",
        content: window.location.href,
      },
      'property="og:url"'
    );
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
