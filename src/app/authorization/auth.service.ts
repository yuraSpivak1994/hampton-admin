import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authorize(username: string, password: string): Observable<any> {
    return username === 'yura' && password === '1111' ? of(true) : of(false);
  }
}
