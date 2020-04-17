import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-bar',
  templateUrl: './grafica-bar.component.html',
  styles: [
  ]
})
export class GraficaBarComponent implements OnInit {

  public barChartOptions: any = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  /* public barChartLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  public barChartType: string = 'bar';
  public barChartLegend = true;

  public barChartData: any = [
    { data: [65, 59, 80, 81], label: 'Series A' },
    { data: [28, 48, 40, 19], label: 'Series B' }
  ]; */

  @Input('chartLabels') barChartLabels: string[] = [];
  @Input('chartType') barChartType: string = '';
  @Input('chartLegend') barChartLegend = true;
  @Input('chartData') barChartData: any = [];


  constructor() { }

  ngOnInit(): void {
  }


}
