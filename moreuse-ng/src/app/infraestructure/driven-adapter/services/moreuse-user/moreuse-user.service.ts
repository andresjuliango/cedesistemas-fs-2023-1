import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';
import { User } from 'src/app/domain/models/user';
import { GenericService } from '../helpers/generic.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  /*
  constructor(private http:HttpClient) {
    super();
  }


  login(email : string, password : string) : Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/auth/login',
      {email: email, password: password}
      )
  }

  register(email: string, password: string, phone: string, address: string, name: string) : Observable<User>{
    return this.http.post<User>('http://localhost:3000/auth/signup',
    {
      email: email,
      password: password,
      phone: phone,
      address: address,
      name: name
    })
  }
  */

  //Con el consumo de servicios generico se hace así
  private _url = environment.urlService;

  constructor(private genericService: GenericService){
    super();
  }

  login(email : string, password : string) : Observable<Token> {
    return this.genericService.post<Token>(this._url,'auth/login',
      {email: email, password: password}
      )
  }

  register(email: string, password: string, phone: string, address: string, name: string) : Observable<User>{
    return this.genericService.post<User>(this._url,'auth/signup',
    {
      email: email,
      password: password,
      phone: phone,
      address: address,
      name: name
    })
  }

}
