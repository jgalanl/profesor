import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Asignatura } from "../data/asignatura";
import { Tema } from "../data/tema";
import { Pregunta } from "../data/pregunta";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class AsignaturasService {
  private afs: AngularFirestoreCollection<Asignatura>;

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<Asignatura>("Asignaturas");
  }

  public async getTemasByAsignatura(asignatura: string): Promise<Asignatura> {
    return this.afs
      .doc(asignatura)
      .get()
      .toPromise()
      .then((r) => {
        return r.data() as Asignatura;
      });
  }

  public async getTema(): Promise<Tema> {
    return this.afs
      .doc("Lengua")
      .collection("Tema-1")
      .doc("Tema-1")
      .get()
      .toPromise()
      .then((r) => {
        return r.data() as Tema;
      });
  }

  public async getPreguntas(): Promise<Pregunta[]> {
    return new Promise<Pregunta[]>((resolve, reject) => {
      this.firestore
        .collection<any>(
          "Asignaturas/Lengua/Tema-1/Tema-1/Ejercicios/",
          (ref) => ref.where("nivel", "==", "fácil")
        )
        .valueChanges()
        .subscribe((data) => {
          if (data) {
            resolve(data as Pregunta[]);
          } else {
            reject();
          }
        });
    });
  }

  public deleteTemasByAsignatura(tema: Asignatura): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        // this.afs.doc(tema.temas).collection.delete();
        return true;
      } catch (error) {
        reject(false);
      }
    });
  public async getTema(asignatura: string, tema: string): Promise<Tema> {
    return this.afs.doc(asignatura).collection("Tema-"+tema).doc("Tema-"+tema).get().toPromise().then(r => {
      return r.data() as Tema
    })
  }

 public async getPreguntas(asignatura: string, tema: string, ejercicio: string): Promise<Pregunta[]>{
   return new Promise<Pregunta[]>((resolve, reject) => {
     this.firestore.collection<any>('Asignaturas/'+asignatura+'/Tema-'+tema+'/Tema-'+tema+'/Ejercicios/', ref => 
     ref.where('nivel', '==', ejercicio)).valueChanges().subscribe(data => {
       if(data){
        resolve(data as Pregunta[])
       }
       else{
         reject()
       }
      })
    })
  }
}
