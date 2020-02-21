import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth: AngularFireAuth) { }

  login(email:string, password: string){
    return new Promise((resolve, reject) => {
      this.angularAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user)
      }).catch(err => reject(err))
    })
  }
}
