import { Component, OnInit, ViewChild } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Chart } from '../../../shared/fake-db/chart';
import { ReportingService } from '../reporting.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-region',
  templateUrl: './sales-region.component.html',
  styleUrls: ['./sales-region.component.scss'],
  animations: egretAnimations
})
export class SalesRegionComponent implements OnInit {
  @ViewChild(BaseChartDirective) chartupdate: BaseChartDirective;

  // -------------------------------------------------------------------------------------------------
  public products;
  public getCountries;
  public countries;
  filteredProducts: Observable<string[]>;
  filteredCountry: Observable<string[]>;
  public proObj = null;
  public countryObj = null;
  public statObj = null;
  public itemForm: FormGroup;
  // public selectCounty;
  //public countryDet;
  public noData = true;
  public noDataSecond = true;

  // -------------------------------------------------------------------------------------------------
  public chart: Chart;
  public pieChartType: string = 'pie';
  public pieChartLabels: Array<any> = [];
  public pieChartData: Array<any> = [];
  public pieChartColors: Array<any> = [];
  public backgroundColor: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private reportingService: ReportingService
  ) {
    this.chart = new Chart();
  }

  ngOnInit() {
    //----service subscription---//
    //  this.reportingService.getAllProducts().subscribe(data => {
    //       this.products = data.content;
    //  });

    this.products = this.chart.products;
    this.getCountries = this.chart.country;
    this.buildItemForm();

    this.filteredProducts = this.itemForm.get("product").valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value)),
    );
  }

  // -------------------------------------------------------------------------------------------------
  buildItemForm() {

    this.itemForm = this.fb.group({
      product: ['', Validators.required],
      countries: ['', Validators.required]
    })
  }

  private _filterProduct(value: string): any {
    const filterValue = value;
    return this.products.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCounty(value: string): any {
    const filterValue = value;
    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  selectedProduct(event) {
    console.log(event);

    if (event.option !== undefined) {

      this.proObj = event.option.value;

      this.statObj = this.proObj;

      this.itemForm.get('countries').setValue('');
      this.countries = this.proObj.country;

      // this.chartupdate.data.length = 0;
      // this.chartupdate.labels.length = 0;

      this.pieChartLabels.length = 0;
      this.pieChartData.length = 0;


      this.proObj.country.forEach(element => {

        this.pieChartLabels.push(element.name);
        this.pieChartData.push(element.sale);
        this.backgroundColor.push(this.getRandomColor());

      });

      this.pieChartData.forEach(element => {

        if (element !== '') {
          this.noData = true;
          this.pieChartColors = [{ backgroundColor: this.backgroundColor }];
          //this.chartupdate.chart.update();
          this.filteredCountry = this.itemForm.get("countries").valueChanges.pipe(
            startWith(''),
            map(value => this._filterCounty(value)),
          );
        }
        else {
          this.noData = false;

        }
      });


    }


  }

  selectedCountry(event) {
    console.log(event);

    this.countryObj = event.option.value;

    this.getCountries.forEach(country => {

      if (country.code === this.countryObj.code) {

        this.statObj = country;

        this.pieChartLabels.length = 0;
        this.pieChartData.length = 0;

        country.region.forEach(region => {
          console.log(region);

          this.pieChartLabels.push(region.name);
          this.pieChartData.push(region.sale);
          this.backgroundColor.push(this.getRandomColor());
        });

        this.pieChartData.forEach(element => {

          if (element !== '') {

            this.noDataSecond = true;
            this.pieChartColors = [{ backgroundColor: this.backgroundColor }];
          }
          else {

            this.noDataSecond = false;
          }
        });
      }
    });
  }


  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  displayFn(value) {
    console.log("displayfn" + value);
    return value ? value.name : value;
  }

  emptyCountry(event) {
    if (event) {
      if (event.target.value === null || event.target.value === "") {

        this.noData = true;

        this.pieChartLabels.length = 0;
        this.pieChartData.length = 0;

        this.proObj.country.forEach(element => {
          this.pieChartLabels.push(element.name);
          this.pieChartData.push(element.sale);
          this.backgroundColor.push(this.getRandomColor());
        });
        this.pieChartColors = [{ backgroundColor: this.backgroundColor }];
      }
    }
  }

  emptyProduct(event) {
    console.log(event);

    if (event) {
      if (event.target.value === null || event.target.value === "") {
        this.noDataSecond = true;

        this.pieChartLabels.length = 0;
        this.pieChartData.length = 0;
        this.chartupdate.chart.update();

      }
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
  // public pieChartLabels: string[] = ['Afghanistan', 'Åland Islands'];
  // public pieChartData: number[] = [400, 500];
  // public pieChartLabels: string[] = this.country;
  // public pieChartData: number[] = this.sale;

  // public pieChartType: string = 'pie';
  // public pieChartColors: Array<any> = [{
  //   backgroundColor: ['rgba(255, 217, 125, 0.8)', 'rgba(36, 123, 160, 0.8)', 'rgba(244, 67, 54, 0.8)']
  // }];

  /*
  * Pie Chart Event Handler
  */
  public pieChartClicked(e: any): void {
  }
  public pieChartHovered(e: any): void {
  }

}
