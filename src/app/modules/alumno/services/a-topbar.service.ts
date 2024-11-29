import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ATopbarService {

  menu = [
    { 
      title: 'Perfil',
      route: 'perfil',
      icon: 'fa-solid fa-user',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { 
      title: 'Inscripciones',
      route: 'inscripciones',
      icon: 'fa-solid fa-book',
      active: false,
      type: 'dropdown',
      children:[]
    },
    { title: 'Cerrar Sesión',
      route: 'cerrar-sesion',
      icon: 'fa-solid fa-arrow-right-from-bracket',
      active: false,
      type: 'dropdown',
      children:[]
    }
  ]

  constructor() { }
}
