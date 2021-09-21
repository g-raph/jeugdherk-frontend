import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/categories/category';
import { Treatment } from 'src/app/treatments/treatment';
import { environment } from 'src/environments/environment';
import { Homepage } from './homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage$: Observable<Homepage>;
  treatments$: Observable<Treatment[]>;
  categories$: Observable<Category[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.homepage$ = this.api.getHomePage();
    this.categories$ = this.api.getCategories();
    this.categories$.subscribe(console.log);
  }

  imageUrl(path: string) {
    return environment.apiUrl + path;
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
