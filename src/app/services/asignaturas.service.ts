import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Asignatura } from "../data/asignatura";
import { Tema } from "../data/tema";
import { Pregunta } from "../data/pregunta";

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

<<<<<<< HEAD
  public async getTema(asignatura: string, tema: string): Promise<Tema> {
    return this.afs
      .doc(asignatura)
      .collection("Tema-" + tema)
      .doc("Tema-" + tema)
      .get()
      .toPromise()
      .then((r) => {
        return r.data() as Tema;
      });
  }

  public async getPreguntas(
    asignatura: string,
    tema: string,
    ejercicio: string
  ): Promise<Pregunta[]> {
    return new Promise<Pregunta[]>((resolve, reject) => {
      this.firestore
        .collection<any>(
          "Asignaturas/" +
            asignatura +
            "/Tema-" +
            tema +
            "/Tema-" +
            tema +
            "/Ejercicios/",
          (ref) => ref.where("nivel", "==", ejercicio)
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
  public editartemas() {}

  public async savetema(post: Tema): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.afs.doc(post.titulo).set({
          titulo: post.titulo,
          contenido: post.contenido,
          ejemplos: post.ejercicios,
        });
        resolve(true);
=======
  public deleteTemasByAsignatura(tema: Asignatura): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        // this.afs.doc(tema.temas).collection.delete();
        return true;
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
      } catch (error) {
        reject(false);
      }
    });
  }
<<<<<<< HEAD

  public async getTemapro(): Promise<Tema> {
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
  deleteTemasByAsignatura(model) {
    var pruebas = this.afs.doc("Lengua");
    pruebas.update(model);
    return pruebas.get();
=======
    
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
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
  }
}
