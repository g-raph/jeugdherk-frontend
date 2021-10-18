import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sidebarService: SidebarService) {
  }

  showMobileSidebar$ = this.sidebarService.showMobileSidebar$;

  openMobileSidebar() {
    this.showMobileSidebar$.next(true);
  }

  closeMobileSidebar() {
    this.showMobileSidebar$.next(false);
  }

}
