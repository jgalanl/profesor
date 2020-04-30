import { Component, OnInit } from "@angular/core";
import { Tema } from "src/app/data/tema";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import { Router } from "@angular/router";
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
    this.tema = await this.asignaturasService.getTema();
    console.log(this.tema);
  }
}
