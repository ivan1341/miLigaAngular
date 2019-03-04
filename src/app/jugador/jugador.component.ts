import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  @Input()
  jugador:string = 'sergio';
  constructor() { }

  ngOnInit() {
  }

}
