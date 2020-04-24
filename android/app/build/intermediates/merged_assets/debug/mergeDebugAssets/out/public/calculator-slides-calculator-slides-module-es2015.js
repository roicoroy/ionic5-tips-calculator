(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-slides-calculator-slides-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-slides/calculator-slides.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-slides/calculator-slides.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>calculator-slides</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\n    \n    <ion-slide class='slide-date'>\n      <img src=\"assets/logo.svg\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Welcome to\n        <b>ICA</b>\n      </h2>\n      <p>\n        The\n        <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of\n        proper code\n        use.\n      </p>\n    </ion-slide>\n\n    <ion-slide class='slide-waiters'>\n      <img src=\"assets/logo.svg\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is Ionic?</h2>\n      <p>\n        <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with\n        web technologies\n        like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide class='slide-points'>\n      <img src=\"assets/logo.svg\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is Ionic Appflow?</h2>\n      <p>\n        <b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a\n        totally new\n        level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide class='slide-hours'>\n      <img src=\"assets/logo.svg\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/calculator-slides/calculator-slides-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/calculator-slides/calculator-slides-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CalculatorSlidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorSlidesPageRoutingModule", function() { return CalculatorSlidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calculator_slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator-slides.page */ "./src/app/calculator-slides/calculator-slides.page.ts");




const routes = [
    {
        path: '',
        component: _calculator_slides_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorSlidesPage"]
    }
];
let CalculatorSlidesPageRoutingModule = class CalculatorSlidesPageRoutingModule {
};
CalculatorSlidesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculatorSlidesPageRoutingModule);



/***/ }),

/***/ "./src/app/calculator-slides/calculator-slides.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/calculator-slides/calculator-slides.module.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorSlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorSlidesPageModule", function() { return CalculatorSlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _calculator_slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-slides-routing.module */ "./src/app/calculator-slides/calculator-slides-routing.module.ts");
/* harmony import */ var _calculator_slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator-slides.page */ "./src/app/calculator-slides/calculator-slides.page.ts");







let CalculatorSlidesPageModule = class CalculatorSlidesPageModule {
};
CalculatorSlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calculator_slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorSlidesPageRoutingModule"]
        ],
        declarations: [_calculator_slides_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorSlidesPage"]]
    })
], CalculatorSlidesPageModule);



/***/ }),

/***/ "./src/app/calculator-slides/calculator-slides.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/calculator-slides/calculator-slides.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci1zbGlkZXMvQzpcXFVzZXJzXFxSQmVudG9cXERvY3VtZW50c1xcR2l0SHViXFxpb25pYzUtdGlwcy1jYWxjdWxhdG9yL3NyY1xcYXBwXFxjYWxjdWxhdG9yLXNsaWRlc1xcY2FsY3VsYXRvci1zbGlkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdG9yLXNsaWRlcy9jYWxjdWxhdG9yLXNsaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURDSTtFQUNFLHFDQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhdG9yLXNsaWRlcy9jYWxjdWxhdG9yLXNsaWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGUtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGUtaW1hZ2Uge1xyXG4gICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDM2cHggMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG4gIFxyXG4gICAgYiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbiAgICB9XHJcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzNnB4IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/calculator-slides/calculator-slides.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/calculator-slides/calculator-slides.page.ts ***!
  \*************************************************************/
/*! exports provided: CalculatorSlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorSlidesPage", function() { return CalculatorSlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CalculatorSlidesPage = class CalculatorSlidesPage {
    constructor(menu, router, storage, formBuilder, alertController) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.showSkip = true;
        this.calculatorForm = formBuilder.group({
            date: [''],
            time_from: [''],
            time_to: [''],
        });
        this.waitersForm = formBuilder.group({
            waiters: this.formBuilder.array([
                this.initWaiters(),
            ]),
        });
        this.puntuactionForm = formBuilder.group({
            puntuaction: this.formBuilder.array([
                this.initPountuaction(),
            ]),
        });
    }
    initWaiters() {
        return this.formBuilder.group({
            first_name: [''],
            Last_name: [''],
        });
    }
    initPountuaction() {
        return this.formBuilder.group({
            criteria: [''],
            points: [''],
        });
    }
    addNewWaiters() {
        const control = this.calculatorForm.controls.waiters;
        control.push(this.initWaiters());
    }
    removeWaiters(i) {
        const control = this.calculatorForm.controls.waiters;
        if (control.length > 1) {
            control.removeAt(i);
        }
        else {
            this.minError();
        }
    }
    addNewPountuaction() {
        const control = this.calculatorForm.controls.puntuaction;
        control.push(this.initPountuaction());
    }
    removePountuaction(i) {
        const control = this.calculatorForm.controls.puntuaction;
        if (control.length > 1) {
            control.removeAt(i);
        }
        else {
            this.minError();
        }
    }
    get formWaitersData() {
        return this.calculatorForm.get('waiters');
    }
    get formPuntuactionData() {
        return this.calculatorForm.get('puntuaction');
    }
    minError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'You need at least one waiter..',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
    startApp() {
        this.router.navigateByUrl('calculator', { replaceUrl: true })
            .then(() => this.storage.set('app_complete_setup', true), (error) => console.log(error));
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }
    ionViewWillEnter() {
        this.storage.get('app_complete_setup').then(res => {
            if (res === true) {
                this.router.navigateByUrl('calculator', { replaceUrl: true });
            }
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }
};
CalculatorSlidesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], CalculatorSlidesPage.prototype, "slides", void 0);
CalculatorSlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator-slides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calculator-slides.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-slides/calculator-slides.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calculator-slides.page.scss */ "./src/app/calculator-slides/calculator-slides.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CalculatorSlidesPage);



/***/ })

}]);
//# sourceMappingURL=calculator-slides-calculator-slides-module-es2015.js.map