import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from './auth.model';
import { User } from './user.model';

const url = 'http://localhost:3000/sessions/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  auth(user: User): Observable<User> {
    return this.http.post<User>(`${url}`, user);
  }
}
