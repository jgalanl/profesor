import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrls: ['./recompensas.component.scss']
})
export class RecompensasComponent implements OnInit {
  public usuario: User

  constructor(private us: UsuariosService, private auth: AuthService) { }

  ngOnInit() {
    this.getUser()
  }

  public async getUser(){
    this.usuario = await this.us.getUserByEmail(this.auth.user.email)
  }

}
