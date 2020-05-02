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
      { path: "lengua/tema/:id", component: TemaComponent },
      { path: "lengua/tema/:id/ejercicio/:id", component: EjercicioComponent },
      { path: "resultados", component: ResultadosComponent },
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
