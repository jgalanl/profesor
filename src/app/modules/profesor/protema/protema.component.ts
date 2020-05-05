import { Component, OnInit } from "@angular/core";
import { Tema } from "src/app/data/tema";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-protema",
  templateUrl: "./protema.component.html",
  styleUrls: ["./protema.component.scss"],
})
export class ProtemaComponent implements OnInit {
  tema: Tema;
  constructor(
    private router: Router,
    private asignaturasService: AsignaturasService
  ) {}

  ngOnInit() {
    this.tema = new Tema();
    this.getTema();
  }
  async getTema() {
<<<<<<< HEAD
    this.tema = await this.asignaturasService.getTemapro();
    console.log(this.tema);
=======
    // this.tema = await this.asignaturasService.getTema();
    // console.log(this.tema);
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
  }
  goToEjercicios() {
    this.router.navigate([this.router.url + "/ejercicios"]);
  }
}
