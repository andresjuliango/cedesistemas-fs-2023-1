import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { GenericService } from '../helpers/generic.service';
import { environment } from 'src/environments/environment';
import { ClothesGateway } from 'src/app/domain/models/Clothes/gateway/clothesgateway';

@Injectable({
  providedIn: 'root'
})
export class MoreuseClothesService extends ClothesGateway{

  private _url = environment.urlService;
  constructor(private genericService: GenericService) {
    super();
  }

  getClothes(){
    return this.genericService.get<Clothes>(this._url,'clothes')
  }

  getProductDetail(id: string){
    return this.genericService.get<Clothes>(this._url,'clothes/detail')
  }
}
