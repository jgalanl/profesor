import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/data/tema';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {
  tema: Tema
  constructor(private router: Router, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.tema = new Tema()
    this.getTema()
  }

  async getTema(){
    this.tema = await this.asignaturasService.getTema()
    console.log(this.tema)
  }

  goToEjercicios(){
    this.router.navigate([this.router.url+'/ejercicios'] )
  }

}
