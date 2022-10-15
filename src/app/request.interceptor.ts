import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // we can't modify the original request but what we do is clone it, and add our modified header to the clone and return it instead.
    const newRequest = request.clone({
      headers: new HttpHeaders({ token: 'asdasdasdas641532121231' }),
    });
    return next.handle(newRequest);
  }
}
