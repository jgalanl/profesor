import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { UsuariosService } from "src/app/services/usuarios.service";
import { Subscription } from "rxjs";
import { User } from "src/app/data/user";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent implements OnInit {
  public user: User;
  public s_user: Subscription;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private auth: AuthService,
    private us: UsuariosService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.auth
      .login(
        this.loginForm.get("email").value,
        this.loginForm.get("password").value
      )
      .then((res) => {
        this.us
          .getUserByEmail(this.loginForm.get("email").value)
          .then((res) => {
            if (res.rol === "Profesor") {
              //alert(JSON.stringify(res))
              this.router.navigate(["/home-profesor"], { state: res });
            } else {
              this.router.navigate(["/home-alumno"], { state: res });
            }
          });
      })
      .catch((err) => {
        this.openDialog()
      });
  }

  openDialog(){
    this.dialog.open(LoginDialog, {
      data: {}
    });
  }
}

@Component({
  selector: 'log-in-dialog',
  templateUrl: 'log-in-dialog.html',
})
export class LoginDialog {

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>) {}

  onVolver(): void {
    this.dialogRef.close();
  }
}
