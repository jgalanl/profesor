import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss']
})
export class AsignaturasComponent implements OnInit {
  breakpoint: string;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? '1:1' : '3:1';
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? '1:1' : '3:1';
  }

}
