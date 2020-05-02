import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../data/user";
import { Asignatura } from "../data/asignatura";
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
  }
}
