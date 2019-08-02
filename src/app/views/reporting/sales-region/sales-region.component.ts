import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Chart } from '../../../shared/fake-db/chart';
import { ReportingService } from '../reporting.service';

@Component({
  selector: 'app-sales-region',
  templateUrl: './sales-region.component.html',
  styleUrls: ['./sales-region.component.scss'],
  animations: egretAnimations
})
export class SalesRegionComponent implements OnInit {

  // -------------------------------------------------------------------------------------------------
  public products;
  filteredProducts: Observable<string[]>;
  public proObj = null;
  public itemForm: FormGroup;
  // -------------------------------------------------------------------------------------------------
  public chart: Chart;
  public pieChartLabels: any[] = [];
  public pieChartData: number[] = [];

  constructor(
    private fb: FormBuilder,
    private reportingService: ReportingService,
  ) {
    this.chart = new Chart();
  }

  ngOnInit() {
    //----service subscription---//
    //  this.reportingService.getAllProducts().subscribe(data => {
    //       this.products = data.content;
    //  });

    this.products = this.chart.products;
    this.buildItemForm();

    this.filteredProducts = this.itemForm.get("product").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }

  // -------------------------------------------------------------------------------------------------
  buildItemForm() {

    this.itemForm = this.fb.group({
      product: ['', Validators.required]
    })
  }

  private _filter(value: string): any {
    const filterValue = value;
    return this.products.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  selectedProduct(event) {
    this.proObj = event.option.value;
    //this.pieChartLabels = ['Afghanistan', 'Åland Islands'];
    //console.log(this.pieChartLabels);

    //this.pieChartData = [400, 500];

    // this.proObj.country.forEach(element => {
    //   this.pieChartLabels.push(element.name);
    //   this.pieChartData.push(element.sale);
    // });
    this.pieChartLabels = ["A", "B"];
    this.pieChartData = [400, 500];

  }
  displayFn(value) {
    console.log("displayfn" + value);
    return value ? value.name : value;
  }


  // -------------------------------------------------------------------------------------------------//

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


  /*
 * Pie Chart Options
 */
  // public pieChartLabels: string[] = ['Afghanistan', 'Åland Islands'];
  // public pieChartData: number[] = [400, 500];
  // public pieChartLabels: string[] = this.country;
  // public pieChartData: number[] = this.sale;

  public pieChartType: string = 'pie';
  public pieChartColors: Array<any> = [{
    backgroundColor: ['rgba(255, 217, 125, 0.8)', 'rgba(36, 123, 160, 0.8)', 'rgba(244, 67, 54, 0.8)']
  }];

  /*
  * Pie Chart Event Handler
  */
  public pieChartClicked(e: any): void {
  }
  public pieChartHovered(e: any): void {
  }

}
