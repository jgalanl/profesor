import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Tema } from "../../../data/tema";
import Swal from "sweetalert2";
import { AsignaturasService } from "../../../services/asignaturas.service";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

@Component({
  selector: "app-addtema",
  templateUrl: "./addtema.component.html",
  styleUrls: ["./addtema.component.scss"],
})
export class AddtemaComponent implements OnInit {
  private image: any;
  constructor(private service: AsignaturasService) {}
  public newTema = new FormGroup({
    titulo: new FormControl("", Validators.required),
    contenido: new FormControl("", Validators.required),
    ejemplos: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  });
  ngOnInit() {}

  async addnewTemas(data: Tema) {
    close();
    if (this.newTema.status) {
      let result = await this.service.savetema(data);
      if (result) {
        window.alert("Datos añadidos correctamente");
      } else {
        window.alert("Error al añadir los datos");
      }
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
    console.log("IMage", this.image);
  }
}
