import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/posts';
  Users() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
