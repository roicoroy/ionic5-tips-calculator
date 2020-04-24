(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calculator-calculator-module~calculator-slides-calculator-slides-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ion-picker/ion-picker.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ion-picker/ion-picker.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\r\n    <li [class.selected]=\"item.value === getSelectedValue()\" *ngFor=\"let item of items; let i=index\" (click)=\"selectValue(item.value)\">\r\n        <div class=\"circle\">\r\n            <ion-icon [name]=\"item.icon\"></ion-icon>\r\n        </div>\r\n        <div>\r\n            <span>{{item.text}}</span>\r\n        </div>\r\n    </li>\r\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable-modal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\r\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\r\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\r\n      <ion-button (click)=\"selectComponent._close()\">\r\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\r\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\r\n        </span>\r\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\r\n          {{selectComponent.closeButtonText}}\r\n        </span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <!-- Need span for for text ellipsis. -->\r\n      <span *ngIf=\"selectComponent.titleTemplate\"\r\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\r\n      </span>\r\n      <span *ngIf=\"!selectComponent.titleTemplate\">\r\n        {{selectComponent.label}}\r\n      </span>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <div *ngIf=\"selectComponent.headerTemplate\"\r\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\r\n  </div>\r\n  <ion-toolbar\r\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\r\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\r\n      [(ngModel)]=\"selectComponent._searchText\"\r\n      (ionChange)=\"selectComponent._filterItems()\"\r\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\r\n      [placeholder]=\"selectComponent.searchPlaceholder\"\r\n      [debounce]=\"selectComponent.searchDebounce\">\r\n    </ion-searchbar>\r\n    <div class=\"ionic-selectable-message\"\r\n      *ngIf=\"selectComponent.messageTemplate\">\r\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\r\n    <div class=\"ionic-selectable-spinner-background\"></div>\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <ion-list class=\"ion-no-margin\"\r\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\r\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\r\n      class=\"ionic-selectable-group\">\r\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\r\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\r\n        <!-- Need span for for text ellipsis. -->\r\n        <span *ngIf=\"selectComponent.groupTemplate\"\r\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\r\n          [ngTemplateOutletContext]=\"{ group: group }\">\r\n        </span>\r\n        <!-- Need ion-label for text ellipsis. -->\r\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\r\n          {{group.text}}\r\n        </ion-label>\r\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\r\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\r\n            [ngTemplateOutletContext]=\"{ group: group }\">\r\n          </div>\r\n        </div>\r\n      </ion-item-divider>\r\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\r\n        (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\r\n        [ngClass]=\"{\r\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\r\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\r\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\r\n        <!-- Need span for text ellipsis. -->\r\n        <span *ngIf=\"selectComponent.itemTemplate\"\r\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\r\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n        </span>\r\n        <!-- Need ion-label for text ellipsis. -->\r\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\r\n          {{selectComponent._formatItem(item)}}\r\n        </ion-label>\r\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\r\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\r\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n          </div>\r\n        </div>\r\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\r\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\r\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n        </span>\r\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\r\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\r\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\r\n          [slot]=\"selectComponent.itemIconSlot\">\r\n        </ion-icon>\r\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\r\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\r\n          (click)=\"selectComponent._saveItem($event, item)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\r\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\r\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\r\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\r\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\r\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\r\n    </span>\r\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\r\n      {{selectComponent.searchFailText}}\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\r\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\r\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <ion-virtual-scroll class=\"ion-no-margin\"\r\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\"\r\n    [items]=\"selectComponent._filteredGroups[0].items\"\r\n    [headerFn]=\"selectComponent.virtualScrollHeaderFn\"\r\n    [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\">\r\n    <ion-item-divider *virtualHeader=\"let header\"\r\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\r\n      {{header}}\r\n    </ion-item-divider>\r\n    <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\r\n      (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\r\n      [ngClass]=\"{\r\n        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\r\n        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\r\n      }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\r\n      <!-- Need span for text ellipsis. -->\r\n      <span *ngIf=\"selectComponent.itemTemplate\"\r\n        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\r\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n      </span>\r\n      <!-- Need ion-label for text ellipsis. -->\r\n      <ion-label *ngIf=\"!selectComponent.itemTemplate\">\r\n        {{selectComponent._formatItem(item)}}\r\n      </ion-label>\r\n      <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\r\n        <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\r\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n        </div>\r\n      </div>\r\n      <span *ngIf=\"selectComponent.itemIconTemplate\"\r\n        [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\r\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\r\n      </span>\r\n      <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\r\n        [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\r\n        [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\r\n        [slot]=\"selectComponent.itemIconSlot\">\r\n      </ion-icon>\r\n      <ion-button *ngIf=\"selectComponent.canSaveItem\"\r\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\r\n        (click)=\"selectComponent._saveItem($event, item)\">\r\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"selectComponent.canDeleteItem\"\r\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\r\n        (click)=\"selectComponent._deleteItemClick($event, item)\">\r\n        <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-virtual-scroll>\r\n</ion-content>\r\n<div class=\"ionic-selectable-add-item-template\"\r\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\r\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\r\n  <div class=\"ionic-selectable-add-item-template-inner\"\r\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\r\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\r\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\r\n    </span>\r\n  </div>\r\n</div>\r\n<ion-footer\r\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\r\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\r\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\r\n    <ion-row>\r\n      <ion-col *ngIf=\"selectComponent.canClear\">\r\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\r\n          [disabled]=\"!selectComponent._selectedItems.length\">\r\n          {{selectComponent.clearButtonText}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\r\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\r\n          {{selectComponent.addButtonText}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col\r\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\r\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\r\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\r\n          {{selectComponent.confirmButtonText}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n  <div *ngIf=\"selectComponent.footerTemplate\"\r\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\r\n  </div>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ionic-selectable-inner\">\r\n  <div class=\"ionic-selectable-value\">\r\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\r\n      [ngTemplateOutlet]=\"valueTemplate\"\r\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\r\n    </div>\r\n    <div class=\"ionic-selectable-value-item\"\r\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\r\n      <div [ngTemplateOutlet]=\"valueTemplate\"\r\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\r\n      <div class=\"ionic-selectable-value-item\"\r\n        *ngFor=\"let valueItem of _valueItems\">\r\n        {{_formatValueItem(valueItem)}}\r\n      </div>\r\n    </span>\r\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\r\n      class=\"ionic-selectable-value-item\">\r\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ionic-selectable-value-item\"\r\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\r\n      {{placeholder}}\r\n    </div>\r\n    <!-- Fix icon allignment when there's no value or placeholder. -->\r\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\r\n  </div>\r\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\r\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\r\n  </div>\r\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\r\n    <div class=\"ionic-selectable-icon-inner\"></div>\r\n  </div>\r\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\r\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\r\n    (click)=\"_click()\" type=\"button\">\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/components/custom-components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/custom-components.module.ts ***!
  \********************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-selectable/ionic-selectable.module */ "./src/app/components/ionic-selectable/ionic-selectable.module.ts");
/* harmony import */ var _ion_picker_ion_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ion-picker/ion-picker */ "./src/app/components/ion-picker/ion-picker.ts");







let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"]
        ],
        declarations: [
            _ion_picker_ion_picker__WEBPACK_IMPORTED_MODULE_6__["IonPicker"]
        ],
        entryComponents: [
            _ion_picker_ion_picker__WEBPACK_IMPORTED_MODULE_6__["IonPicker"]
        ],
        exports: [
            _ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
            _ion_picker_ion_picker__WEBPACK_IMPORTED_MODULE_6__["IonPicker"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ "./src/app/components/ion-picker/ion-picker.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/ion-picker/ion-picker.ts ***!
  \*****************************************************/
/*! exports provided: IonPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPicker", function() { return IonPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var IonPicker_1;


let IonPicker = IonPicker_1 = class IonPicker {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        this.onChange(val);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    selectValue(value) {
        this.value = value;
    }
    getSelectedValue() {
        return this.value;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], IonPicker.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonPicker.prototype, "_value", void 0);
IonPicker = IonPicker_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ion-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ion-picker.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ion-picker/ion-picker.html")).default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => IonPicker_1),
                multi: true
            }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonPicker);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return IonicSelectableAddItemTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableAddItemTemplateDirective = class IonicSelectableAddItemTemplateDirective {
};
IonicSelectableAddItemTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableAddItemTemplate]',
    })
], IonicSelectableAddItemTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: IonicSelectableCloseButtonTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return IonicSelectableCloseButtonTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableCloseButtonTemplateDirective = class IonicSelectableCloseButtonTemplateDirective {
};
IonicSelectableCloseButtonTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableCloseButtonTemplate]',
    })
], IonicSelectableCloseButtonTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: IonicSelectableFooterTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return IonicSelectableFooterTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableFooterTemplateDirective = class IonicSelectableFooterTemplateDirective {
};
IonicSelectableFooterTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableFooterTemplate]',
    })
], IonicSelectableFooterTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.ts ***!
  \**********************************************************************************************/
/*! exports provided: IonicSelectableGroupEndTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return IonicSelectableGroupEndTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableGroupEndTemplateDirective = class IonicSelectableGroupEndTemplateDirective {
};
IonicSelectableGroupEndTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableGroupEndTemplate]',
    })
], IonicSelectableGroupEndTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-group-template.directive.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-group-template.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: IonicSelectableGroupTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return IonicSelectableGroupTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableGroupTemplateDirective = class IonicSelectableGroupTemplateDirective {
};
IonicSelectableGroupTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableGroupTemplate]',
    })
], IonicSelectableGroupTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-header-template.directive.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-header-template.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: IonicSelectableHeaderTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return IonicSelectableHeaderTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableHeaderTemplateDirective = class IonicSelectableHeaderTemplateDirective {
};
IonicSelectableHeaderTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableHeaderTemplate]',
    })
], IonicSelectableHeaderTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: IonicSelectableIconTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return IonicSelectableIconTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableIconTemplateDirective = class IonicSelectableIconTemplateDirective {
};
IonicSelectableIconTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableIconTemplate]'
    })
], IonicSelectableIconTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: IonicSelectableItemEndTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return IonicSelectableItemEndTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableItemEndTemplateDirective = class IonicSelectableItemEndTemplateDirective {
};
IonicSelectableItemEndTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableItemEndTemplate]',
    })
], IonicSelectableItemEndTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.ts ***!
  \**********************************************************************************************/
/*! exports provided: IonicSelectableItemIconTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return IonicSelectableItemIconTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableItemIconTemplateDirective = class IonicSelectableItemIconTemplateDirective {
};
IonicSelectableItemIconTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableItemIconTemplate]'
    })
], IonicSelectableItemIconTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-item-template.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-item-template.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: IonicSelectableItemTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return IonicSelectableItemTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableItemTemplateDirective = class IonicSelectableItemTemplateDirective {
};
IonicSelectableItemTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableItemTemplate]'
    })
], IonicSelectableItemTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-message-template.directive.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-message-template.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: IonicSelectableMessageTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return IonicSelectableMessageTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableMessageTemplateDirective = class IonicSelectableMessageTemplateDirective {
};
IonicSelectableMessageTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableMessageTemplate]',
    })
], IonicSelectableMessageTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IonicSelectableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return IonicSelectableModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let IonicSelectableModalComponent = class IonicSelectableModalComponent {
    constructor(navParams, _element) {
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(item => {
                    this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    get _isIos() {
        return this.selectComponent._isIos;
    }
    _isMD() {
        return this.selectComponent._isMD;
    }
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    onResize() {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    }
    ngAfterViewInit() {
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(() => {
                this._searchbarComponent.setFocus();
            }, 1000);
        }
    }
};
IonicSelectableModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], IonicSelectableModalComponent.prototype, "_content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbarComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
], IonicSelectableModalComponent.prototype, "_searchbarComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], IonicSelectableModalComponent.prototype, "_infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableModalComponent.prototype, "_cssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-can-clear'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableModalComponent.prototype, "_canClearCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-is-multiple'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableModalComponent.prototype, "_isMultipleCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-is-searching'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableModalComponent.prototype, "_isSearchingCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-ios'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableModalComponent.prototype, "_isIos", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-md'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Boolean)
], IonicSelectableModalComponent.prototype, "_isMD", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-modal-is-add-item-template-visible'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableModalComponent.prototype, "_isAddItemTemplateVisibleCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IonicSelectableModalComponent.prototype, "onResize", null);
IonicSelectableModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ionic-selectable-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ionic-selectable-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable-modal.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], IonicSelectableModalComponent);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.ts ***!
  \************************************************************************************************/
/*! exports provided: IonicSelectablePlaceholderTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return IonicSelectablePlaceholderTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectablePlaceholderTemplateDirective = class IonicSelectablePlaceholderTemplateDirective {
};
IonicSelectablePlaceholderTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectablePlaceholderTemplate]',
    })
], IonicSelectablePlaceholderTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.ts ***!
  \************************************************************************************************/
/*! exports provided: IonicSelectableSearchFailTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return IonicSelectableSearchFailTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableSearchFailTemplateDirective = class IonicSelectableSearchFailTemplateDirective {
};
IonicSelectableSearchFailTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableSearchFailTemplate]',
    })
], IonicSelectableSearchFailTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-title-template.directive.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-title-template.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: IonicSelectableTitleTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return IonicSelectableTitleTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableTitleTemplateDirective = class IonicSelectableTitleTemplateDirective {
};
IonicSelectableTitleTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableTitleTemplate]',
    })
], IonicSelectableTitleTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable-value-template.directive.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable-value-template.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: IonicSelectableValueTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return IonicSelectableValueTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IonicSelectableValueTemplateDirective = class IonicSelectableValueTemplateDirective {
};
IonicSelectableValueTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ionicSelectableValueTemplate]',
    })
], IonicSelectableValueTemplateDirective);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-ionic-selectable .item-inner .input-wrapper {\n  -webkit-box-align: normal;\n          align-items: normal;\n}\n.item-ionic-selectable ion-label {\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-width: initial;\n}\n.ionic-selectable {\n  display: block;\n  max-width: 45%;\n}\n.ionic-selectable-inner {\n  display: -webkit-box;\n  display: flex;\n  /*\n    When there's no ion-label we need to keep\n    value and icon alligned to the right ourselves.\n  */\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.ionic-selectable-has-placeholder .ionic-selectable-value-item {\n  color: var(--placeholder-color, #999);\n}\n.ionic-selectable-value {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  overflow: hidden;\n}\n.ionic-selectable-value-item {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ionic-selectable-value-item:not(:last-child) {\n  margin-bottom: 5px;\n}\n.ionic-selectable-icon {\n  position: relative;\n  width: 20px;\n}\n.ionic-selectable-icon-inner {\n  position: absolute;\n  top: 20px;\n  left: 5px;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  pointer-events: none;\n  color: var(--icon-color, #999);\n}\n.ionic-selectable-icon-template {\n  align-self: center;\n  margin-left: 5px;\n}\n.ionic-selectable-ios .ionic-selectable-value {\n  padding-top: 11px;\n  padding-bottom: 11px;\n}\n.ionic-selectable-ios .ionic-selectable-icon-inner {\n  top: 19px;\n}\n.ionic-selectable-spinner {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.ionic-selectable-spinner-background {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-color: #000000;\n  opacity: 0.05;\n}\n.ionic-selectable-spinner ion-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  margin-top: -14px;\n  margin-left: -14px;\n}\n.ionic-selectable-cover {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: 0 0;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n}\n.ionic-selectable-add-item-template {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n}\n.ionic-selectable-add-item-template-inner {\n  overflow-y: auto;\n}\n.ionic-selectable-add-item-template-inner > ion-footer {\n  bottom: 0;\n  position: absolute;\n}\n.ionic-selectable:not(.ionic-selectable-has-label) {\n  /*Occupy 100% of width when there's no label.*/\n  max-width: 100%;\n  width: 100%;\n}\n.ionic-selectable-label-stacked, .ionic-selectable-label-floating {\n  align-self: stretch;\n  max-width: 100%;\n  padding-left: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.ionic-selectable-label-stacked .ionic-selectable-value, .ionic-selectable-label-floating .ionic-selectable-value {\n  padding-top: 0;\n  padding-bottom: 0;\n  min-height: 19px;\n}\n.ionic-selectable-label-stacked .ionic-selectable-icon-inner, .ionic-selectable-label-floating .ionic-selectable-icon-inner {\n  top: 7px;\n}\n.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value, .ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value {\n  padding-top: 0;\n  padding-bottom: 0;\n  min-height: 20px;\n}\n.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner, .ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner {\n  top: 8px;\n}\n.ionic-selectable-label-default .ionic-selectable-value, .ionic-selectable-label-fixed .ionic-selectable-value {\n  padding-left: var(--padding-start, 16px);\n}\n.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value {\n  padding-left: calc(var(--padding-start, $padding) + 11px);\n}\n.ionic-selectable-modal .ionic-selectable-group ion-item-divider {\n  padding-right: 16px;\n}\n.ionic-selectable-modal .ionic-selectable-item-button {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.ionic-selectable-modal-ios .ionic-selectable-message {\n  padding: 8px;\n}\n.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider {\n  padding-right: 8px;\n}\n.ionic-selectable-modal-md .ionic-selectable-message {\n  padding: 8px 12px;\n}\n.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child {\n  padding-right: 8px;\n}\n.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child {\n  padding-left: 8px;\n}\n.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content {\n  overflow-y: hidden;\n}\n.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible > .content > .scroll-content {\n  overflow-y: hidden;\n}\n.ionic-selectable-modal ion-header ion-toolbar:first-of-type {\n  padding-top: var(--ion-safe-area-top, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL0M6XFxVc2Vyc1xcUkJlbnRvXFxEb2N1bWVudHNcXEdpdEh1YlxcaW9uaWM1LXRpcHMtY2FsY3VsYXRvci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW9uaWMtc2VsZWN0YWJsZVxcaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDUE47QURTSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDUE47QURZQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDVEY7QURVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBOzs7R0FBQTtFQUlBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDUko7QURXSTtFQUNFLHFDQUFBO0FDVE47QURZRTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEV0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRFVNO0VBQ0Usa0JBQUE7QUNSUjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDVko7QURXSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDVE47QURXSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNUTjtBRGFJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ1hOO0FEY007RUFDRSxTQUFBO0FDWlI7QURnQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNkSjtBRGVJO0VBQ0UsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDYk47QURlSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2JOO0FEZ0JFO0VBQ0UsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFVBQUE7QUNkSjtBRGdCRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQ2RKO0FEZUk7RUFDRSxnQkFBQTtBQ2JOO0FEY007RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGdCRTtFQUNFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNkSjtBRHFCRTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDcEJKO0FEcUJJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNuQk47QURxQkk7RUFDRSxRQUFBO0FDbkJOO0FEc0JNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNwQlI7QURzQk07RUFDRSxRQUFBO0FDcEJSO0FEMEJJO0VBQ0Usd0NBQUE7QUN4Qk47QUQ0Qkk7RUFDRSx5REFBQTtBQzFCTjtBRGlDSTtFQUNFLG1CQXBMYTtBQ3NKbkI7QURpQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDL0JKO0FEa0NJO0VBQ0UsWUFBQTtBQ2hDTjtBRG1DTTtFQUNFLGtCQWhNZTtBQytKdkI7QURzQ0k7RUFDRSxpQkFBQTtBQ3BDTjtBRHdDSTtFQUNFLGtCQUFBO0FDdENOO0FEd0NJO0VBQ0UsaUJBQUE7QUN0Q047QUQwQ0k7RUFDRSxrQkFBQTtBQ3hDTjtBRCtDSTtFQUNFLGtCQUFBO0FDN0NOO0FEa0RJO0VBQ0Usd0NBQUE7QUNoRE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLWNvbG9yOiAjOTk5O1xyXG4kcGxhY2Vob2xkZXItY29sb3I6ICM5OTk7XHJcbiRwYWRkaW5nOiAxNnB4O1xyXG4kaXRlbS1wYWRkaW5nLWVuZDogMTZweDtcclxuJGl0ZW0tcGFkZGluZy1lbmQtaW9zOiA4cHg7XHJcbi5pdGVtIHtcclxuICAmLWlvbmljLXNlbGVjdGFibGUge1xyXG4gICAgLy8gVmVydGljYWwgYWxsaWdubWVudCBmb3IgbGFiZWwuXHJcbiAgICAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uaWMtc2VsZWN0YWJsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgJi1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLypcclxuICAgICAgV2hlbiB0aGVyZSdzIG5vIGlvbi1sYWJlbCB3ZSBuZWVkIHRvIGtlZXBcclxuICAgICAgdmFsdWUgYW5kIGljb24gYWxsaWduZWQgdG8gdGhlIHJpZ2h0IG91cnNlbHZlcy5cclxuICAgICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgJi1oYXMtcGxhY2Vob2xkZXIge1xyXG4gICAgLmlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvciwgJHBsYWNlaG9sZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi12YWx1ZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgJi1pbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvciwgJGljb24tY29sb3IpO1xyXG4gICAgfVxyXG4gICAgJi10ZW1wbGF0ZSB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgJi1pb3Mge1xyXG4gICAgLmlvbmljLXNlbGVjdGFibGUtdmFsdWUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaW9uaWMtc2VsZWN0YWJsZS1pY29uIHtcclxuICAgICAgJi1pbm5lciB7XHJcbiAgICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJi1iYWNrZ3JvdW5kIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuMDU7XHJcbiAgICB9XHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtY292ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gICYtYWRkLWl0ZW0tdGVtcGxhdGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICYtaW5uZXIge1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICA+IGlvbi1mb290ZXIge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJjpub3QoJi1oYXMtbGFiZWwpIHtcclxuICAgIC8qT2NjdXB5IDEwMCUgb2Ygd2lkdGggd2hlbiB0aGVyZSdzIG5vIGxhYmVsLiovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICYtdmFsdWUge1xyXG4gICAgLy8gICAmLWl0ZW0ge1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gICYtbGFiZWwtc3RhY2tlZCxcclxuICAmLWxhYmVsLWZsb2F0aW5nIHtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxOXB4O1xyXG4gICAgfVxyXG4gICAgLmlvbmljLXNlbGVjdGFibGUtaWNvbi1pbm5lciB7XHJcbiAgICAgIHRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgJi5pb25pYy1zZWxlY3RhYmxlLWlvcyB7XHJcbiAgICAgIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pb25pYy1zZWxlY3RhYmxlLWljb24taW5uZXIge1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtbGFiZWwtZGVmYXVsdCxcclxuICAmLWxhYmVsLWZpeGVkIHtcclxuICAgIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXN0YXJ0LCAkcGFkZGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtbGFiZWwtZml4ZWQ6bm90KCYtaGFzLXZhbHVlKSB7XHJcbiAgICAuaW9uaWMtc2VsZWN0YWJsZS12YWx1ZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWRkaW5nLXN0YXJ0LCAkcGFkZGluZykgKyAxMXB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pb25pYy1zZWxlY3RhYmxlLW1vZGFsIHtcclxuICAuaW9uaWMtc2VsZWN0YWJsZS1ncm91cCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogJGl0ZW0tcGFkZGluZy1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb25pYy1zZWxlY3RhYmxlLWl0ZW0tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgJi1pb3Mge1xyXG4gICAgLmlvbmljLXNlbGVjdGFibGUtbWVzc2FnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC5pb25pYy1zZWxlY3RhYmxlLWdyb3VwIHtcclxuICAgICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogJGl0ZW0tcGFkZGluZy1lbmQtaW9zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtbWQge1xyXG4gICAgLmlvbmljLXNlbGVjdGFibGUtbWVzc2FnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtY2FuLWNsZWFyLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtbXVsdGlwbGUge1xyXG4gICAgLmZvb3RlciAuY29sOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmcgLyAyO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciAuY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nIC8gMjtcclxuICAgIH1cclxuICB9XHJcbiAgJi5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLXNlYXJjaGluZyB7XHJcbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC1pcy1hZGQtaXRlbS10ZW1wbGF0ZS12aXNpYmxlIHtcclxuICAgIC8vIEhpZGUgc2Nyb2xsIGZyb20gbGlzdCBjb250ZW50LlxyXG4gICAgLy8gVXNlIGltbWVkaWF0ZSBjaGlsZCBzZWxlY3RvciBhcyB3ZSBkb24ndCB3YW50IHRvIGFwcGx5IHRoZSBydWxlXHJcbiAgICAvLyB0byBjb250ZW50IGluc2lkZSBhZGQgaXRlbSB0ZW1wbGF0ZSBkZWZpbmVkIGJ5IHVzZXIuXHJcbiAgICA+IC5jb250ZW50ID4gLnNjcm9sbC1jb250ZW50IHtcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLml0ZW0taW9uaWMtc2VsZWN0YWJsZSAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBub3JtYWw7XG59XG4uaXRlbS1pb25pYy1zZWxlY3RhYmxlIGlvbi1sYWJlbCB7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbn1cblxuLmlvbmljLXNlbGVjdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA0NSU7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qXG4gICAgV2hlbiB0aGVyZSdzIG5vIGlvbi1sYWJlbCB3ZSBuZWVkIHRvIGtlZXBcbiAgICB2YWx1ZSBhbmQgaWNvbiBhbGxpZ25lZCB0byB0aGUgcmlnaHQgb3Vyc2VsdmVzLlxuICAqL1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1oYXMtcGxhY2Vob2xkZXIgLmlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvciwgIzk5OSk7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS12YWx1ZSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLXZhbHVlLWl0ZW0ge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLXZhbHVlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtaWNvbi1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1cHg7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvciwgIzk5OSk7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1pY29uLXRlbXBsYXRlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtaW9zIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtaW9zIC5pb25pYy1zZWxlY3RhYmxlLWljb24taW5uZXIge1xuICB0b3A6IDE5cHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1zcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1zcGlubmVyLWJhY2tncm91bmQge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC4wNTtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLXNwaW5uZXIgaW9uLXNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtY292ZXIge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuLmlvbmljLXNlbGVjdGFibGUtYWRkLWl0ZW0tdGVtcGxhdGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS1pbm5lciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS1pbm5lciA+IGlvbi1mb290ZXIge1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5pb25pYy1zZWxlY3RhYmxlOm5vdCguaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwpIHtcbiAgLypPY2N1cHkgMTAwJSBvZiB3aWR0aCB3aGVuIHRoZXJlJ3Mgbm8gbGFiZWwuKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLXN0YWNrZWQsIC5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZsb2F0aW5nIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlLCAuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1mbG9hdGluZyAuaW9uaWMtc2VsZWN0YWJsZS12YWx1ZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWluLWhlaWdodDogMTlweDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLXN0YWNrZWQgLmlvbmljLXNlbGVjdGFibGUtaWNvbi1pbm5lciwgLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtZmxvYXRpbmcgLmlvbmljLXNlbGVjdGFibGUtaWNvbi1pbm5lciB7XG4gIHRvcDogN3B4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtc3RhY2tlZC5pb25pYy1zZWxlY3RhYmxlLWlvcyAuaW9uaWMtc2VsZWN0YWJsZS12YWx1ZSwgLmlvbmljLXNlbGVjdGFibGUtbGFiZWwtZmxvYXRpbmcuaW9uaWMtc2VsZWN0YWJsZS1pb3MgLmlvbmljLXNlbGVjdGFibGUtdmFsdWUge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkLmlvbmljLXNlbGVjdGFibGUtaW9zIC5pb25pYy1zZWxlY3RhYmxlLWljb24taW5uZXIsIC5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZsb2F0aW5nLmlvbmljLXNlbGVjdGFibGUtaW9zIC5pb25pYy1zZWxlY3RhYmxlLWljb24taW5uZXIge1xuICB0b3A6IDhweDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWRlZmF1bHQgLmlvbmljLXNlbGVjdGFibGUtdmFsdWUsIC5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZpeGVkIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXN0YXJ0LCAxNnB4KTtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZpeGVkOm5vdCguaW9uaWMtc2VsZWN0YWJsZS1oYXMtdmFsdWUpIC5pb25pYy1zZWxlY3RhYmxlLXZhbHVlIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZGRpbmctc3RhcnQsICRwYWRkaW5nKSArIDExcHgpO1xufVxuXG4uaW9uaWMtc2VsZWN0YWJsZS1tb2RhbCAuaW9uaWMtc2VsZWN0YWJsZS1ncm91cCBpb24taXRlbS1kaXZpZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLW1vZGFsIC5pb25pYy1zZWxlY3RhYmxlLWl0ZW0tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC1pb3MgLmlvbmljLXNlbGVjdGFibGUtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlvcyAuaW9uaWMtc2VsZWN0YWJsZS1ncm91cCBpb24taXRlbS1kaXZpZGVyIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtbWQgLmlvbmljLXNlbGVjdGFibGUtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuLmlvbmljLXNlbGVjdGFibGUtbW9kYWwuaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC1jYW4tY2xlYXIuaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC1pcy1tdWx0aXBsZSAuZm9vdGVyIC5jb2w6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWNhbi1jbGVhci5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLW11bHRpcGxlIC5mb290ZXIgLmNvbDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLXNlYXJjaGluZyAuc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLWFkZC1pdGVtLXRlbXBsYXRlLXZpc2libGUgPiAuY29udGVudCA+IC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5pb25pYy1zZWxlY3RhYmxlLW1vZGFsIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable.component.ts ***!
  \***************************************************************************/
/*! exports provided: IonicSelectableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return IonicSelectableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-selectable-add-item-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.ts");
/* harmony import */ var _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-selectable-close-button-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.ts");
/* harmony import */ var _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-selectable-footer-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.ts");
/* harmony import */ var _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-selectable-group-end-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.ts");
/* harmony import */ var _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-selectable-group-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-group-template.directive.ts");
/* harmony import */ var _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-selectable-header-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-header-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ionic-selectable-item-end-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic-selectable-item-icon-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ionic-selectable-item-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-template.directive.ts");
/* harmony import */ var _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ionic-selectable-message-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-message-template.directive.ts");
/* harmony import */ var _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ionic-selectable-modal.component */ "./src/app/components/ionic-selectable/ionic-selectable-modal.component.ts");
/* harmony import */ var _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ionic-selectable-placeholder-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.ts");
/* harmony import */ var _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ionic-selectable-search-fail-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.ts");
/* harmony import */ var _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ionic-selectable-title-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-title-template.directive.ts");
/* harmony import */ var _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ionic-selectable-value-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-value-template.directive.ts");
/* harmony import */ var _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ionic-selectable-icon-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.ts");

var IonicSelectableComponent_1;
// tslint:disable-next-line:max-line-length



















let IonicSelectableComponent = IonicSelectableComponent_1 = class IonicSelectableComponent {
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
      * Group property to display, e.g. `'country.name'`.
      * **Note**: `items` should be an object array.
      * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
      *
      * @default null
      * @memberof IonicSelectableComponent
      */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * @default '40px'
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * @default 'Search'
         * @memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * @default 'No items found.'
         * @memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * @default 'Clear'
         * @memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * @default 'Add'
         * @memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * @default 'OK'
         * @memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * @default 'Cancel'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * @memberof IonicSelectableComponent
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchFail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * @memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * @memberof IonicSelectableComponent
         */
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * @default 250
         * @memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSaveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = () => {
            return null;
        };
        this.propagateOnChange = (_) => { };
        this.propagateOnTouched = () => { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    get _hasValueCssClass() {
        return this.hasValue();
    }
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicSelectableComponent
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicSelectableComponent
     */
    get searchText() {
        return this._searchText;
    }
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
   * Determines whether Confirm button is visible for single selection.
   * By default Confirm button is visible only for multiple selection.
   * **Note**: It is always true for multiple selection and cannot be changed.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
   *
   * @default true
   * @memberof IonicSelectableComponent
   */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canClear() {
        return this._canClear;
    }
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get isMultiple() {
        return this._isMultiple;
    }
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canAddItem() {
        return this._canAddItem;
    }
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    initFocus() { }
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    _emitOnSearchSuccessOrFail(isSuccess) {
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            const selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                const filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    const items = group.items.filter(item => {
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    _deleteSelectedItem(item) {
        let itemToDeleteIndex;
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
    }
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            const footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }, 100);
    }
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    _clear() {
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    _select(item) {
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    _confirm() {
        this.confirm();
        this._close();
    }
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every(group => {
            return !group.items || group.items.length === 0;
        });
    }
    _countFooterButtons() {
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const groupValue = this._getPropertyValue(item, this.groupValueField), group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    /* ControlValueAccessor */
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /* .ControlValueAccessor */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    }
    ngDoCheck() {
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    addItem(item) {
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicSelectableComponent
   */
    deleteItem(item) {
        const self = this;
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const values = this.value.filter(value => {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        const items = this.items.filter(_item => {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    open() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const modalOptions = {
                component: _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_14__["IonicSelectableModalComponent"],
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                });
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    close() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const hasItems = items && items.length;
            let itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(itemToToggle => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(item => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToTop() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve();
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToBottom() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve();
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
};
IonicSelectableComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "_cssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-ios'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], IonicSelectableComponent.prototype, "_isIos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-md'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], IonicSelectableComponent.prototype, "_isMD", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-is-multiple'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_isMultipleCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-has-value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasValueCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-has-placeholder'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasPlaceholderCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-has-label'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasIonLabelCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-label-default'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasDefaultIonLabelCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-label-fixed'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasFixedIonLabelCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-label-stacked'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasStackedIonLabelCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-label-floating'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IonicSelectableComponent.prototype, "_hasFloatingIonLabelCssClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], IonicSelectableComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "itemsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-is-enabled'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isEnabled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "isEnabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shouldBackdropClose'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "shouldBackdropClose", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "modalCssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], IonicSelectableComponent.prototype, "modalEnterAnimation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], IonicSelectableComponent.prototype, "modalLeaveAnimation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "isConfirmButtonEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hasConfirmButton'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "hasConfirmButton", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "itemValueField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "itemTextField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "groupValueField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "groupTextField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "canSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isOnSearchEnabled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "isOnSearchEnabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ionic-selectable-can-clear'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('canClear'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "canClear", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "hasInfiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "hasVirtualScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "virtualScrollApproxItemHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "searchPlaceholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isMultiple'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "isMultiple", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "searchFailText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "clearButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "addButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "confirmButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "closeButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "shouldFocusSearchbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "headerColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], IonicSelectableComponent.prototype, "groupColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "closeButtonSlot", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "itemIconSlot", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onSearchFail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onSearchSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onInfiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onClear", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], IonicSelectableComponent.prototype, "searchDebounce", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], IonicSelectableComponent.prototype, "disabledItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "shouldStoreItemValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "canSaveItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "canDeleteItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('canAddItem'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], IonicSelectableComponent.prototype, "canAddItem", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onSaveItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onDeleteItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], IonicSelectableComponent.prototype, "onAddItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableValueTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "valueTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableItemTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "itemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableItemEndTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "itemEndTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableTitleTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "titleTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_15__["IonicSelectablePlaceholderTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "placeholderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableMessageTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "messageTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableGroupTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "groupTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableGroupEndTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "groupEndTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableCloseButtonTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "closeButtonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectableSearchFailTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "searchFailTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableAddItemTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "addItemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableFooterTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "footerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableHeaderTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemIconTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "itemIconTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_19__["IonicSelectableIconTemplateDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IonicSelectableComponent.prototype, "iconTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IonicSelectableComponent.prototype, "virtualScrollHeaderFn", void 0);
IonicSelectableComponent = IonicSelectableComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ionic-selectable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ionic-selectable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ionic-selectable/ionic-selectable.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => IonicSelectableComponent_1),
                multi: true
            }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ionic-selectable.component.scss */ "./src/app/components/ionic-selectable/ionic-selectable.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], IonicSelectableComponent);



/***/ }),

/***/ "./src/app/components/ionic-selectable/ionic-selectable.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ionic-selectable/ionic-selectable.module.ts ***!
  \************************************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableIconTemplateDirective, IonicSelectableComponent, IonicSelectableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModule", function() { return IonicSelectableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-selectable-add-item-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.ts");
/* harmony import */ var _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-selectable-close-button-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.ts");
/* harmony import */ var _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-selectable-footer-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.ts");
/* harmony import */ var _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-selectable-group-end-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.ts");
/* harmony import */ var _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-selectable-group-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-group-template.directive.ts");
/* harmony import */ var _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ionic-selectable-header-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-header-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic-selectable-item-end-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ionic-selectable-item-icon-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.ts");
/* harmony import */ var _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ionic-selectable-item-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-item-template.directive.ts");
/* harmony import */ var _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ionic-selectable-message-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-message-template.directive.ts");
/* harmony import */ var _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ionic-selectable-modal.component */ "./src/app/components/ionic-selectable/ionic-selectable-modal.component.ts");
/* harmony import */ var _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ionic-selectable-placeholder-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.ts");
/* harmony import */ var _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ionic-selectable-search-fail-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.ts");
/* harmony import */ var _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ionic-selectable-title-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-title-template.directive.ts");
/* harmony import */ var _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ionic-selectable-value-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-value-template.directive.ts");
/* harmony import */ var _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ionic-selectable-icon-template.directive */ "./src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.ts");
/* harmony import */ var _ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ionic-selectable.component */ "./src/app/components/ionic-selectable/ionic-selectable.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableAddItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableCloseButtonTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableFooterTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableGroupEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableGroupTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableHeaderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableItemIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__["IonicSelectableMessageTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__["IonicSelectableModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectablePlaceholderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableSearchFailTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableTitleTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__["IonicSelectableValueTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__["IonicSelectableIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return _ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__["IonicSelectableComponent"]; });








































const components = [_ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__["IonicSelectableComponent"], _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__["IonicSelectableModalComponent"]], directives = [
    _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__["IonicSelectableValueTemplateDirective"],
    _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableItemTemplateDirective"],
    _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemEndTemplateDirective"],
    _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableTitleTemplateDirective"],
    _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectablePlaceholderTemplateDirective"],
    _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__["IonicSelectableMessageTemplateDirective"],
    _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableGroupTemplateDirective"],
    _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableGroupEndTemplateDirective"],
    _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableCloseButtonTemplateDirective"],
    _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableSearchFailTemplateDirective"],
    _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableAddItemTemplateDirective"],
    _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableFooterTemplateDirective"],
    _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableHeaderTemplateDirective"],
    _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableItemIconTemplateDirective"],
    _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__["IonicSelectableIconTemplateDirective"]
];
let IonicSelectableModule = class IonicSelectableModule {
};
IonicSelectableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [
            ...components,
            ...directives
        ],
        exports: [
            ...components,
            ...directives
        ],
        entryComponents: components
    })
], IonicSelectableModule);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DatasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasService", function() { return DatasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let DatasService = class DatasService {
    constructor(http) {
        this.http = http;
        this.headers_json = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.headers_form_data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "multipart/form-data");
        this.headers_url_encoded = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', "application/x-www-form-urlencoded");
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
        this.tipsData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.tipsTodayData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.puntuactions = [];
        this.waitersName = [];
    }
    getTips() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tips, { headers: this.headers_json })
            .subscribe((responseData) => {
            this.tipsData.next(responseData);
        });
        return;
    }
    getTipToday() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tips_todays, { headers: this.headers_json });
    }
    postTipsToday(tipsTodayForm) {
        console.log(tipsTodayForm);
        let myTipsTodayForm = {
            tipsAmount: tipsTodayForm
        };
        console.log(myTipsTodayForm);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tips_todays, JSON.stringify(myTipsTodayForm), { headers: this.headers_json });
    }
    postTips(tipsForm) {
        let myTipsForm = {};
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tips, { headers: this.headers_json })
            .subscribe((responseData) => {
        });
    }
    postDate(dateForm) {
        console.log(dateForm);
        let date = {
            date: dateForm,
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].set_dates, JSON.stringify(date), { headers: this.headers_json });
    }
    getPoints() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].puntuactions, { headers: this.headers_json });
    }
    postWaitersForm(waitersForm) {
        // console.log(waitersForm);
        this.puntuactions = [];
        this.waitersName = [];
        let waiters = waitersForm;
        waiters.forEach(waiter => {
            // console.log(waiter.first_name, waiter.last_name);
            this.waitersName.push({
                first_name: waiter.first_name,
                last_name: waiter.last_name,
            });
            console.log(this.waitersName);
            waiter.points.map(point => {
                console.log(point);
                this.puntuactions.push({
                    id: point.id,
                    criteria: point.criteria,
                    points: point.points,
                });
            });
            // let myPostData;
            // myPostData = {
            //     first_name: waiter.first_name,
            //     last_name: waiter.last_name,
            //     puntuactions: this.puntuactions,
            // }
            // console.log(myPostData);
        });
        // for (let waiter of waiters) {
        // };
        // console.log(this.puntuactions);
        // let formData = new FormData();
        // formData.append('first_name', points.first_name);
        // formData.append('last_name', points.last_name);
        // formData.append('puntuactions', JSON.stringify(puntuactions));
        // return this.http.post(environment.api_url + environment.waiters, myPostData, { headers: this.headers_json });
        return;
    }
};
DatasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DatasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DatasService);



/***/ })

}]);
//# sourceMappingURL=default~calculator-calculator-module~calculator-slides-calculator-slides-module-es2015.js.map