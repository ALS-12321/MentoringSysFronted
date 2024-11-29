import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-t-modal-agrega-horario',
  templateUrl: './t-modal-agrega-horario.component.html',
  styleUrl: './t-modal-agrega-horario.component.css'
})
export class TModalAgregaHorarioComponent {

  horarioForm: FormGroup;
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  cursoDataF : any = {};
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TModalAgregaHorarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cursoDataF = data.cursoData;
    this.horarioForm = this.fb.group({
      dia: ['', Validators.required],
      aula: ['', [Validators.required, Validators.maxLength(10)]],
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      disponible: [true]
    });
  }

  onSubmit(): void {
    
    if (this.horarioForm.valid) {
      this.dialogRef.close(this.horarioForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
