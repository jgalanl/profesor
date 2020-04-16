import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/data/asignatura';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit {

  private asignaturas: Array<Asignatura> = []

  constructor(private location: Location, private us: UsuariosService) { }

  ngOnInit() {
    //Servicio que cargue las asignaturas del usurio
    console.log(this.location.getState());
    this.us.getAsignaturaByEmail("email")
  }

}
