import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './modules/log-in/log-in.component'
import { HomeAlumnoComponent } from './modules/alumno/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './modules/profesor/home-profesor/home-profesor.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'login' },
  { path: 'login' , component: LogInComponent },
  { path: 'home-alumno', component: HomeAlumnoComponent },
  { path: 'home-profesor', component: HomeProfesorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
