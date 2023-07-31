import { Injectable } from "@angular/core";
import { ClothesGateway } from "../gateway/clothesgateway";
import { Observable } from "rxjs";
import { Clothes } from "../clothes";

@Injectable({
  providedIn: 'root'
})
export class Clothesusecase {
  constructor(private _clothesGateway: ClothesGateway){}

  getClothes(): Observable<Clothes>{
    //Lógica de aplicacion, ej: primero las de promocion, o de un color especifico
    return this._clothesGateway.getClothes();
  }

  getProductDetail(id:string): Observable<Clothes>{
    return this._clothesGateway.getProductDetail(id);
  }
}
