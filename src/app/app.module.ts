import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

//Angular material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material";
import { MatSortModule } from "@angular/material";
import { MatSliderModule } from "@angular/material/slider";

import { LogInComponent, LoginDialog } from "./modules/log-in/log-in.component";
import { HomeAlumnoComponent } from "./modules/alumno/home-alumno/home-alumno.component";
import { HomeProfesorComponent } from "./modules/profesor/home-profesor/home-profesor.component";
import { SplashComponent } from "./modules/splash/splash.component";
import { LenguaComponent } from "./modules/alumno/lengua/lengua.component";
import { AsignaturasComponent } from "./modules/alumno/asignaturas/asignaturas.component";
import { TemaComponent } from "./modules/alumno/tema/tema.component";
import {
  EjercicioComponent,
  DialogOverviewExampleDialog,
} from "./modules/alumno/ejercicio/ejercicio.component";
import { ProasignaturaComponent } from "./modules/profesor/proasignatura/proasignatura.component";
import { ProlenguaComponent } from "./modules/profesor/prolengua/prolengua.component";
import { ProtemaComponent } from "./modules/profesor/protema/protema.component";
import { EditemaComponent } from "./modules/profesor/editema/editema.component";

import { ResultadosComponent } from "./modules/alumno/resultados/resultados.component";
import { ProejercicioComponent } from "./modules/profesor/proejercicio/proejercicio.component";
import { CalificacionComponent } from "./modules/profesor/calificacion/calificacion.component";
import { ListaclasesComponent } from "./modules/profesor/listaclases/listaclases.component";
import { ModalComponent } from "./modules/profesor/modal/modal.component";
import { AddtemaComponent } from "./modules/profesor/addtema/addtema.component";
import { ResultadosAsignaturaComponent } from "./modules/alumno/resultados-asignatura/resultados-asignatura.component";
import { RecompensasComponent } from "./modules/alumno/recompensas/recompensas.component";
import { FloorPipe } from "./modules/alumno/recompensas/recompensas.component";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeAlumnoComponent,
    HomeProfesorComponent,
    SplashComponent,
    LenguaComponent,
    AsignaturasComponent,
    TemaComponent,
    EjercicioComponent,
    DialogOverviewExampleDialog,
    LoginDialog,
    ResultadosComponent,
    ProasignaturaComponent,
    ProlenguaComponent,
    ProtemaComponent,
    EditemaComponent,
    ProejercicioComponent,
    CalificacionComponent,
    ListaclasesComponent,
    ResultadosAsignaturaComponent,
    RecompensasComponent,
    ModalComponent,
    AddtemaComponent,
    FloorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
  ],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule],
  entryComponents: [DialogOverviewExampleDialog, LoginDialog, ModalComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
