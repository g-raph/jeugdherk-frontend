import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, pipe, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService, Message } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Page } from '../page';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit, OnDestroy {

  contactpage$: Observable<Page>;
  destroy$ = new Subject;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.contactpage$ = this.api.getContactPage();
  }

  imageUrl(path: string) {
    return environment.apiUrl + path;
  }

  saveMessage() {
    const testMessage: Message = {
      sender_name: 'Gunter Gielen',
      sender_email: 'gunter.gielen@telenet.be',
      message_body: 'test body hier',
      message_subject: 'Onderwerp van message'
    };
    this.api.addMessage(testMessage).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result) => {
        console.log('result', result);
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
