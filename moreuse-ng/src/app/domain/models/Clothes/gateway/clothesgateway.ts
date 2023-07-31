import { Observable } from "rxjs";
import { Clothes } from "../clothes";

export abstract class ClothesGateway {
  abstract getClothes() : Observable<Clothes>
  abstract getProductDetail(id:string) : Observable<Clothes>
}
