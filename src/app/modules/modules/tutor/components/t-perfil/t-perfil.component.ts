import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-perfil',
  templateUrl: './t-perfil.component.html',
  styleUrl: './t-perfil.component.css'
})
export class TPerfilComponent {

  perfilForm: FormGroup;
  especialidadForm: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: ['Mariel Torres'],
      email: ['Marilu2020@hotmail.com'],
      password: [''],
      fecha_nacimiento: ['2002-04-04'],
      fotoPerfil: ['foto1.jpg'],
      preferencias: ['Preferencias A'],
      fondoOscuro: [true]
    });

    this.especialidadForm = this.fb.group({
      especialidad: ['', Validators.required],
      tarifa: [0, Validators.required],
      esParticular: [false, Validators.required],
    });

    
  }

  onSubmit() {
    if (this.perfilForm.valid) {
      console.log(this.perfilForm.value);
      // Aquí puedes realizar la llamada PUT para actualizar los datos del perfil
    }
  }

  

}
