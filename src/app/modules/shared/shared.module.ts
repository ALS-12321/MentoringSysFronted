import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from './services/curso.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule 
  ],
  providers: [
    CursoService,
  ],
  exports:[
    HttpClientModule,
  ]
})
export class SharedModule { }
