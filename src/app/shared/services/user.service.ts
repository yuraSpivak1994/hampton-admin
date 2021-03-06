import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Config} from '../constants/config';
import {Router} from '@angular/router';


@Injectable()
export class UserService {
  private apiUrl: string;
  private _authData: any;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = Config.apiUrl();
    this.initAuthorization();
  }
  setAuthData(user): void {
    this._authData = user;
    localStorage.AuthUser = JSON.stringify(user);
    this.redirectToMain();
  }

  redirectToMain() {
    this.router.navigate(['main/bio']);
  }


  logOut(): void {
    this.resetAuthData();
    this.router.navigate(['login']);
  }

  resetAuthData(): void {
    this._authData = undefined;
    delete localStorage.AuthUser;
  }

  getUserByLogin(login, password) {
    return this.http.post(`${this.apiUrl}account/token`, {login: login, password: password});
  }

  getBioContent() {
    return this.http.get(`${this.apiUrl}biography`);
  }

  updateBio(clonedData) {
    clonedData = {
      ...clonedData
    };
    return this.http.put(`${this.apiUrl}biography`, clonedData);
  }

  getTextContent() {
    return this.http.get(`${this.apiUrl}text`);
  }

  updateText(clonedData) {
    clonedData = {
      ...clonedData
    };
    return this.http.put(`${this.apiUrl}text`, clonedData);
  }

  getPortfolioContent(pageActual) {
    return this.http.get(`${this.apiUrl}portfolio/all/?skip=0&limit=${pageActual}`);
  }

  addPortfolio(portfolio) {
   return this.http.post(`${this.apiUrl}portfolio`, portfolio);
  }
  updatePortfolio(portfolio) {
    return this.http.put(`${this.apiUrl}portfolio`, portfolio);
  }
  deletePortfolioItem(id) {
    return this.http.delete(`${this.apiUrl}portfolio?portfolioId=${id}`);
  }
  getPolicy() {
    return this.http.get(`${this.apiUrl}policy`);
  }
  updatePolicy(policy) {
    return this.http.put(`${this.apiUrl}policy`, policy);
  }


  initAuthorization(): void {
    const userInfo = localStorage.AuthUser;
    this._authData = userInfo ? JSON.parse(userInfo) : null;
  }

  get isLoggedIn() {
    return !!this._authData;
  }

  get authData() {
    return this._authData;
  }

}
