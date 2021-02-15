import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { PricelistPage } from '../page';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {

  pricelistpage$: Observable<PricelistPage>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.pricelistpage$ = this.api.getPriceList();
  }

}
