import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  validateSession() {

    const session = localStorage.getItem('token')

    if(session) {
      return true;
    } else {
      return false;
    }

    return false;
  }
}
