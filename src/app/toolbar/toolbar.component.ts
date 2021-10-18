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
    {name: 'Nieuws', link: '/nieuws'},
    {name: 'Evenementen', link: '/evenementen'},
    {name: 'Ploegen', link: '/ploegen'},
    {name: 'Contact', link: '/contact'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
