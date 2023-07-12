import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  constructor(private http:HttpClient) {
    super();
  }

  login(email : string, password : string) : Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/auth/login',
      {email: email, password: password}
      )
  }
}
