import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/categories/category';
import { Treatment } from '../treatment';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.scss']
})
export class TreatmentListComponent implements OnInit {

  treatments$: Observable<Treatment[]>;
  categories$: Observable<Category[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.treatments$ = this.api.getTreatments();
    this.categories$ = this.api.getCategories();
  }

}
