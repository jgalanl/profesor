import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User


  constructor(private angularFireAuth: AngularFireAuth) { 
    this.angularFireAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  login(email:string, password: string){
    return new Promise((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user)
      }).catch(err => reject(err))
    })
  }

  signOut() {
    this.angularFireAuth.signOut()
  }
}