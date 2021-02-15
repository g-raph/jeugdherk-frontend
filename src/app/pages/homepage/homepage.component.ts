import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/categories/category';
import { Treatment } from 'src/app/treatments/treatment';
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
    this.treatments$ = this.api.getTreatments();
    this.categories$ = this.api.getCategories();
  }

}
