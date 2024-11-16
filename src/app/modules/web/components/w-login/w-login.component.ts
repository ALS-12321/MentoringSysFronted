import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-login',
  templateUrl: './w-login.component.html',
  styleUrl: './w-login.component.css'
})
export class WLoginComponent {

  showAlumnoPassword = false;
  showTutorPassword = false;

  alumnoForm!: FormGroup;
  tutorForm!: FormGroup;

  selectedTabIndex = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // Inicializar formularios para alumno y tutor
    this.alumnoForm = this.fb.group({
      alumnoUsuario: ['', Validators.required],
      alumnoContrasena: ['', Validators.required]
    });

    this.tutorForm = this.fb.group({
      tutorUsuario: ['', Validators.required],
      tutorContrasena: ['', Validators.required]
    });
  }

  // Cambia el índice de pestaña seleccionado
  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }

  // Método de inicio de sesión para Alumno
  loginAlumno() {
    if (this.alumnoForm.valid) {
      const { alumnoUsuario, alumnoContrasena } = this.alumnoForm.value;
      console.log('Inicio de sesión de Alumno', alumnoUsuario, alumnoContrasena);
      this.router.navigate(['/alumno']);
      // Lógica de autenticación
    }
  }

  // Método de inicio de sesión para Tutor
  loginTutor() {
    if (this.tutorForm.valid) {
      const { tutorUsuario, tutorContrasena } = this.tutorForm.value;
      console.log('Inicio de sesión de Tutor', tutorUsuario, tutorContrasena);
      this.router.navigate(['/tutor']);
      // Lógica de autenticación
    }
  }

}
