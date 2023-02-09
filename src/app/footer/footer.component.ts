import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Sponsor } from '../sponsors/sponsor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sponsors$: Observable<Sponsor[]>;
  bigSponsors$: Observable<Sponsor[]>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.bigSponsors$ = this.api.getSponsors().pipe(
      map(sponsors => sponsors.filter(sponsor => sponsor.sponsorship === 'big'))
    );
    this.sponsors$ = this.api.getSponsors().pipe(
      map(sponsors => sponsors.filter(item => item.sponsorship !== 'big'))
    );
  }

}
