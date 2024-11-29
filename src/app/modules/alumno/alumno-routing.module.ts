import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMainComponent } from './components/a-main/a-main.component';
import { APerfilComponent } from './components/a-perfil/a-perfil.component';
import { AInscripcionesComponent } from './components/a-inscripciones/a-inscripciones.component';
import { CerrarSesionComponent } from '../shared/components/cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path: '', component: AMainComponent,
    children:[
      {path: 'perfil', component: APerfilComponent,},
      {path: 'inscripciones', component: AInscripcionesComponent},
      {path: 'cerrar-sesion', component: CerrarSesionComponent},
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
