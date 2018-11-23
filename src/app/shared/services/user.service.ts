import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Config} from '../constants/config';


@Injectable()
export class UserService {
  private apiUrl: string;
  private _authData: null;
  private header = new BehaviorSubject({isLogin: false});

  constructor(private http: HttpClient) {
    this.apiUrl = Config.apiUrl();
  }


  setAuthData(user): void {
    this._authData = user;
    localStorage.AuthUser = JSON.stringify(user);
  }


  getUserByLogin(login, password) {
    return this.http.post(`${this.apiUrl}account/token`, {login: login, password: password});
  }

  getHeader() {
    return this.header;
  }
}
