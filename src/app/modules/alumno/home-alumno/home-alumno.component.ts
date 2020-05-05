import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/data/user';
import { MediaMatcher } from '@angular/cdk/layout';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
<<<<<<< HEAD
  private user: User
  public s_user:Subscription;
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private us: UsuariosService, changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher, private auth: AuthService) { 
    this.user = new User()
=======
  public user: User
  public s_user: Subscription;
  private _mobileQueryListener: () => void;

  constructor(private usuariosService: UsuariosService, changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher, private auth: AuthService) { 
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnInit() {
<<<<<<< HEAD
    this.s_user = this.us.getUser(this.auth.user.email).subscribe(data => {
=======
    this.s_user = this.usuariosService.getUser(this.auth.user.email).subscribe(data => {
>>>>>>> 2eda6b93d612a9443ed1a41a2c86b339f27f0988
      this.user = data
    })
  }

  ngOnDestroy(): void {
    this.s_user.unsubscribe()
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
