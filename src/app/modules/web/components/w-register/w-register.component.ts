import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-w-register',
  templateUrl: './w-register.component.html',
  styleUrl: './w-register.component.css'
})
export class WRegisterComponent {

  registerForm: FormGroup;
    showPassword = false;

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            username: ['', Validators.required],
            password: ['', Validators.required],
            fecha_nacimiento: ['', Validators.required],
            tipoUsuario: ['E', Validators.required]
        });
    }

  onRegister() {
      if (this.registerForm.valid) {
          console.log(this.registerForm.value);
          // Aquí podrías realizar la solicitud HTTP para registrar el usuario
      }
  }

}
