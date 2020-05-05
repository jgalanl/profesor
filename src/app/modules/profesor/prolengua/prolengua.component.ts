import { Component, OnInit } from "@angular/core";
import { Asignatura } from "src/app/data/asignatura";
import { AsignaturasService } from "src/app/services/asignaturas.service";
// import { Swal } from "sweetalert2"; REVISAR
import { Tema } from "src/app/data/tema";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-prolengua",
  templateUrl: "./prolengua.component.html",
  styleUrls: ["./prolengua.component.scss"],
})
export class ProlenguaComponent implements OnInit {
  asignatura: Asignatura;

  constructor(
    private asignaturasService: AsignaturasService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.asignatura = new Asignatura();
    this.getTema();
  }
  async getTema() {
    this.asignatura = await this.asignaturasService.getTemasByAsignatura(
      "Lengua"
    );
  }
<<<<<<< HEAD
  onDeleteTema(datos: number) {
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
        if (result) {
          Swal.fire("Eliminado", "El tema ha sido eliminado", "success");
        } else {
          Swal.fire("se ha producido un error");
        }
      }
    });
  }

  onAddTema() {
    this.openDialog();
  }

  openDialog(): void {
    let config: MatDialogConfig = {
      panelClass: "myDialogClass",
    };
    const dialogRef = this.dialog.open(ModalComponent, config);
    
  }
=======
  // onDeleteTema(datos: Asignatura) {
  //   console.log(datos);
  //   Swal.fire({
  //     title: "¿Esta Seguro?",
  //     text: "Se eliminara para siempre",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Eliminar",
  //   }).then((result) => {
  //     if (result.value) {
  //       let result = this.asignaturasService.deleteTemasByAsignatura(datos);
  //       if (result) {
  //         Swal.fire("Eliminado", "El tema ha sido eliminado", "success");
  //       } else {
  //         Swal.fire("se ha producido un error");
  //       }
  //     }
  //   });
  // }
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
}
