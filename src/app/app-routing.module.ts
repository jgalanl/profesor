import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./modules/log-in/log-in.component";
import { HomeAlumnoComponent } from "./modules/alumno/home-alumno/home-alumno.component";
import { HomeProfesorComponent } from "./modules/profesor/home-profesor/home-profesor.component";
import { SplashComponent } from "./modules/splash/splash.component";
import { LenguaComponent } from "./modules/alumno/lengua/lengua.component";
import { AsignaturasComponent } from "./modules/alumno/asignaturas/asignaturas.component";
import { TemaComponent } from "./modules/alumno/tema/tema.component";
import { EjercicioComponent } from "./modules/alumno/ejercicio/ejercicio.component";
import { ProasignaturaComponent } from "./modules/profesor/proasignatura/proasignatura.component";
import { ProlenguaComponent } from "./modules/profesor/prolengua/prolengua.component";
import { ProtemaComponent } from "./modules/profesor/protema/protema.component";
import { EditemaComponent } from "./modules/profesor/editema/editema.component";
import { ResultadosComponent } from "./modules/alumno/resultados/resultados.component";
import { ProejercicioComponent } from "./modules/profesor/proejercicio/proejercicio.component";
import { CalificacionComponent } from "./modules/profesor/calificacion/calificacion.component";
import { ListaclasesComponent } from "./modules/profesor/listaclases/listaclases.component";
<<<<<<< HEAD
import { ResultadosAsignaturaComponent } from "./modules/alumno/resultados-asignatura/resultados-asignatura.component";
import { RecompensasComponent } from "./modules/alumno/recompensas/recompensas.component";
import { ModalComponent } from "./modules/profesor/modal/modal.component";
=======
import { ResultadosAsignaturaComponent } from './modules/alumno/resultados-asignatura/resultados-asignatura.component';
import { RecompensasComponent } from './modules/alumno/recompensas/recompensas.component';

>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/splash" },
  { path: "splash", component: SplashComponent, data: { animation: "Splash" } },
  { path: "login", component: LogInComponent, data: { animation: "Login" } },
  {
    path: "home-alumno",
    component: HomeAlumnoComponent,
    children: [
      { path: "", component: AsignaturasComponent },
      { path: "asignaturas", component: AsignaturasComponent },
      { path: "lengua", component: LenguaComponent },
      { path: "resultados", component: ResultadosComponent },
      { path: "asignaturas/:asignatura", component: LenguaComponent },
<<<<<<< HEAD
      {
        path: "asignaturas/:asignatura/tema/:idTema",
        component: TemaComponent,
      },
      {
        path: "asignaturas/:asignatura/tema/:idTema/ejercicio/:idEjercicio",
        component: EjercicioComponent,
      },
      { path: "resultados", component: ResultadosComponent },
      {
        path: "resultados/:asignatura",
        component: ResultadosAsignaturaComponent,
      },
      { path: "recompensas", component: RecompensasComponent },
=======
      { path: "asignaturas/:asignatura/tema/:idTema", component: TemaComponent },
      { path: "asignaturas/:asignatura/tema/:idTema/ejercicio/:idEjercicio", component: EjercicioComponent },
      { path: "resultados", component: ResultadosComponent },
      { path: "resultados/:asignatura", component: ResultadosAsignaturaComponent},
      { path: "recompensas", component: RecompensasComponent}
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
    ],
  },
  {
    path: "home-profesor",
    component: HomeProfesorComponent,
    children: [
      { path: "", component: ProasignaturaComponent },
      { path: "proasignaturas", component: ProasignaturaComponent },
      { path: "prolengua", component: ProlenguaComponent },
      { path: "prolengua/protema/:id", component: ProtemaComponent },
      { path: "prolengua/editema/:id", component: EditemaComponent },
      {
        path: "prolengua/protema/:id/proejercicio/:id",
        component: ProejercicioComponent,
      },
      { path: "calificacion", component: CalificacionComponent },
      { path: "listaclases", component: ListaclasesComponent },
<<<<<<< HEAD
      { path: "modal", component: ModalComponent },
=======
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
