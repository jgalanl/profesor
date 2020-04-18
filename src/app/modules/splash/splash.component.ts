import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animation';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  animations: [slideInAnimation]
})
export class SplashComponent {

  constructor(private router: Router) { 
    setTimeout(() => this.changeView(), 1500);
  }

  changeView(){
    this.router.navigate(['/login']);
  }

}
