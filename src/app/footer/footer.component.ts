import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Sponsor } from '../sponsors/sponsor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sponsors$: Observable<Sponsor[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.sponsors$ = this.api.getSponsors();
  }

}
