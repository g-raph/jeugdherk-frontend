import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-teaser',
  templateUrl: './article-teaser.component.html',
  styleUrls: ['./article-teaser.component.scss']
})
export class ArticleTeaserComponent implements OnInit {

  @Input() item: Article;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
