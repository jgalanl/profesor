import { Component, OnInit } from "@angular/core";
import { Tema } from "src/app/data/tema";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import { Router } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: "app-editema",
  templateUrl: "./editema.component.html",
  styleUrls: ["./editema.component.scss"],
})
export class EditemaComponent implements OnInit {
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
=======
    // this.tema = await this.asignaturasService.getTema();
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
    console.log(this.tema);
  }
  goToEjercicios() {
    this.router.navigate([this.router.url + "/ejercicios"]);
  }
}
