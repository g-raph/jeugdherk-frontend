import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Article } from 'src/app/articles/article';
import { Category } from 'src/app/categories/category';
import { environment } from 'src/environments/environment';
import { Homepage } from './homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage$: Observable<Homepage>;
  articles$: Observable<Article[]>;
  categories$: Observable<Category[]>;
  selected: Date | null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.articles$ = this.api.getArticles();
    this.articles$.subscribe(console.log);
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
