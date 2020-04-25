import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/data/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-lengua',
  templateUrl: './lengua.component.html',
  styleUrls: ['./lengua.component.scss']
})
export class LenguaComponent implements OnInit {
  asignatura: Asignatura

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.asignatura = new Asignatura()
    this.getTemas()
  }

  async getTemas(){
    this.asignatura = await this.asignaturasService.getTemasByAsignatura("Lengua")
  }

}
