import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Resultado } from '../data/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private afs: AngularFirestoreCollection<Resultado>;

  constructor(private firestore: AngularFirestore) {
    this.afs = this.firestore.collection<Resultado>('Resultados')
  }

  public async insertResultado(data: Resultado): Promise<string>{
    data.id = this.firestore.createId()
    return this.afs.doc(data.id).set({... data}).then(r=>{return data.id;  });
  }

  public async getResultadosByAsignatura(usuario: string, asignatura: string): Promise<Resultado[]>{
    return new Promise<Resultado[]>((resolve, reject) => {
      this.firestore.collection<any>('Resultados', ref => 
      ref.where('usuario', '==', usuario).where('asignatura', '==', asignatura)).valueChanges().subscribe(data => {
        if(data){
         resolve(data as Resultado[])
        }
        else{
          reject()
        }
       })
     })
   }


}
