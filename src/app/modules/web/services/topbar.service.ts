import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  constructor() { }

  menu = [
    { 
      title: 'Inicio',
      route: 'inicio',
      icon: 'fa-solid fa-house',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { 
      title: 'Iniciar Sesión',
      route: 'login',
      icon: 'fa-solid fa-arrow-right-to-bracket',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Registrarse',
      route: 'registro',
      icon: 'fa-solid fa-user-penS',
      active: false,
      type: 'dropdown',
      children:[]
    }
  ]
}
