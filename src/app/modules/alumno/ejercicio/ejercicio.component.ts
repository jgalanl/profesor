import { Component, OnInit, Inject } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Pregunta } from 'src/app/data/pregunta';
import { Opcion } from 'src/app/data/opcion';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  puntos: number;
}

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss']
})
export class EjercicioComponent implements OnInit {
  preguntas: Array<any>
  preguntaActual: Pregunta
  correct: Boolean
  puntos: number = 0
  tiempo: number = 60
  interval

  constructor(private router: Router, private asignaturasService: AsignaturasService,
     public dialog: MatDialog) { }

  ngOnInit() {
    this.getPreguntas()
  }

  async getPreguntas(){
    this.preguntas = await this.asignaturasService.getPreguntas()
    this.preguntaActual = this.preguntas.pop()
    console.log(this.preguntaActual)
    this.start()
  }

  start(){
    this.interval = setInterval(() => {
      this.tiempo = this.tiempo - 1
      if(this.tiempo == 0){
        console.log("Se acabo el tiempo!")
        clearInterval(this.interval)
        this.openDialog()
      }
    }, 1000)
    
  }

  checkOpcion(opcion: Opcion){
    if(opcion.correcta){
      this.correct = true
      this.puntos = this.puntos + 10
      let timeout = setTimeout(() => {
        this.correct = undefined  
        clearTimeout(timeout)
      },1500)
    }
    else{
      this.correct = false
      let timeout = setInterval(() => {
        this.correct = undefined  
        clearTimeout(timeout)
      },1500)
    }
    if(this.preguntas.length > 0){
      this.preguntaActual = this.preguntas.pop()
    }
    else {
      console.log("Has contestado a todas las preguntas!")
      clearInterval(this.interval)
      this.openDialog()
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {puntos: this.puntos}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      //Si se reinicia volver a obtener preguntas
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRepetir(): void {
    this.dialogRef.close()

  }

}
