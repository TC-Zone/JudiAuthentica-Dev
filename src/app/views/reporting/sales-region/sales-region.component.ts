import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Chart } from '../../../shared/fake-db/chart';

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
  public selectedCountry;
  public itemForm: FormGroup;
  // -------------------------------------------------------------------------------------------------
  public chart: Chart;

  constructor(
    private fb: FormBuilder
  ) {
    this.chart = new Chart();
  }

  ngOnInit() {


    // -----------------------------------------------------------------------------------------------

    this.products = this.chart.products;

    this.buildItemForm();

    this.filteredProducts = this.itemForm.get("country").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // -----------------------------------------------------------------------------------------------

  }

  // -------------------------------------------------------------------------------------------------
  buildItemForm() {
    // let country = null;
    // if (item) {
    //   country = item.name;
    //   this.selectedCountry = item.id;
    // }
    this.itemForm = this.fb.group({
      country: ['', Validators.required]
    })
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onBlurProducts(): void {
    let value = this.itemForm.get("product").value;
    let status = true;
    this.products.forEach(element => {
      if (element.name === value) {
        this.selectedCountry = element.id;
        status = false;
      }
    });

    if (status) {
      this.selectedCountry = null;
      this.itemForm.get("product").setValue("");
    }
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
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
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
