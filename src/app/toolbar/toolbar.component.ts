import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'Instituut Valkenborgh';
  menuItems = [
    {name: 'Welkom', link: '/welkom'},
    {name: 'Onze club', link: '/club'},
    {name: 'Ploegen', link: '/ploegen'},
    {name: 'Sponsors', link: '/sponsors'},
    {name: 'Nieuws', link: '/nieuws'},
    {name: 'Evenementen', link: '/evenementen'},
    {name: 'Contact', link: '/contact'},
  ];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  closeMobileSidebar() {
    this.sidebarService.showMobileSidebar$.next(false);
  }

}
