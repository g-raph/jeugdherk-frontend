import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  page$: Observable<Category>;
  categories$: Observable<Category[]>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.categories$ = this.api.getCategories();
    this.route.params.subscribe(params => {
      this.page$ = this.api.getCategory(params.id);
    });
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
