(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard card row -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{scale:'.9',delay:'300ms'}}\">\r\n    <mat-card>\r\n      <mat-card-title fxLayoutAlign=\"start center\">\r\n        <small class=\"text-muted\">Total Sales</small>\r\n        <span fxFlex></span>\r\n        <mat-chip\r\n        class=\"icon-chip\" \r\n        color=\"primary\" \r\n        selected=\"true\"><mat-icon>trending_up</mat-icon>20%</mat-chip>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <h3 class=\"m-0 font-normal\">22,450</h3>\r\n        <small class=\"text-muted\">Monthly</small>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        <small class=\"text-muted\">Income</small>\r\n        <span fxFlex></span>\r\n        <mat-chip\r\n        class=\"icon-chip\" \r\n        color=\"accent\" \r\n        selected=\"true\"><mat-icon>trending_up</mat-icon>10%</mat-chip>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <h3 class=\"m-0 font-normal\">377,670</h3>\r\n        <small class=\"text-muted\">Monthly</small>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        <small class=\"text-muted\">Traffic</small>\r\n        <span fxFlex></span>\r\n        <mat-chip\r\n        class=\"icon-chip\" \r\n        color=\"accent\" \r\n        selected=\"true\"><mat-icon>trending_up</mat-icon>9%</mat-chip>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <h3 class=\"m-0 font-normal\">54,845</h3>\r\n        <small class=\"text-muted\">Monthly</small>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        <small class=\"text-muted\">New User</small>\r\n        <span fxFlex></span>\r\n        <mat-chip\r\n        class=\"icon-chip\" \r\n        color=\"warn\" \r\n        selected=\"true\"><mat-icon>trending_down</mat-icon>2%</mat-chip>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <h3 class=\"m-0 font-normal\">245</h3>\r\n        <small class=\"text-muted\">Monthly</small>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- Fullwidth chart -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\" [@animate]=\"{value:'*',params:{y:'25px',delay:'300ms'}}\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card class=\"default\">\r\n      <mat-card-title class=\"\">\r\n        <span>Orders</span>\r\n        <span fxFlex></span>\r\n      </mat-card-title>\r\n      <mat-card-subtitle>Orders vs New user registrations</mat-card-subtitle>\r\n      <mat-card-content class=\"p-0\" [style.height]=\"'240px'\">\r\n        <canvas \r\n          height=\"240\"\r\n          baseChart \r\n          class=\"chart m-0\"\r\n          [datasets]=\"lineChartSteppedData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"></canvas>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <!-- Gallery and chart column -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxLayout=\"column\">\r\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\r\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"doughnut-grid text-center\">\r\n          <div fxFlex=\"50\" class=\"doughnut-grid-item light-mat-gray\">\r\n            <canvas \r\n            height=\"120\"\r\n            baseChart\r\n            class=\"chart\"\r\n            [data]=\"doughnutChartData1\"\r\n            [options]=\"doughnutOptions\"\r\n            [labels]=\"doughnutLabels\"\r\n            [colors]=\"doughnutChartColors1\"\r\n            [chartType]=\"doughnutChartType\"></canvas>\r\n            <small>Space: {{data1}}/{{total1}} GB</small>\r\n        </div>\r\n        <div fxFlex=\"50\" class=\"doughnut-grid-item\">\r\n          <canvas \r\n            height=\"120\" \r\n            baseChart \r\n            class=\"chart\"\r\n            [data]=\"doughnutChartData2\"\r\n            [options]=\"doughnutOptions\"\r\n            [labels]=\"doughnutLabels\"\r\n            [colors]=\"doughnutChartColors2\"\r\n            [chartType]=\"doughnutChartType\"></canvas>\r\n            <small>Tasks: 8/12</small>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"doughnut-grid-item\">\r\n        <canvas \r\n          height=\"120\" \r\n          baseChart \r\n          class=\"chart\"\r\n          [data]=\"doughnutChartData1\"\r\n          [options]=\"doughnutOptions\"\r\n          [labels]=\"doughnutLabels\"\r\n          [colors]=\"doughnutChartColors2\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n          <small>Tickets: 15/40</small>\r\n      </div>\r\n      <div fxFlex=\"50\" class=\"doughnut-grid-item light-mat-gray\">\r\n        <canvas \r\n        height=\"120\" \r\n        baseChart \r\n        class=\"chart\"\r\n        [data]=\"doughnutChartData2\"\r\n        [options]=\"doughnutOptions\"\r\n        [labels]=\"doughnutLabels\"\r\n        [colors]=\"doughnutChartColors1\"\r\n        [chartType]=\"doughnutChartType\"></canvas>\r\n        <small>Stock: 1600/2000</small>\r\n      </div>\r\n    </div>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{scale:'.9',delay:'300ms'}}\">\r\n      <mat-card-title class=\"\">\r\n        <div class=\"card-title-text\">\r\n          <span>Top Campaign Performance</span>\r\n          <span fxFlex></span>\r\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu2\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #menu2=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Campaign Settings</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>do_not_disturb</mat-icon>\r\n              <span>Disable All Campaigns</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>close</mat-icon>\r\n              <span>Remove panel</span>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n       <div class=\"mb-1\">\r\n        <p class=\"mb-05 text-muted\">Facebook Campaign</p>\r\n        <mat-progress-bar\r\n        class=\"\"\r\n        color=\"primary\"\r\n        mode=\"determinate\"\r\n        [value]=\"90\">\r\n        </mat-progress-bar>\r\n       </div>\r\n       <div class=\"mb-1\">\r\n        <p class=\"mb-05 text-muted\">Google AdSense</p>\r\n        <mat-progress-bar\r\n        class=\"\"\r\n        color=\"primary\"\r\n        mode=\"determinate\"\r\n        [value]=\"80\">\r\n        </mat-progress-bar>\r\n       </div>\r\n       <div class=\"mb-1\">\r\n        <p class=\"mb-05 text-muted\">Twitter Campaign</p>\r\n        <mat-progress-bar\r\n        class=\"\"\r\n        color=\"accent\"\r\n        mode=\"determinate\"\r\n        [value]=\"60\">\r\n        </mat-progress-bar>\r\n       </div>\r\n       <div class=\"mb-1\">\r\n        <p class=\"mb-05 text-muted\">LinkedIn Campaign</p>\r\n        <mat-progress-bar\r\n        class=\"\"\r\n        color=\"warn\"\r\n        mode=\"determinate\"\r\n        [value]=\"40\">\r\n        </mat-progress-bar>\r\n       </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"default\">\r\n      <mat-card-content class=\"p-0\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\r\n          <!-- Gallery item -->\r\n          <mat-grid-tile *ngFor=\"let photo of photos\">\r\n            <img [src]=\"photo.url\" alt=\"\">\r\n            <!-- item detail, show on hover -->\r\n            <div class=\"gallery-control-wrap\">\r\n              <div class=\"gallery-control\">\r\n                <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\r\n                <span fxFlex></span>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #photoMenu=\"matMenu\">\r\n                  <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\r\n                  <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\r\n                  <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\r\n                </mat-menu>\r\n              </div>\r\n            </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- ticket and project table column -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"66.66\" fxLayout=\"column\" fxLayoutWrap=\"wrap\">\r\n    <mat-card class=\"default\" [@animate]=\"{value:'*',params:{delay:'300ms',y:'50px'}}\">\r\n      <mat-card-title>Recent Tickets</mat-card-title>\r\n      <mat-card-content class=\"p-0\">\r\n        <mat-list class=\"compact-list mb-1\">\r\n          <mat-list-item class=\"\" *ngFor=\"let t of tickets\">\r\n            <img mat-list-avatar class=\"mr-1\" [src]=\"t.img\" alt=\"\">\r\n            <div fxLayout=\"row\" fxFlex=\"100\">\r\n              <h6 class=\"m-0 mr-1\">{{t.name}}</h6>\r\n              <span fxFlex></span>\r\n              <div fxFlex=\"40\">{{t.text | excerpt:20 }}</div>\r\n              <span fxFlex></span>\r\n              <small class=\"text-muted mr-1\">{{ t.date | relativeTime}}</small>\r\n            </div>\r\n            <mat-chip mat-sm-chip [color]=\"'warn'\" [selected]=\"t.isOpen\">{{t.isOpen ? 'active' : 'closed'}}</mat-chip>\r\n          </mat-list-item>\r\n        </mat-list>\r\n        <div class=\"text-center\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\r\n      <mat-card-content class=\"p-0\">\r\n        <ngx-datatable\r\n          class=\"material ml-0 mr-0\"\r\n          [rows]=\"projects\"\r\n          [columnMode]=\"'flex'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\"\r\n          [rowHeight]=\"'auto'\">\r\n          <ngx-datatable-column name=\"Sprints\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{ row?.name }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Manager\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{ row?.user }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Progress\" [flexGrow]=\"1\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <mat-progress-bar\r\n                class=\"\"\r\n                color=\"primary\"\r\n                mode=\"determinate\"\r\n                [value]=\"row.progress\">\r\n              </mat-progress-bar>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n        <div class=\"text-center\">\r\n          <button mat-button class=\"full-width\">View all</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <!-- Users Row -->\r\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" >\r\n      <div\r\n      *ngFor=\"let user of users\" \r\n      fxFlex=\"100\"\r\n      fxFlex.gt-sm=\"50\">\r\n        <mat-card class=\"user-card p-0\">\r\n          <mat-card-title class=\"mat-bg-primary\">\r\n            <div class=\"card-title-text\">\r\n              <a href=\"\" class=\"toolbar-avatar md mr-1\"><img [src]=\"user.photo\" alt=\"\"></a>\r\n              <span>{{user.name}}</span>\r\n              <span fxFlex></span>\r\n              <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" class=\"\">\r\n                  <mat-icon class=\"\">more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #userMenu=\"matMenu\">\r\n                  <button mat-menu-item>Follow</button>\r\n                  <button mat-menu-item>Message</button>\r\n                  <button mat-menu-item>Block</button>\r\n                  <button mat-menu-item>Delete</button>\r\n              </mat-menu>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n            <!-- user detail lines-->\r\n            <div class=\"user-details\">\r\n              <p><mat-icon class=\"text-muted\">card_membership</mat-icon>{{user.membership}}</p>\r\n              <p><mat-icon class=\"text-muted\">date_range</mat-icon>Member since {{user.registered | date}}</p>\r\n              <p><mat-icon class=\"text-muted\">location_on</mat-icon>{{user.address}}</p>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <!-- End Users Row -->\r\n  </div>\r\n  <!-- End tables and users column -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.lineChartSteppedData = [{
                data: [1, 8, 4, 8, 2, 2, 9],
                label: 'Order',
                borderWidth: 0,
                fill: true,
            }, {
                data: [6, 2, 9, 3, 8, 2, 1],
                label: 'New client',
                borderWidth: 1,
                fill: true,
            }];
        this.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
        /*
        * Full width Chart Options
        */
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(63, 81, 181, 0.16)',
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
                pointHoverBorderColor: 'rgba(148,159,177,0)'
            }, {
                backgroundColor: 'rgba(0, 0, 0, .08)',
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0.06)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
            }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Chart grid options
        this.doughnutChartColors1 = [{
                backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
            }];
        this.doughnutChartColors2 = [{
                backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
            }];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, (this.total1 - this.data1)];
        this.total2 = 600;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, (this.total2 - this.data2)];
        this.doughnutLabels = ['Spent', 'Remaining'];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0,
                }
            },
            tooltips: {
                enabled: true
            }
        };
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }];
        // users
        this.users = [
            {
                "name": "Snow Benton",
                "membership": "Paid Member",
                "phone": "+1 (956) 486-2327",
                "photo": "assets/images/face-4.jpg",
                "address": "329 Dictum Court, Minnesota",
                "registered": "2016-07-09"
            },
            {
                "name": "Kay Sellers",
                "membership": "Paid Member",
                "phone": "+1 (929) 406-3172",
                "photo": "assets/images/face-2.jpg",
                "address": "893 Garden Place, American Samoa",
                "registered": "2017-02-16"
            }
        ];
        this.projects = [{
                name: 'User Story',
                user: 'Watson Joyce',
                progress: 100,
                leader: 'Snow Benton'
            }, {
                name: 'Design Data Model',
                user: 'Morris Adams',
                progress: 30,
                leader: 'Watson Joyce'
            }, {
                name: 'Develop CR Algorithm',
                user: 'Jhone Doe',
                progress: 70,
                leader: 'Ada Kidd'
            }, {
                name: 'Payment Module',
                user: 'Ada Kidd',
                progress: 50,
                leader: 'Snow Benton'
            }, {
                name: 'Discount Module',
                user: 'Workman Floyd',
                progress: 50,
                leader: 'Robert Middleton'
            }];
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/views/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], data: { title: 'Dashboard' } }
];


/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map