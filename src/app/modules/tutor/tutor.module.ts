import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TMainComponent } from './components/t-main/t-main.component';
import { TAgregarCursoComponent } from './components/t-agregar-curso/t-agregar-curso.component';
import { TPerfilComponent } from './components/t-perfil/t-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { TAgregarCursoTutorComponent } from './components/t-agregar-curso-tutor/t-agregar-curso-tutor.component';
import { TModalAgregaHorarioComponent } from './components/t-modal-agrega-horario/t-modal-agrega-horario.component';


@NgModule({
  declarations: [
    TMainComponent,
    TModalAgregaHorarioComponent,
    TAgregarCursoComponent,
    TAgregarCursoTutorComponent,
    TPerfilComponent,
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
    NgxSpinnerModule,
    
    ReactiveFormsModule,

    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    AsyncPipe,
    MatBadgeModule,
    MatStepperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TutorModule { }
