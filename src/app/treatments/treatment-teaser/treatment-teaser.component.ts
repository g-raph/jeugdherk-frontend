import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/categories/category';

@Component({
  selector: 'app-treatment-teaser',
  templateUrl: './treatment-teaser.component.html',
  styleUrls: ['./treatment-teaser.component.scss']
})
export class TreatmentTeaserComponent implements OnInit {

  @Input() item: Category;

  constructor() { }

  ngOnInit() {
  }

}
