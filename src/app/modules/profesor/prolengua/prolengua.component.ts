import { Component, OnInit } from "@angular/core";
import { Asignatura } from "src/app/data/asignatura";
import { AsignaturasService } from "src/app/services/asignaturas.service";
import Swal from "sweetalert2";
import { Tema } from "src/app/data/tema";

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
  onDeleteTema(datos: Asignatura) {
    console.log(datos);
    Swal.fire({
      title: "¿Esta Seguro?",
      text: "Se eliminara para siempre",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.value) {
        let result = this.asignaturasService.deleteTemasByAsignatura(datos);
        if (result) {
          Swal.fire("Eliminado", "El tema ha sido eliminado", "success");
        } else {
          Swal.fire("se ha producido un error");
        }
      }
    });
  }
}
