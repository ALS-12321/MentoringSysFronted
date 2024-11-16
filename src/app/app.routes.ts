import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'web', pathMatch: 'full' },
    { path: 'alumno', loadChildren: () => import('./modules/alumno/alumno.module').then(m => m.AlumnoModule)},
    { path: 'tutor', loadChildren: () => import('./modules/tutor/tutor.module').then(m => m.TutorModule)},
    { path: 'web', loadChildren: () => import('./modules/web/web.module').then(m => m.WebModule)},
];
