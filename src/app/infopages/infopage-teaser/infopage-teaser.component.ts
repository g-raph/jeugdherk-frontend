import { Component, Input, OnInit } from '@angular/core';
import { Infopage } from '../infopage';

@Component({
  selector: 'app-infopage-teaser',
  templateUrl: './infopage-teaser.component.html',
  styleUrls: ['./infopage-teaser.component.scss']
})
export class InfopageTeaserComponent implements OnInit {

  @Input() item: Infopage;

  constructor() { }

  ngOnInit() {
  }

}
