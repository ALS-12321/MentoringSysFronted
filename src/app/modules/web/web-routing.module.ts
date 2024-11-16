import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WMainComponent } from './components/w-main/w-main.component';
import { WHomeComponent } from './components/w-home/w-home.component';
import { WLoginComponent } from './components/w-login/w-login.component';
import { WRegisterComponent } from './components/w-register/w-register.component';

const routes: Routes = [
  {
    path: '', component: WMainComponent,
    children:[
      {path: 'inicio', component: WHomeComponent},
      {path: 'login', component: WLoginComponent},
      {path: 'registro', component: WRegisterComponent},
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
