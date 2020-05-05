import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../data/user";
import { Asignatura } from "../data/asignatura";
import { firestore } from "firebase";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  private afs: AngularFirestoreCollection<User>;
  private asignatura: AngularFirestoreCollection<Asignatura>;

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<User>("Usuarios");
    this.asignatura = this.firestore.collection<Asignatura>("Asignaturas");
  }

<<<<<<< HEAD
  public getUser(email: string): Observable<any> {
    return this.afs.doc(email).valueChanges();
=======
  public getUser(email:string):Observable<any> {
    return this.afs.doc(email).valueChanges()
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.afs
      .doc(email)
      .get()
      .toPromise()
      .then((r) => {
        return r.data() as User;
      });
  }

  public async getAsignaturaByEmail(email: string): Promise<Asignatura[]> {
    return this.asignatura
      .doc(email)
      .get()
      .toPromise()
      .then((r) => {
        return r.data() as Asignatura[];
      });
<<<<<<< HEAD
  }

  public getAllDatos(): Observable<User[]> {
    return this.afs.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          console.log({ id, ...data });
          return { id, ...data };
        })
      )
    );
  }

  public async updatePuntos(email: string, puntos: number) {
    return this.afs.doc(email).update({
      puntos_totales: firestore.FieldValue.increment(puntos),
      puntos_actuales: firestore.FieldValue.increment(puntos),
    });
=======
  }

  public getAllDatos(): Observable<User[]> {
    return this.afs.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          console.log({ id, ...data });
          return { id, ...data };
        })
      )
    );
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
  }

  public async updatePuntos(email: string, puntos: number) {
    return this.afs.doc(email).update({
      puntos_totales: firestore.FieldValue.increment(puntos),
      puntos_actuales: firestore.FieldValue.increment(puntos),
    });
  }

  public async updateRecompensa(email: string, puntos: number, recompensa: string, cartas: number) {
    return this.afs.doc(email).update({
      puntos_actuales: firestore.FieldValue.increment(-puntos),
      [recompensa]: firestore.FieldValue.increment(cartas)
    });
  }

}
