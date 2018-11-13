import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authorize(username: string, password: string): Observable<any> {
    return username === 'admin' && password === 'admin' ? of(true) : of(false);
  }
}
