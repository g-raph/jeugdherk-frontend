import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  page$: Observable<Article>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.page$ = this.api.getArticle(this.route.snapshot.params.slug);
  }

  articleDetailImgUrl(path: string) {
    return environment.apiUrl + path;
  }

}
