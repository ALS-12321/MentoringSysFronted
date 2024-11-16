import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TMainComponent } from './components/t-main/t-main.component';
import { TPerfilComponent } from './components/t-perfil/t-perfil.component';
import { CerrarSesionComponent } from '../shared/components/cerrar-sesion/cerrar-sesion.component';
import { TAgregarCursoComponent } from './components/t-agregar-curso/t-agregar-curso.component';
import { TAgregarCursoTutorComponent } from './components/t-agregar-curso-tutor/t-agregar-curso-tutor.component';

const routes: Routes = [
  {
    path: '', component: TMainComponent,
    children:[
      {path: 'perfil', component: TPerfilComponent},
      {path: 'agregar-curso', component: TAgregarCursoTutorComponent},
      {path: 'cerrar-sesion', component: CerrarSesionComponent},
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
