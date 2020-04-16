import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public user: User
  public s_user: Subscription

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private auth: AuthService, private us: UsuariosService) { 

  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
    .then(res => {
      this.us.getUserByEmail(this.loginForm.get('email').value)
      .then(res => {
        let email = this.loginForm.get('email')
        if(res.rol === 'profesor'){
          this.router.navigate(['/home-profesor']);
        }
        else{
          this.router.navigate(['/home-alumno'], { state: { email: email } } )
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
 }

}
