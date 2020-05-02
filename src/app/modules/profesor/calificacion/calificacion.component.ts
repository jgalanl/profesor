import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-calificacion",
  templateUrl: "./calificacion.component.html",
  styleUrls: ["./calificacion.component.scss"],
})
export class CalificacionComponent implements OnInit {
  displayedColumns: string[] = [
    "nombre",
    "nivel",
    "puntos_actuales",
    "puntos_finales",
    "editar",
  ];
  dataSource = new MatTableDataSource();
  constructor(private us: UsuariosService) {}

  ngOnInit() {
    console.log(history.state);

    this.us.getAllDatos().subscribe((datos) => (this.dataSource.data = datos));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
