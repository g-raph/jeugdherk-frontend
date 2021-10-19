import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {

  sponsors$: Observable<Sponsor[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.sponsors$ = this.api.getSponsors();
  }

}
