import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:8080/curso';  // Cambia el puerto si es necesario

  constructor(private http: HttpClient) { }

  // Método para registrar un curso
  registrarCurso(curso: Curso): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.apiUrl}/registrarCursoGlobal`, curso, { headers });
  }
  
}
