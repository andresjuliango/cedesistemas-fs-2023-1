import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y 1 minuscula' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y 1 minuscula' }
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router,
    private _userUseCase: Userusecase) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
      confirmPassword: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
    })
  }


  public get campos() {
    return this.registerForm.controls
  }

  register(){
    if (this.registerForm.valid) {


      var email = this.registerForm.controls['email'].value;
      var password = this.registerForm.controls['password'].value;
      var phone = '12345'//this.registerForm.controls['phone'].value;
      var address = 'Medellín'//this.registerForm.controls['address'].value;
      var name = this.registerForm.controls['name'].value;
      var confirmPassword = this.registerForm.controls['confirmPassword'].value;

      if (confirmPassword != password){
        alert('Password y Confirmación de Password no son iguales');
      }
      else{
        //console.log(email, password, phone, address, name);

        this._userUseCase.register(email, password, phone, address, name).subscribe((response : any) => {

          if (response.user != '')
          {
            Swal.fire({
              title: 'Usuario Creado',
              text: `Usuario ${response.user.name} ya se encuentra disponible`,
              icon: 'success',
              timer: 2000
            })
            this.router.navigate(['/fullscreen/login']);
          }
          else
          {
            Swal.fire({
              title: 'Advertencia',
              text: 'Usuario no pudo ser creado',
              icon: 'info'
            })
          }
        }
        )

      }


    }
    else {
      alert('Este formulario no es valido');
    }
  }
}
