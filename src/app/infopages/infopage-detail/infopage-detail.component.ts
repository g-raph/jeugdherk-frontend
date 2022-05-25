import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Infopage } from '../infopage';

@Component({
  selector: 'app-infopage-detail',
  templateUrl: './infopage-detail.component.html',
  styleUrls: ['./infopage-detail.component.scss']
})
export class InfopageDetailComponent implements OnInit {

  page$: Observable<Infopage>;
  infopages$: Observable<Infopage>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    // this.page$ = this.api.getInfoPage(this.route.snapshot.params.slug);
    this.infopages$ = this.api.getInfoPages();
    this.route.paramMap.subscribe(params => {
      this.page$ = this.api.getInfoPage(this.route.snapshot.params.slug)
    });
  }

}
