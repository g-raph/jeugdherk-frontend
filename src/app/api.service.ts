import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    const url = `http://localhost:1337/articles`;
    return this.http.get(url);
  }

  getTimeslots(): Observable<any> {
    const url = `http://localhost:1337/timeslots`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    const url = `http://localhost:1337/categories`;
    return this.http.get(url);
  }

  getCategory(slug: string): Observable<any> {
    const url = `http://localhost:1337/categories/${slug}`;
    return this.http.get(url);
  }

  getPages(): Observable<any> {
    const url = `http://localhost:1337/pages`;
    return this.http.get(url);
  }

  getPage(id: string): Observable<any> {
    const url = `http://localhost:1337/pages/${id}`;
    return this.http.get(url);
  }

  getArticle(slug: string): Observable<any> {
    const url = `http://localhost:1337/articles/${slug}`;
    return this.http.get(url);
  }

  getTimeslot(slug: string): Observable<any> {
    const url = `http://localhost:1337/timeslots/${slug}`;
    return this.http.get(url);
  }

  getHomePage(): Observable<any> {
    const url = `http://localhost:1337/homepage`;
    return this.http.get(url);
  }

  getAboutPage(): Observable<any> {
    const url = `http://localhost:1337/about-page`;
    return this.http.get(url);
  }

  getContactPage(): Observable<any> {
    const url = `http://localhost:1337/contact-page`;
    return this.http.get(url);
  }

  addMessage(message: Message): Observable<any> {
    const url = `http://localhost:1337/messages`;
    return this.http.post<Message>(url, message);
  }
}

export interface Message {
  message_subject: string;
  message_body: string;
  sender_email: string;
  sender_name: string;
}
