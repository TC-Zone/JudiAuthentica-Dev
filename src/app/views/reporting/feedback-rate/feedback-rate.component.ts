import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";

@Component({
  selector: 'app-feedback-rate',
  templateUrl: './feedback-rate.component.html',
  styleUrls: ['./feedback-rate.component.scss'],
  animations: egretAnimations
})
export class FeedbackRateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sharedChartOptions: any = {
    responsive: true,
    // maintainAspectRatio: false,
    legend: {
      display: false,
      position: 'bottom'
    }
  };
  chartColors: Array<any> = [{
    backgroundColor: '#3f51b5',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }, {
    backgroundColor: '#eeeeee',
    borderColor: '#e0e0e0',
    pointBackgroundColor: '#e0e0e0',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }, {
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];
  // Horizontal Bar Chart
  barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [{
    data: [5, 6, 7, 8, 4, 5, 5],
    label: 'Series A',
    borderWidth: 0
  }, {
    data: [5, 4, 4, 3, 6, 2, 5],
    label: 'Series B',
    borderWidth: 0
  }];
  barChartHorizontalType = 'horizontalBar';
  barChartHorizontalOptions: any = Object.assign({
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 9
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        }
      }]
    }
  }, this.sharedChartOptions);

  /*
 * Bar Chart Event Handler
 */
  public barChartClicked(e: any): void {
  }
  public barChartHovered(e: any): void {
  }

}
