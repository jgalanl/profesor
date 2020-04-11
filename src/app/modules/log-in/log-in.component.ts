import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private auth: AuthService) { 

  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
    .then(res => {
      console.log("ok")
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
 }

}
