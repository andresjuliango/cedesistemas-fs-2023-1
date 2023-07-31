import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private clothesUseCase: Clothesusecase){}

  clothes! : Clothes;

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {this.getProductDetail(id);}
  }

  getProductDetail(id : string){
    this.clothesUseCase.getProductDetail(id).subscribe((data : Clothes) => {
      console.log(data);

      this.clothes = data;
    })
  }


}
