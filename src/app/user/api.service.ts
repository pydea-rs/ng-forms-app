import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private root: string = 'https://interview-api.amerandish.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.root}/users/`, { headers: this.getHeaders() });
  }

  createUser(data: { [key: string]: string }): Observable<any> {
    return this.http.post(`${this.root}/users/`, data, {
      headers: this.getHeaders(),
      observe: 'response',
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }
  getUser(id: number): Observable<any> {
    console.log(`${this.root}/users/${id}`)
    return this.http.get(`${this.root}/users/${id}`, {
      headers: this.getHeaders(),
    });
  }

  editUser(user: {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.patch(`${this.root}/users/${user.id}`, user, {
      headers: this.getHeaders(),
      observe: 'response',
    });
  }
}
