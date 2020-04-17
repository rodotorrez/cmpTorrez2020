import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  graficosBar: any = {
    grafico1: {
      labels: ['Enero', 'Febrero', 'Marzo'],
      data:  [{data: [65, 59, 80], label: 'Mujeres'}, {data: [28, 48, 40], label: 'Varones'}],
      type: 'bar',
      leyenda: 'Infectados Por Mes'
    },
    grafico2: {
      labels: ['2019', '2020'],
      data:  [{data: [65, 80], label: 'Mujeres'}, {data: [48, 50], label: 'Varones'}],
      type: 'bar',
      leyenda: 'Infectados Por Gestión'
    }
  };
  constructor() { }

  ngOnInit(): void {
  }
  randomize() {
    console.log(11);
  }
}
