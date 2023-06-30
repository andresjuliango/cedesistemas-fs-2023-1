import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['email', [
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

    if (this.loginForm.valid) {
      var correo = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      localStorage.setItem('token',correo + password);
      this.router.navigate(['/']);
    }
    else {
      alert('Este formulario no es valido');
    }
  }

  public get campos() {
    return this.loginForm.controls
  }
}
