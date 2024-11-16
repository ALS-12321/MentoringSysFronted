import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CerrarSesionService {

  constructor(private router : Router) { 
    this.logOutSession();
  }

  async logOutSession(){
    this.router.navigate(['/web']);
  }
}
