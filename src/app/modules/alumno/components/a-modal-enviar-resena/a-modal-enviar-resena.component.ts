import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-a-modal-enviar-resena',
  templateUrl: './a-modal-enviar-resena.component.html',
  styleUrl: './a-modal-enviar-resena.component.css'
})
export class AModalEnviarResenaComponent {
  cursoDataF: any = {};
  resenaForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AModalEnviarResenaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.cursoDataF = data.cursoData;

    this.resenaForm = this.fb.group({
      resena: ['', Validators.required],
      date: new Date(),
    });
  }

  onSubmit(){
    this.dialogRef.close(this.resenaForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
