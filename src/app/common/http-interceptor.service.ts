import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  
  intercept(req:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>> {
    req = req.clone({
      url: AppConstants.API_HOME_URL + req.url
    });
    return next.handle(req);
  }

  constructor() { }
}
