import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Asignatura } from '../data/asignatura';
import { map } from 'rxjs/operators';
import { Tema } from '../data/tema';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private afs: AngularFirestoreCollection<Asignatura>;
  private a: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<Asignatura>('Asignaturas')
    this.a = this.firestore.collection('Asignaturas')

  }

  public async getTemasByAsignatura(asignatura: string): Promise<Asignatura> {
    return this.afs.doc(asignatura).get().toPromise().then(r => {      
      return r.data() as Asignatura
    })
  }

  public async getTema(): Promise<Tema> {
    return this.afs.doc("Lengua").collection("Tema-1").doc("Tema-1").get().toPromise().then(r => {
      return r.data() as Tema
    })
  }

  // public async getTemasByAsignatura2(): Promise<any> {
  //   this.a.get().toPromise().then(r => {
  //     r.forEach((doc) => {
  //       console.log(doc.id, "=>", doc.data())
  //     })
  //   })
  // }
  
  // public async getTemasByAsignatura2(): Promise<any> {
  //   this.a.get().pipe(
  //     map(r => {
  //       r.docs.map(a => {
  //         console.log(a.data())
  //       })
  //     })
  //   )
  // }
}
