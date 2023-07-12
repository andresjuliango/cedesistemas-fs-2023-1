import { Observable } from "rxjs";
import { Token } from "../../token";

export abstract class Usergateway {
  abstract login(email : string, password : string) : Observable<Token>
}
