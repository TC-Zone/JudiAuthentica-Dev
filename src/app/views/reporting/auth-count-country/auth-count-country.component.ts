import { Component, OnInit, ViewChild } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Chart } from '../../../shared/fake-db/chart';
import { ReportingService } from '../reporting.service';
import { BaseChartDirective } from 'ng2-charts';
import { ProductCrudService } from '../../product-crud/product-crud.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { AppErrorService } from '../../../shared/services/app-error/app-error.service';
import { AuthenticationService } from '../../sessions/authentication.service';

@Component({
  selector: 'app-auth-count-country',
  templateUrl: './auth-count-country.component.html',
  styleUrls: ['./auth-count-country.component.scss'],
  animations: egretAnimations
})
export class AuthCountCountryComponent implements OnInit {
  @ViewChild(BaseChartDirective) chartupdate: BaseChartDirective;

  // -------------------------------------------------------------------------------------------------
  public products;
  public getCountries;
  public countries: any[];
  filteredProducts: Observable<string[]>;
  filteredCountry: Observable<string[]>;
  public proObj = null;
  public countryObj = null;
  public statObj = null;
  public itemForm: FormGroup;
  // public selectCounty;
  public countryDet;

  // -------------------------------------------------------------------------------------------------
  public chart: Chart;
  public pieChartType: string = 'pie';
  public pieChartLabels: Array<any> = [];
  public pieChartData: Array<any> = [];
  public pieChartColors: Array<any> = [];
  public backgroundColor: Array<any> = [];


  public getProductsSub: Subscription;
  public categories: any[];
  public clientId: string;
  public predefined: string;

  constructor(
    private fb: FormBuilder,
    private prodService: ProductCrudService,
    private loader: AppLoaderService,
    private errDialog: AppErrorService,
    private authService: AuthenticationService,
    private reportingService: ReportingService
  ) {
    this.chart = new Chart();
  }

  ngOnInit() {


    const userObj = this.authService.getLoggedUserDetail();
    this.categories = userObj.userData.categories;
    this.clientId = userObj.userData.client.id;
    const predefinedStatus: boolean = userObj.userData.role.predefined;
    this.predefined = predefinedStatus ? "1" : "0";
    this.getAllProduct(this.clientId, this.categories, this.predefined);



    // this.products = this.chart.products;
    // this.getCountries = this.chart.country;
    this.buildItemForm();

  }

  getAllProduct(clientId, categories, isPredefined) {
    let categoriesID = [];
    categories.forEach(cat => {
      categoriesID.push(cat.id);
    });
    this.getProductsSub = this.prodService
      .getAllProductsByFilter(clientId, categoriesID, isPredefined)
      .subscribe(
        successResp => {
          this.products = successResp.content;
          console.log('THIS PRODUCT 3333333333333333333');
          console.log(this.products);

          this.filteredProducts = this.itemForm.get("product").valueChanges.pipe(
            startWith(''),
            map(value => this._filterProduct(value)),
          );
        },
        error => {
          this.loader.close();
          this.errDialog.showError(error);
        }
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
    this.proObj = event.option.value;

    const productId = this.proObj.id;

    this.reportingService.getAuthCountByProductId(productId).subscribe(
      successResp => {

        const dataSet = successResp.content;
        this.countries = dataSet.countries;

        this.chartupdate.data.length = 0;
        this.chartupdate.labels.length = 0;

        this.countries.forEach(element => {
          this.pieChartLabels.push(element.country);
          this.pieChartData.push(element.count);
          this.backgroundColor.push(this.getRandomColor());
        });
        this.pieChartColors = [{ backgroundColor: this.backgroundColor }];

        this.chartupdate.chart.update();


        this.itemForm.get('countries').setValue('');
        this.filteredCountry = this.itemForm.get("countries").valueChanges.pipe(
          startWith(''),
          map(value => this._filterCounty(value)),
        );
      },
      error => {
        this.loader.close();
        this.errDialog.showError(error);
      }
    );




  }

  selectedCountry(event) {
    this.countryObj = event.option.value;

    this.getCountries.forEach(country => {

      if (country.code === this.countryObj.code) {

        this.statObj = country;

        this.chartupdate.data.length = 0;
        this.chartupdate.labels.length = 0;

        country.region.forEach(region => {
          console.log(region);

          this.pieChartLabels.push(region.name);
          this.pieChartData.push(region.sale);
          this.backgroundColor.push(this.getRandomColor());
        });
        this.pieChartColors = [{ backgroundColor: this.backgroundColor }];

        this.chartupdate.chart.update();
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
