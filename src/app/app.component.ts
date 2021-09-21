import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showMobileSidebar$ = new BehaviorSubject<boolean>(false);

  openMobileSidebar() {
    this.showMobileSidebar$.next(true);
  }

  closeMobileSidebar() {
    this.showMobileSidebar$.next(false);
  }

}
