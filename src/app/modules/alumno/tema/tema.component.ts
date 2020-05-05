import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/data/tema';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {
  tema: Tema

  constructor(private router: Router, private route: ActivatedRoute,
    private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.tema = new Tema()
    this.getTema(this.route.snapshot.paramMap.get('asignatura'), this.route.snapshot.paramMap.get('idTema'))
  }

  async getTema(asignatura: string, tema: string){
    this.tema = await this.asignaturasService.getTema(asignatura, tema)
  }

}
