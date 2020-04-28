import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {
  preguntas: Array<any>

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.getPreguntas()
  }

  async getPreguntas(){
    this.preguntas = await this.asignaturasService.getPreguntas()
    console.log(this.preguntas)
  }

}
