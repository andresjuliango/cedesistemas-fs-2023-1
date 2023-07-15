import { Injectable } from "@angular/core";
import { Usergateway } from "../gateway/usergateway";
import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../../user";

@Injectable({
    providedIn: 'root'
})
export class Userusecase {
    constructor(private _usergateway: Usergateway) { }
    login(email: string, password: string) : Observable<Token> {
        //en esta parte es donde aplico la logica de mi aplicación
        return this._usergateway.login(email, password);
    }

    register(email: string, password: string, phone: string, address: string, name: string): Observable<User>{
      return this._usergateway.register(email, password, phone, address, name)
    }

}
