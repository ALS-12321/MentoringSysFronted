import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AModalHorariosComponent } from '../a-modal-horarios/a-modal-horarios.component';
import { AModalEnviarResenaComponent } from '../a-modal-enviar-resena/a-modal-enviar-resena.component';

@Component({
  selector: 'app-a-inscripciones',
  templateUrl: './a-inscripciones.component.html',
  styleUrl: './a-inscripciones.component.css'
})
export class AInscripcionesComponent {

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

  cursosSuscritos: any[] = [
    {
        "cursoId": 2,
        "curso": {
            "id": 2,
            "nombre": "Álgebra Lineal Avanzada",
            "descripcion": "Curso intensivo de álgebra lineal para estudiantes avanzados.",
            "duracion": 40,
            "nivel": "Avanzado",
            "precio": 120,
            "created_at": "2024-11-16",
            "updated_at": "2024-11-16"
        },
        "horarios": [],
        "resenas": [],
        "alumnosInscritos": 15,
        "totalCupos": 40
    },
    {
        "cursoId": 8,
        "curso": {
            "id": 8,
            "nombre": "Geometría para Ingenieros",
            "descripcion": "Curso especializado en geometría aplicada a la ingeniería.",
            "duracion": 35,
            "nivel": "Avanzado",
            "precio": 100,
            "created_at": "2024-11-16",
            "updated_at": "2024-11-16"
        },
        "horarios": [],
        "resenas": [],
        "alumnosInscritos": 45,
        "totalCupos": 60
    }
  ]

  constructor(
    private dialog: MatDialog,
    private _fb: FormBuilder,
  ){
    
  }

  openModalAgregarCurso(values: any) {    
    
    const dialogRef = this.dialog.open(AModalHorariosComponent,{
      height: 'auto',
      width: '400px',
      disableClose: false,
      data: {      
        cursoData: values,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo se cerró');      
    });
  }  

  openModalAgregarResena(values: any) {    
    
    const dialogRef = this.dialog.open(AModalEnviarResenaComponent,{
      height: 'auto',
      width: '400px',
      disableClose: false,
      data: {      
        cursoData: values,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo se cerró');
      values.resenas.push(result);      
    });
  }  

}
