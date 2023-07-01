import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  Subject: any = ['Servicio General de Atención al Cliente', 'Sugerencias', 'Soporte de producto'];

  contactanosForm!: FormGroup;
  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    subject: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    message : [
      { type: 'required', message: 'Este campo es requerido' }
    ]

  }

  changeSubject(e: any) {
    this.subject?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get subject() {
    return this.contactanosForm.get('subject');
  }

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.contactanosForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      subject: ['', [
        Validators.required
        ]
      ],
      message: ['', [
        Validators.required,
        ]
      ]
    })
  }

  public get campos() {
    return this.contactanosForm.controls
  }

  contactanos() {

    if (this.contactanosForm.valid){
      alert('El mensaje fue enviado con éxito')
      this.router.navigate(['/']);
    }
    else {
      alert('Mensaje no enviado, formulario no válido')
    }

  }

}
