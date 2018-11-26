import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector,
                private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(UserService);
        if (auth.isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `bearer ${auth.authData.token}`
                }
            });
        }
        return next.handle(request);
    }

    errorHandler(auth: UserService, err: any) {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              auth.resetAuthData();
              this.router.navigate(['login']);
            }
        }
    }
}
