import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-listaclases",
  templateUrl: "./listaclases.component.html",
  styleUrls: ["./listaclases.component.scss"],
})
export class ListaclasesComponent implements OnInit {
<<<<<<< HEAD
  displayedColumns: string[] = ["nombre", "rol", "email", "id"];
=======
  displayedColumns: string[] = ["nombre", "rol", "email"];
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
  dataSource = new MatTableDataSource();
  constructor(private us: UsuariosService) {}

  ngOnInit() {
    console.log(history.state);

<<<<<<< HEAD
    //this.dataSource.data=this.us.getAlumnos();

=======
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
    this.us.getAllDatos().subscribe((datos) => (this.dataSource.data = datos));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
