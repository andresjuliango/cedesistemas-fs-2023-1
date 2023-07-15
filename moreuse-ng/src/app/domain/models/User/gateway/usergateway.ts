import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../../user";

export abstract class Usergateway {
  abstract login(email : string, password : string) : Observable<Token>
  abstract register(email: string, password: string, phone: string, address: string, name: string) : Observable<User>
}

