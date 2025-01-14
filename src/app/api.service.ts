import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any> {
    const url = `${environment.apiUrl}/articles?_sort=updated_at:DESC`;
    return this.http.get(url);
  }

  getTimeslots(): Observable<any> {
    const url = `${environment.apiUrl}/timeslots?_sort=startdate:ASC`;
    return this.http.get(url);
  }

  getInfoPages(): Observable<any> {
    const url = `${environment.apiUrl}/infopages`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    const url = `${environment.apiUrl}/categories`;
    return this.http.get(url);
  }

  getTeams(): Observable<any> {
    const url = `${environment.apiUrl}/teams?_sort=slug:ASC`;
    return this.http.get(url);
  }

  getSponsors(): Observable<any> {
    const url = `${environment.apiUrl}/sponsors`;
    return this.http.get(url);
  }

  getCategory(slug: string): Observable<any> {
    const url = `${environment.apiUrl}/categories/${slug}`;
    return this.http.get(url);
  }

  getPages(): Observable<any> {
    const url = `${environment.apiUrl}/pages`;
    return this.http.get(url);
  }

  getPage(id: string): Observable<any> {
    const url = `${environment.apiUrl}/pages/${id}`;
    return this.http.get(url);
  }

  getArticle(slug: string): Observable<any> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get(url);
  }

  getTimeslot(slug: string): Observable<any> {
    const url = `${environment.apiUrl}/timeslots/${slug}`;
    return this.http.get(url);
  }

  getInfoPage(slug: string): Observable<any> {
    const url = `${environment.apiUrl}/infopages/${slug}`;
    return this.http.get(url);
  }

  getTeam(slug: string): Observable<any> {
    const url = `${environment.apiUrl}/teams/${slug}`;
    return this.http.get(url);
  }

  getHomePage(): Observable<any> {
    const url = `${environment.apiUrl}/homepage`;
    return this.http.get(url);
  }

  getInfoblock(): Observable<any> {
    const url = `${environment.apiUrl}/infoblock`;
    return this.http.get(url);
  }

  getAboutPage(): Observable<any> {
    const url = `${environment.apiUrl}/about-page`;
    return this.http.get(url);
  }

  getContactPage(): Observable<any> {
    const url = `${environment.apiUrl}/contact-page`;
    return this.http.get(url);
  }

  addMessage(message: Message): Observable<any> {
    const url = `${environment.apiUrl}/messages`;
    return this.http.post<Message>(url, message);
  }
}

export interface Message {
  message_subject: string;
  message_body: string;
  sender_email: string;
  sender_name: string;
}
