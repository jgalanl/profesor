import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/data/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrls: ['./recompensas.component.scss']
})

export class RecompensasComponent implements OnInit {
  public s_user: Subscription;
  public user: User
  public cartas_trono = 0
  public cartas_pocion = 0
  public cartas_esmeralda = 0

  constructor(private us: UsuariosService, private auth: AuthService) { }

  ngOnInit() {
    this.s_user = this.us.getUser(this.auth.user.email).subscribe(data => {
      this.user = data
    })
  }

  ngOnDestroy(): void {
    this.s_user.unsubscribe()
  }

  onComprar(recompensa: string){
    console.log(recompensa)
    if (recompensa == 'recompensa_trono'){
      this.us.updateRecompensa(this.auth.user.email, 10*this.cartas_trono, recompensa, this.cartas_trono)
    }
    else if (recompensa == 'recompensa_pocion'){
      this.us.updateRecompensa(this.auth.user.email, 10*this.cartas_pocion, recompensa, this.cartas_pocion)
    }
    else{
      this.us.updateRecompensa(this.auth.user.email, 10*this.cartas_esmeralda, recompensa, this.cartas_esmeralda)
    }
  }

  onUsar(recompensa: any){
    this.us.updateRecompensa(this.auth.user.email, 0, recompensa, -1)
  }

}

@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        return Math.floor(value);
    }
}
