import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    //llamar a un servicio de validación de token o validar si el token aún es válido y si no es válido tomar acción
    if(!token){
      return next.handle(req);
    }

    const reqHeader = req.clone({
      headers : req.headers.set('Authorization',`Bearer ${token}`)
    });

    return next.handle(reqHeader);
  }

}
