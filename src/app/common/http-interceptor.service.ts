import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      this.deleteCookies();
        this.router.navigateByUrl('admin');
        // if you've caught / handled the error, you don't want to rethrow it unless
        // you also want downstream consumers to have to handle it as well.
        return of(err.message);
    }
    return throwError(err);
  }

  intercept(req:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>> {
    req = req.clone({
      url: AppConstants.API_HOME_URL + req.url,
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest'),
      withCredentials:true
    });
    if(req.url != AppConstants.API_HOME_URL + AppConstants.LOGIN)
    return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
  
  else
    return next.handle(req);
  }

  deleteCookies(){
    localStorage.clear();
  }


  constructor(private router: Router) { }
}
