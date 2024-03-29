import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Clothes } from 'src/app/domain/models/Clothes/clothes';
import { Clothesusecase } from 'src/app/domain/models/Clothes/usecase/clothesusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//Se indican los estados del componente OnInit, On Destroy
//Se implementan con interfase
export class HomeComponent implements OnInit, OnDestroy {


  constructor(private http:HttpClient, private clothesUseCase: Clothesusecase) { }

  ngOnDestroy(): void {
    setTimeout(function(){
      console.log('Adios')
    },3000);
  }

  ngOnInit(): void {

    this.getClothes();

    //var message = localStorage.getItem('message') === '' ? 'Sin información' : localStorage.getItem('message')
    //this.prueba(localStorage.getItem('message'));
    //console.log(this.name);
    var token = localStorage.getItem('token');
    var headers;
  }

  name: string | undefined | null;
  token: string | undefined | null;
  clothes! : Clothes;

  prueba(name: string | undefined | null){


    var token = localStorage.getItem('token');
    var headers;
    if (token) {

      headers = new HttpHeaders().set('authorization','Bearer ' + token);
    }
    const options = { headers: headers };

    this.http.get('http://localhost:3000/auth/',options).subscribe({
      next: (response: any) => {
        this.name = response.name;
      },
      error: (e) => console.error(e),
      complete: () => console.info('llamado moreuse')
    })

    if (name == '') {
      this.name = 'Julián Gómez';
    }
    else
    {
      this.name = name;
    }
  }

  getClothes() {
    this.clothesUseCase.getClothes().subscribe((data: Clothes) => {
      this.clothes = data;
      console.log(this.clothes);
    })
  }


}
