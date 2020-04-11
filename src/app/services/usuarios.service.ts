import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private afs: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<User>('Usuarios');
  }

  public async getUserByEmail(email: string): Promise<User> {
    return this.afs.doc(email).get().toPromise().then(r => {
      return r.data() as User
    })
  }
}
