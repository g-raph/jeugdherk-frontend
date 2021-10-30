import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Infopage } from 'src/app/infopages/infopage';
import { environment } from 'src/environments/environment';
import { Homepage } from '../homepage/homepage';
import { Page } from '../page';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {

  clubpage$: Observable<Page>;
  infopages$: Observable<Infopage>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.clubpage$ = this.api.getClubPage();
    this.infopages$ = this.api.getInfoPages();
  }

}
