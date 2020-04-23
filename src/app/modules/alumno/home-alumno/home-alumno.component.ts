import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Asignatura } from 'src/app/data/asignatura';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Location } from '@angular/common';
import { User } from 'src/app/data/user';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  // private asignaturas: Array<Asignatura> = []
  private user: User
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private us: UsuariosService, changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher) { 
    this.user = new User()
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  
  ngOnInit() {
    console.log(history.state)
    this.user.email = history.state.email
    this.user.nombre = history.state.nombre
    this.user.rol = history.state.rol
    // this.cargarAsignaturas()
    // this.user.nombre = history.state.nombre
    //Servicio que cargue las asignaturas del usurio
    // console.log(this.location.getState());
    // this.us.getAsignaturaByEmail("email")
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // async cargarAsignaturas() {
  //   await this.us.getAsignaturaByEmail(this.user.email)
  // }


}
