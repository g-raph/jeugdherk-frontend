import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    const url = `http://localhost:1337/restaurants`;
    return this.http.get(url);
  }

  getTreatments(): Observable<any> {
    const url = `http://localhost:1337/treatments`;
    return this.http.get(url);
  }

  getCategories(): Observable<any> {
    const url = `http://localhost:1337/categories`;
    return this.http.get(url);
  }

  getCategory(id: string): Observable<any> {
    const url = `http://localhost:1337/categories/${id}`;
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

  getRestaurant(id: string): Observable<any> {
    const url = `http://localhost:1337/restaurants/${id}`;
    return this.http.get(url);
  }

  getTreatment(id: string): Observable<any> {
    const url = `http://localhost:1337/treatments/${id}`;
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

  getPriceList(): Observable<any> {
    const url = `http://localhost:1337/pricelist`;
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
