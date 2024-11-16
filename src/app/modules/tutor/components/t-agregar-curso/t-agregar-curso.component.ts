import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-t-agregar-curso',
  templateUrl: './t-agregar-curso.component.html',
  styleUrl: './t-agregar-curso.component.css'
})
export class TAgregarCursoComponent {

  formAgregarCurso: FormGroup;

  especialidadForm!: FormGroup;
  cursoForm: FormGroup;

  constructor(
    private _fbuilder: FormBuilder, 
    private dialog : MatDialog 
    ){

    this.formAgregarCurso = _fbuilder.group({
      totalCupos: ['', Validators.required],

    });

    this.cursoForm = this._fbuilder.group({
      nrc: ['', Validators.required],
      nombre: ['', Validators.required],
      linea_curso: ['', Validators.required],
      electivo: false,
      nro_creditos : [0 , Validators.required],
      ciclo : [0 , Validators.required],
    });
  }

  agregarCursoTutor(){
     
  }

  updateEspecalidad(){
    if (this.especialidadForm.valid) {
      console.log(this.especialidadForm.value);
      // Aquí puedes realizar la llamada PUT para actualizar los datos del perfil
    }
  }

  

}
