import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  public usuario: User
  breakpoint: string;

  constructor(private us: UsuariosService, private auth: AuthService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? '1:1' : '3:1';
    this.getUser()
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? '1:1' : '3:1';
  }

  public async getUser(){
    this.usuario = await this.us.getUserByEmail(this.auth.user.email)
  }

}
