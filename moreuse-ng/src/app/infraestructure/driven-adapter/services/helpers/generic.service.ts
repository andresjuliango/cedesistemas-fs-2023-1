import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

//Clase generica para hacer llamados a los servicios
export class GenericService{

  constructor(private http: HttpClient){}

  //Métodos para Peticiones del tipo Rest

  //Recibe tipo de objeto T, url de tipo string, endpoint, parametros y encabezados
  //? indica que son parametros opcionales
  public get<T>(url:string, endpoint:string, params?:string, headers?: HttpHeaders): Observable<any>{

    //const endpointUri = params ? `${endpoint}/?${params}` : `${endpoint}`
    //pipe entrar al observable para gestionar info
    return this.http.get<T>(`${url}/${endpoint}`+(params ?? ''),{headers}).pipe(
      retryWhen( errors => errors.pipe(
        concatMap((result:any) => {
          if (result.code === 504 ) {
            //of lo convierte en observable la salida o retorno
            return of(result);
          }
          return throwError(result)
        }),
        //Tiempo para reintento
        delay(1000),
        //Cantidad de reintentos
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      ))
    )

  }

  // Se pueden implementar todas las validaciones del get anterior
  public post<T>(url:string, endpoint:string, model?:any, headers?:HttpHeaders): Observable<any>{
    return this.http.post<T>(`${url}/${endpoint}`,model, { headers });
  }

  public put<T>(url:string, endpoint:string, model?:any, headers?:HttpHeaders) : Observable<any>{
    return this.http.put<T>(`${url}/${endpoint}`,model, { headers });
  }

  public patch<T>(url:string, endpoint:string, model?:any, headers?:HttpHeaders) : Observable<any>{
    return this.http.patch<T>(`${url}/${endpoint}`,model, { headers });
  }

  public delete<T>(url:string, endpoint:string, params?:string, headers?:HttpHeaders) : Observable<any>{
    return this.http.patch<T>(`${url}/${endpoint}`+(params ?? ''), { headers });
  }

}
