import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TAgregarCursoComponent } from '../t-agregar-curso/t-agregar-curso.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TModalAgregaHorarioComponent } from '../t-modal-agrega-horario/t-modal-agrega-horario.component';

@Component({
  selector: 'app-t-agregar-curso-tutor',
  templateUrl: './t-agregar-curso-tutor.component.html',
  styleUrl: './t-agregar-curso-tutor.component.css'
})
export class TAgregarCursoTutorComponent {

  cursosArray: any[] = [
    {
      "id": 1,
      "nombre": "Introducción a Matemáticas",
      "descripcion": "Curso básico para aprender los fundamentos de las matemáticas.",
      "duracion": 20,
      "nivel": "Básico",
      "precio": 50.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 2,
      "nombre": "Álgebra Lineal Avanzada",
      "descripcion": "Curso intensivo de álgebra lineal para estudiantes avanzados.",
      "duracion": 40,
      "nivel": "Avanzado",
      "precio": 120.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 3,
      "nombre": "Cálculo Diferencial",
      "descripcion": "Aprende los conceptos esenciales del cálculo diferencial.",
      "duracion": 30,
      "nivel": "Intermedio",
      "precio": 80.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 4,
      "nombre": "Estadística Aplicada",
      "descripcion": "Curso práctico de estadística para profesionales.",
      "duracion": 25,
      "nivel": "Intermedio",
      "precio": 90.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 5,
      "nombre": "Programación en Python",
      "descripcion": "Curso introductorio para aprender programación en Python.",
      "duracion": 50,
      "nivel": "Básico",
      "precio": 70.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 6,
      "nombre": "Machine Learning Básico",
      "descripcion": "Introducción al aprendizaje automático y sus aplicaciones.",
      "duracion": 60,
      "nivel": "Básico",
      "precio": 150.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 7,
      "nombre": "Redacción Académica",
      "descripcion": "Curso para mejorar tus habilidades de escritura académica.",
      "duracion": 15,
      "nivel": "Básico",
      "precio": 30.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 8,
      "nombre": "Geometría para Ingenieros",
      "descripcion": "Curso especializado en geometría aplicada a la ingeniería.",
      "duracion": 35,
      "nivel": "Avanzado",
      "precio": 100.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 9,
      "nombre": "Economía para Todos",
      "descripcion": "Conceptos básicos de economía explicados de forma sencilla.",
      "duracion": 20,
      "nivel": "Básico",
      "precio": 50.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    },
    {
      "id": 10,
      "nombre": "Gestión de Proyectos",
      "descripcion": "Curso práctico de gestión de proyectos con herramientas modernas.",
      "duracion": 40,
      "nivel": "Intermedio",
      "precio": 120.00,
      "created_at": "2024-11-16",
      "updated_at": "2024-11-16"
    }
  ]
  currentCurso : any = {    
  }
  formAgregarCursoTutor: FormGroup;

  listCursoProfesor: any[] = [];

  constructor(
    private dialog: MatDialog,
    private _fb: FormBuilder,
  ){

    this.formAgregarCursoTutor = this._fb.group({
      curso: ['', Validators.required],
      curso_id: 1,
      total_cupos: [0 , Validators.required],
    });

  }

  setCurso(values : any){
    this.currentCurso = values;
    console.log("this.currentCurso");
    console.log(this.currentCurso);
  }

  agregarCurso(values: any) {

    let cursoData : any = {
      cursoId : this.currentCurso['id'],
      curso : this.currentCurso,
      horarios: [],
      alumnosInscritos: 0,
      totalCupos: values.total_cupos,
    }
    console.log("cursoData");
    console.log(cursoData);
    this.listCursoProfesor.push(cursoData); 
    console.log("this.listCursoProfesor");
    console.log(this.listCursoProfesor);

    this.formAgregarCursoTutor.reset();
  }

  openModalAgregarCurso() {    
    
    this.dialog.open(TAgregarCursoComponent,{
      height: 'auto',
      width: '600px',
      disableClose: false,
      data: {                
      }
    });
  }

  openModalAgregarHorario(values: any): void {
    const dialogRef = this.dialog.open(TModalAgregaHorarioComponent, {
      width: '700px',
      maxHeight: '90vh',
      data: {
        cursoData: values,
      },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Resultado del modal:', result);
        values.horarios.push(result);
      }
    });
  }

}
