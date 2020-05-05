import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-listaclases",
  templateUrl: "./listaclases.component.html",
  styleUrls: ["./listaclases.component.scss"],
})
export class ListaclasesComponent implements OnInit {
  displayedColumns: string[] = ["nombre", "rol", "email", "id"];
  dataSource = new MatTableDataSource();
  constructor(private us: UsuariosService) {}

  ngOnInit() {
    console.log(history.state);

    //this.dataSource.data=this.us.getAlumnos();

    this.us.getAllDatos().subscribe((datos) => (this.dataSource.data = datos));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
