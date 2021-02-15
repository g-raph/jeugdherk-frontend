import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Treatment } from '../treatment';

@Component({
  selector: 'app-treatment-detail',
  templateUrl: './treatment-detail.component.html',
  styleUrls: ['./treatment-detail.component.scss']
})
export class TreatmentDetailComponent implements OnInit {

  page$: Observable<Treatment>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.page$ = this.api.getTreatment(this.route.snapshot.params.id);
  }

}
