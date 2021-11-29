import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.articles$ = this.api.getArticles();
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
