import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'Instituut Valkenborgh';
  menuItems = [
    {name: 'Welkom', link: '/welkom'},
    {name: 'Behandelingen', link: '/behandelingen'},
    {name: 'Tarieven', link: '/tarieven'},
    {name: 'Contact', link: '/contact'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
