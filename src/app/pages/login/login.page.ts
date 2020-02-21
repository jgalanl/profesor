import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  private email:string
  private password:string

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password)
    .then(user =>{
      console.log(user)
      this.router.navigate(["/index"]);
    }).catch(err =>{
      alert(err)
    })
  }

}
