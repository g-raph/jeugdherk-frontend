import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.clubpage$ = this.api.getClubPage();
    this.clubpage$.subscribe(console.log);
  }

  imageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
