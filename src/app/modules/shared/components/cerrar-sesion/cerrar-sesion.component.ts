import { Component } from '@angular/core';
import { CerrarSesionService } from '../../../web/services/cerrar-sesion.service';

@Component({
  selector: 'app-cerrar-sesion',
  standalone: true,
  imports: [],
  templateUrl: './cerrar-sesion.component.html',
  styleUrl: './cerrar-sesion.component.css'
})
export class CerrarSesionComponent {

  constructor(private cerrarSesionService: CerrarSesionService){
    this.cerrarSesionService.logOutSession();    
  }

}
