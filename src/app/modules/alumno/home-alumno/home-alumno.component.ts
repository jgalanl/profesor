import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/data/user';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  public user: User
  public s_user: Subscription;
  private _mobileQueryListener: () => void;

  constructor(private usuariosService: UsuariosService, changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher, private auth: AuthService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnInit() {
    this.s_user = this.usuariosService.getUser(this.auth.user.email).subscribe(data => {
      this.user = data
    })
  }

  ngOnDestroy(): void {
    this.s_user.unsubscribe()
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
