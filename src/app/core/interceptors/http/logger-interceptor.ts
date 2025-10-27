import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class HttpLongerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        'X-App-Name': 'UserHub'
      }
    });

    console.log('Enviando solicitud HTTP...', modifiedReq);
    return next.handle(modifiedReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Respuesta HTTP recibida:', {
            url: modifiedReq.url,
            status: event.status,
            body: event.body
          });
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Error 404: Recurso no encontrado', error.url
          );
        } else if (error.status === 500) {
          console.error('Error 500: Error interno del servidor');

        } else {
          console.error('Error HTTP:', error.status, error.message);
        }
        return throwError(() => error);
      })
    );
  }

}