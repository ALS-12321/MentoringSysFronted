import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-a-modal-horarios',
  templateUrl: './a-modal-horarios.component.html',
  styleUrl: './a-modal-horarios.component.css'
})
export class AModalHorariosComponent {

  dataCurso: any;

  constructor(
    public dialogRef: MatDialogRef<AModalHorariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.dataCurso = data.cursoData;
  }

  

}
