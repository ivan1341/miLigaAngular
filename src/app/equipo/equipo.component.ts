import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombre:string = "felinos";
  status:boolean = true;
  jugador: string;

  constructor() { }

  ngOnInit() {
    this.nombre = 'piratas';
    this.jugador = 'sdf'
  }

  agregarJugador(){
let jugador = "rer";
jugador = 'de';

  }
}
