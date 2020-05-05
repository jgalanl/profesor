import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/data/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lengua',
  templateUrl: './lengua.component.html',
  styleUrls: ['./lengua.component.scss']
})
export class LenguaComponent implements OnInit {
  asignatura: Asignatura

  constructor(private route: ActivatedRoute, private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.asignatura = new Asignatura()
    this.getTemas(this.route.snapshot.paramMap.get('asignatura'))
  }

  async getTemas(asignatura: string){
    this.asignatura = await this.asignaturasService.getTemasByAsignatura(asignatura)
  }

}
