import { Component, OnInit, Inject } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Pregunta } from 'src/app/data/pregunta';
import { Opcion } from 'src/app/data/opcion';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ResultadosService } from 'src/app/services/resultados.service';
import { Resultado } from 'src/app/data/resultado';
import { UsuariosService } from 'src/app/services/usuarios.service';

export interface DialogData {
  puntos: number
  aciertos: number
  fallos: number
  preguntasFalladas: Array<Pregunta>
}

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {
  preguntas: Array<any>
  preguntasFalladas: Array<Pregunta>
  preguntaActual: Pregunta
  correct: Boolean
  puntos: number = 0
  tiempo: number = 60
  interval
  aciertos: number = 0
  fallos: number = 0

  constructor(private auth:AuthService, private resultadoServie: ResultadosService,
     private router: Router, private location: Location, private route: ActivatedRoute,
     private asignaturasService: AsignaturasService, public dialog: MatDialog, private usr: UsuariosService) { 
       this.preguntasFalladas = new Array<Pregunta>()
     }

  ngOnInit() {
    this.getPreguntas(this.route.snapshot.paramMap.get('asignatura'), this.route.snapshot.paramMap.get('idTema'), 
    this.route.snapshot.paramMap.get('idEjercicio'))
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  async getPreguntas(asignatura: string, tema: string, ejercicio: string){
    this.preguntas = await this.asignaturasService.getPreguntas(asignatura, tema, ejercicio)
    this.preguntaActual = this.preguntas.pop()
    this.start()
  }

  start(){
    this.interval = setInterval(() => {
      this.tiempo = this.tiempo - 1
      if(this.tiempo == 0){
        clearInterval(this.interval)
        this.openDialog()
      }
    }, 1000)
    
  }

  checkOpcion(opcion: Opcion){
    if(opcion.correcta){
      this.correct = true
      this.puntos = this.puntos + 10
      this.aciertos = this.aciertos + 1
      let timeout = setTimeout(() => {
        this.correct = undefined  
        clearTimeout(timeout)
      },1500)
    }
    else{
      this.correct = false
      this.fallos = this.fallos + 1
      opcion.seleccionada = true
      this.preguntasFalladas.push(this.preguntaActual)
      let timeout = setInterval(() => {
        this.correct = undefined  
        clearTimeout(timeout)
      },1500)
    }
    if(this.preguntas.length > 0){
      this.preguntaActual = this.preguntas.pop()
    }
    else {
      clearInterval(this.interval)
      this.openDialog()
      // Almacenar resultados del test
      let resultado: Resultado = {
        usuario: this.auth.user.email,
        aciertos: this.aciertos,
        fallos: this.fallos,
        puntos: this.puntos,
        asignatura: this.route.snapshot.paramMap.get('asignatura'),
        tema: this.route.snapshot.paramMap.get('idTema'),
        ejercicio: this.route.snapshot.paramMap.get('idEjercicio'),
        fecha: new Date().toDateString()
      }
      this.resultadoServie.insertResultado(resultado)
      //Actualizar puntos actuales y totales
      this.usr.updatePuntos(this.auth.user.email, this.puntos)
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {puntos: this.puntos, preguntasFalladas: this.preguntasFalladas,
            aciertos: this.aciertos, fallos: this.fallos}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 0){
        this.location.back()
      }
      else if(result == 1){

      }
      else{
        this.router.navigate(["home-alumno/resultados"])
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, 
     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onVolver(): void {
    this.dialogRef.close(0);
  }

  onRepetir(): void {
    this.dialogRef.close(1)
  }

  onResultados(): void {
    this.dialogRef.close(2)
  }
}
