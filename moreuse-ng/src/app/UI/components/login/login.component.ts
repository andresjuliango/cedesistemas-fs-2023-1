import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo es debe contener por lo menos 8 caracteres' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router
    , /*private http:HttpClient*/
    private _userUseCase : Userusecase) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      password: [
        '', [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ]
    })
  }

  login() {

    //Todas las peticiones en angular son suscripciones. Siempre el suscribe maneja todo lo
    //que retorna
    /*
    this.http.get('https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d').subscribe({
      next: (response) => console.log(response),
      error: (e) => console.error(e),
      complete: () => console.info('complete')


    })

    this.http.post('https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d',{
      email: email,
      pass: password
    }).subscribe({
      next: (response: any) => {localStorage.setItem('message',response.message)},
      error: (e) => console.error(e),
      complete: () => this.router.navigate((['/']))
    })
    */


    /*
    this.http.post('https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d', { email: correo, contraseña: password }).subscribe({
      next: (response: any) => {
        localStorage.setItem('message', response.message)
        console.log(this.loginForm.valid)
    */
    if (this.loginForm.valid) {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      /*
      localStorage.setItem('token',correo + password);
      this.router.navigate(['/']);
      */

      /*
      this.http.post('http://localhost:3000/auth/login',{email: email, password: password}
        //email: 'juan2@gmail.com',
        //password: '1234567'
      ).subscribe({
        next: (response: any) => {
          localStorage.setItem('token',response.token)
      },
        error: (e) => console.error(e),
        complete: () => this.router.navigate(['/'])
      })
      */
      this._userUseCase.login(email, password).subscribe((response : any) => {

      if (response.token != '')
      {
        localStorage.setItem('token',response.token)
        this.router.navigate(['/'])
      }
      else
      {
        alert('Verifique sus credenciales e intente nuevamente')
      }
      })

    }
    else {
      alert('Este formulario no es valido');
    }
  }

  public get campos() {
    return this.loginForm.controls
  }
}
