import { Component, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/data/resultado';
import { ResultadosService } from 'src/app/services/resultados.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-resultados-asignatura',
  templateUrl: './resultados-asignatura.component.html',
  styleUrls: ['./resultados-asignatura.component.scss']
})
export class ResultadosAsignaturaComponent implements OnInit {
  public resultados: Resultado[]
  dataSource = new MatTableDataSource();
  public displayedColumns = ['tema', 'ejercicio', 'aciertos', 'fallos', 'puntos', 'fecha'];

  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:false}) sort: MatSort;

  constructor(private auth: AuthService, private resultadoService: ResultadosService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getResultados(this.auth.user.email, this.route.snapshot.paramMap.get('asignatura'))
  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort;
  }

  public async getResultados(email: string, asignatura: string){
    this.resultados = await this.resultadoService.getResultadosByAsignatura(email, asignatura)
    this.dataSource.data = this.resultados
  }

}
