import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './modules/log-in/log-in.component'
import { HomeAlumnoComponent } from './modules/alumno/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './modules/profesor/home-profesor/home-profesor.component';
import { SplashComponent } from './modules/splash/splash.component';
import { LenguaComponent } from './modules/alumno/lengua/lengua.component';
import { AsignaturasComponent } from './modules/alumno/asignaturas/asignaturas.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: '/splash' },
  { path: 'splash', component: SplashComponent, data: {animation: 'Splash' }},
  { path: 'login' , component: LogInComponent, data: {animation: 'Login' }},
  { path: 'home-alumno', component: HomeAlumnoComponent, children: [
    { path: '', component: AsignaturasComponent},
    { path: 'asignaturas', component: AsignaturasComponent},
    { path: 'lengua', component: LenguaComponent}
  ]},
  { path: 'home-profesor', component: HomeProfesorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
