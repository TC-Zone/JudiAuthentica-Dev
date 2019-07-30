import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-sales-region',
  templateUrl: './sales-region.component.html',
  styleUrls: ['./sales-region.component.scss'],
  animations: egretAnimations
})
export class SalesRegionComponent implements OnInit {

  // -------------------------------------------------------------------------------------------------
  public countries;
  filteredCountries: Observable<string[]>;
  public selectedCountry;
  public itemForm: FormGroup;
  // -------------------------------------------------------------------------------------------------


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {


    // -----------------------------------------------------------------------------------------------
    this.countries = [
      { id: "faa6643aca8c5318a9583178795542cf", name: "Afghanistan", code: "AF" },
      { id: "d36eeebd8b1f0cde16210339e97b9408", name: "Åland Islands", code: "AX" },
      { id: "ec21ff12b34a21bece175e48a059ec7f", name: "Albania", code: "AL" }
    ];

    this.buildItemForm({ id: "faa6643aca8c5318a9583178795542cf", name: "Afghanistan", code: "AF" })

    this.filteredCountries = this.itemForm.get("country").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // -----------------------------------------------------------------------------------------------

  }

  // -------------------------------------------------------------------------------------------------
  buildItemForm(item) {
    let country = null;
    if (item) {
      country = item.name;
      this.selectedCountry = item.id;
    }
    this.itemForm = this.fb.group({
      country: [country || '', Validators.required]
    })
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onBlurCountry(): void {
    let value = this.itemForm.get("country").value;
    let status = true;
    this.countries.forEach(element => {
      if (element.name === value) {
        this.selectedCountry = element.id;
        status = false;
      }
    });

    if (status) {
      this.selectedCountry = null;
      this.itemForm.get("country").setValue("");
    }
  }
  // -------------------------------------------------------------------------------------------------






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
