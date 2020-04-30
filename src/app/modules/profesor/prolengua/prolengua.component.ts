import { Component, OnInit } from "@angular/core";
import { Asignatura } from "src/app/data/asignatura";
import { AsignaturasService } from "src/app/services/asignaturas.service";

@Component({
  selector: "app-prolengua",
  templateUrl: "./prolengua.component.html",
  styleUrls: ["./prolengua.component.scss"],
})
export class ProlenguaComponent implements OnInit {
  asignatura: Asignatura;
  constructor(private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.asignatura = new Asignatura();
    this.getTemas();
  }
  async getTemas() {
    this.asignatura = await this.asignaturasService.getTemasByAsignatura(
      "Lengua"
    );
  }
}
