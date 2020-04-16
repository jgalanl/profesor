import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../data/user';
import { Asignatura } from '../data/asignatura';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private afs: AngularFirestoreCollection<User>;
  private asignatura: AngularFirestoreCollection<Asignatura>

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<User>('Usuarios');
    this.asignatura = this.firestore.collection<Asignatura>('Asignaturas')
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.afs.doc(email).get().toPromise().then(r => {
      return r.data() as User
    })
  }

  public async getAsignaturaByEmail(email: string): Promise<Asignatura[]>{
    return this.asignatura.doc(email).get().toPromise().then(r => {
      return r.data() as Asignatura[]
    })
  }
}
