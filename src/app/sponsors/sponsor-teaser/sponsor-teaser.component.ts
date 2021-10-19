import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor-teaser',
  templateUrl: './sponsor-teaser.component.html',
  styleUrls: ['./sponsor-teaser.component.scss']
})
export class SponsorTeaserComponent implements OnInit {

  @Input() item: Sponsor;

  constructor() { }

  ngOnInit() {
  }

  imageUrl(path: string) {
    return environment.apiUrl + path;
  }

  websiteUrl(path: string) {
    return environment.apiUrl + path;
  }

}
