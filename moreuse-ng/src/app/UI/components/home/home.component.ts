import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//Se indican los estados del componente OnInit, On Destroy
//Se implementan con interfase
export class HomeComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    setTimeout(function(){
      console.log('Adios')
    },3000);
  }

  ngOnInit(): void {
    this.prueba('');
    console.log(this.name);
  }

  name: string | undefined;

  prueba(name: string){
    if (name == '') {
      this.name = 'Julián Gómez';
    }
    else
    {
      this.name = name;
    }
  }

}
