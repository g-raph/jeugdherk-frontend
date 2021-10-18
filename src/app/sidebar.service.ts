import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  showMobileSidebar$ = new BehaviorSubject<boolean>(false);

  openMobileSidebar() {
    this.showMobileSidebar$.next(true);
  }

  closeMobileSidebar() {
    this.showMobileSidebar$.next(false);
  }
}
