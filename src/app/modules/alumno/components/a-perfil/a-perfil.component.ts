import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-a-perfil',
  templateUrl: './a-perfil.component.html',
  styleUrl: './a-perfil.component.css'
})
export class APerfilComponent {

  perfilForm: FormGroup;

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
  }

  onSubmit() {
    if (this.perfilForm.valid) {
      console.log(this.perfilForm.value);
      // Aquí puedes realizar la llamada PUT para actualizar los datos del perfil
    }
  }

}
