(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_secure_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios/secure/auth.service */ "./src/app/servicios/secure/auth.service.ts");
/* harmony import */ var _componentes_noService_noservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/noService/noservice.component */ "./src/app/componentes/noService/noservice.component.ts");
/* harmony import */ var _componentes_tokenError_tokenerror_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/tokenError/tokenerror.component */ "./src/app/componentes/tokenError/tokenerror.component.ts");
/* harmony import */ var _componentes_masterPage_masterpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/masterPage/masterpage.component */ "./src/app/componentes/masterPage/masterpage.component.ts");







var routes = [
    // {path: '', component: AppComponent, canActivate: [AuthService] },
    { path: '', component: _componentes_masterPage_masterpage_component__WEBPACK_IMPORTED_MODULE_6__["MasterPageComponent"], canActivate: [_servicios_secure_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]] },
    { path: 'noservice', component: _componentes_noService_noservice_component__WEBPACK_IMPORTED_MODULE_4__["NoserviceComponent"] },
    { path: 'tokenerror', component: _componentes_tokenError_tokenerror_component__WEBPACK_IMPORTED_MODULE_5__["TokenerrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-rut */ "./node_modules/ng2-rut/dist/ng2-rut.module.js");
/* harmony import */ var ng2_rut__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_rut__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servicios_simulacionAutomotriz_simulacion_automotriz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/simulacionAutomotriz/simulacion-automotriz.service */ "./src/app/servicios/simulacionAutomotriz/simulacion-automotriz.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _componentes_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/app.component */ "./src/app/componentes/app.component.ts");
/* harmony import */ var _directivas_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directivas/only-number/only-number.directive */ "./src/app/directivas/only-number/only-number.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _componentes_noService_noservice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/noService/noservice.component */ "./src/app/componentes/noService/noservice.component.ts");
/* harmony import */ var _componentes_tokenError_tokenerror_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/tokenError/tokenerror.component */ "./src/app/componentes/tokenError/tokenerror.component.ts");
/* harmony import */ var _componentes_masterPage_masterpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/masterPage/masterpage.component */ "./src/app/componentes/masterPage/masterpage.component.ts");
/* harmony import */ var _servicios_secure_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicios/secure/auth.service */ "./src/app/servicios/secure/auth.service.ts");
/* harmony import */ var _servicios_secure_wstoken_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicios/secure/wstoken.service */ "./src/app/servicios/secure/wstoken.service.ts");
/* harmony import */ var _pipe_rut_chile_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/rut-chile.pipe */ "./src/app/pipe/rut-chile.pipe.ts");
/* harmony import */ var _directivas_rut_chile_rut_chile_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directivas/rut-chile/rut-chile.directive */ "./src/app/directivas/rut-chile/rut-chile.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _componentes_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _directivas_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__["OnlyNumberDirective"],
                _componentes_noService_noservice_component__WEBPACK_IMPORTED_MODULE_10__["NoserviceComponent"],
                _componentes_tokenError_tokenerror_component__WEBPACK_IMPORTED_MODULE_11__["TokenerrorComponent"],
                _componentes_masterPage_masterpage_component__WEBPACK_IMPORTED_MODULE_12__["MasterPageComponent"],
                _pipe_rut_chile_pipe__WEBPACK_IMPORTED_MODULE_15__["RutChilePipe"],
                _directivas_rut_chile_rut_chile_directive__WEBPACK_IMPORTED_MODULE_16__["RutChileDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_rut__WEBPACK_IMPORTED_MODULE_3__["Ng2Rut"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]
            ],
            providers: [_servicios_simulacionAutomotriz_simulacion_automotriz_service__WEBPACK_IMPORTED_MODULE_4__["SimulacionAutomotrizService"], _servicios_secure_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _servicios_secure_wstoken_service__WEBPACK_IMPORTED_MODULE_14__["WstokenService"]],
            bootstrap: [_componentes_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/app.component.css":
/*!***********************************************!*\
  !*** ./src/app/componentes/app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/app.component.html":
/*!************************************************!*\
  !*** ./src/app/componentes/app.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/componentes/app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/componentes/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/componentes/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/componentes/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/componentes/masterPage/masterpage.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/masterPage/masterpage.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hc3RlclBhZ2UvbWFzdGVycGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/masterPage/masterpage.component.html":
/*!******************************************************************!*\
  !*** ./src/app/componentes/masterPage/masterpage.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <div class=\"row hidden-xs\" >\n      <div class=\"col-md-12\" style=\"padding-left: 0px;\">\n        <h3 style=\"font-size:22px;color:#797575\"><b>Simulador Crédito Automotriz</b></h3>\n        <h4 style=\"font-size:20px;color:#797575;font-weight: Semibold\">Te ayudamos a encontrar y financiar la mejor alternativa</h4>\n      </div>\n  </div>\n  <div class=\"row borderBlueMenu\">\n    <div id=\"menu1\" class=\"col-xs-6 col-sm-4 col-md-3 color activeApp\" (click)=\"seleccionaMenu(1)\" style=\"padding-right: 0px;padding-left: 0px;border: 1px solid #D3D6D4;cursor:pointer;\">\n        <img src=\"assets/img/Bitmap.png\" class=\"img-responsive\" width=\"100%\" >\n          <div class=\"overlay\" >\n              <div class=\"textOverlay tamanoLetraMenu\" >Quiero la Menor Cuota Mensual</div>\n           </div>\n\n    </div>\n    <div id=\"menu2\" class=\"col-xs-6 col-sm-4 col-md-3 color\" (click)=\"seleccionaMenu(2)\" style=\"padding-right: 0px;padding-left: 0px;border: 1px solid #D3D6D4;cursor:pointer;\">\n          <img src=\"assets/img/auto-simuladores.jpg\" class=\"img-responsive\" width=\"100%\">\n          <div class=\"overlay\" >\n              <div class=\"textOverlay tamanoLetraMenu\" >¿A qué auto puedo optar?</div>\n           </div>\n\n    </div>\n  </div>\n  <div class=\"row formatoCajaTipoCredito\" >\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n      <div class=\"row\">\n          <br/>\n          <div class=\"col-xs-12 col-sm-4 col-md-4 paddingSelect\">\n              <div class=\"form-group\">\n                  <label for=\"sel-tipo-credito\" style=\"color:#00548E\">\n                      Tipo de Crédito\n                      <img [hidden]=\"!toolTipTipoCredito\" data-toggle=\"tooltip\" title=\"Tu nuevo auto con la menor cuota mensual.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n                      <img [hidden]=\"toolTipTipoCredito\" data-toggle=\"tooltip\" title=\"Tu nuevo auto con una menor cuota final. Puedes cambiar tu auto cada 2 o 3 años.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n                  </label>\n                  <!--<i class=\"glyphicon glyphicon-info-sign\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Este tipo de crédito\"></i>-->\n\n                  <select class=\"form-control tamanoLetraSelect\" [ngModel]='valorTipoCredito' (ngModelChange)=\"changeValorTipoCredito($event)\" id=\"sel-tipo-credito\" >\n                    <option>Automotriz Inteligente</option>\n                    <option>Automotriz Inteligente Protegido</option>\n                  </select>\n              </div>\n              <div class=\"horizontal-line visible-xs-block\" style=\"margin-top:20px\"></div>\n              <br class=\"visible-xs-block\"/>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-4 col-md-4\" >\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-11 col-sm-offset-1 col-md-10 col-md-offset-2\">\n                        <label for=\"switch-seguros\" style=\"color:#00548E;\">Seguros Asociados</label>\n                        <img  data-toggle=\"tooltip\" title=\"Tienes la posibilidad de incluirlo cómodamente en tu Crédito Automotriz o bien contratarlo por tu cuenta con otro proveedor.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n                    </div>\n                </div>\n\n                <div class=\"row\" id=\"switch-seguros\">\n                  <div class=\"col-xs-3 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2\">\n                      <label class=\"switch\">\n                          <input type=\"checkbox\" [checked]=\"checkDesgravamen\" (change)=\"changeDesgravamen($event)\">\n                          <span class=\"slider round\"></span>\n                      </label>\n                  </div>\n                  <div class=\"col-xs-9 col-sm-7 col-md-6\" style=\"padding-left: 0px;padding-right: 0px;\">\n                      <p data-toggle=\"tooltip\" title=\"Incluido en tu Crédito Automotriz.\" style=\"white-space:auto;color:#666666\" >{{tipo_seguro_desgravamen}}</p>\n                  </div>\n                </div>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-4 col-md-4\">\n              <div class=\"row hidden-xs\">\n                  <div class=\"col-xs-12 col-sm-11 col-sm-offset-1 col-md-10 col-md-offset-2\">\n                      <label for=\"switch-seguros\" style=\"visibility: hidden;\" >Seguros Asociados</label>\n                  </div>\n              </div>\n\n              <div class=\"row\" id=\"switch-seguros\">\n                <div class=\"col-xs-3 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-1\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [checked]=\"checkProteccion\" (change)=\"changeProteccion($event)\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                </div>\n                <div class=\"col-xs-9 col-sm-7 col-md-8\" style=\"padding-left: 0px;padding-top:8px\">\n                    <p style=\"white-space:auto;color:#666666\">Protección Laboral</p>\n                </div>\n              </div>\n              <br class=\"visible-xs-block\"/>\n              <div class=\"horizontal-line visible-xs-block\"></div>\n              <br class=\"visible-xs-block\"/>\n          </div>\n      </div>\n      <div class=\"horizontal-line hidden-xs\"></div>\n      <br class=\"hidden-xs\"/>\n      <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-4 col-md-4 paddingSelect\">\n              <div class=\"form-group\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-8 col-md-8\">\n                          <label for=\"pie\" style=\"color:#00548E\">Pie\n                            <img [hidden]=\"!toolTipPie\" data-toggle=\"tooltip\" title=\"Hasta un 60% de pie con un mínimo del 20% del valor de tu auto.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n                            <img [hidden]=\"toolTipPie\" data-toggle=\"tooltip\" title=\"Hasta un 50% de pie con un mínimo del 20% del valor de tu auto.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n                          </label>\n                          <input type=\"text\" class=\"form-control\" id=\"pie\" placeholder=\"$15.000.000\" [ngModel]='valorPie' (ngModelChange)=\"valorPie=$event\" (focusin)=\"guardaUltimoValor()\" (blur)=\"blurInputPie($event)\" name='inputPie' style=\"text-align:right;border: 2px solid #D3D6D4;font-weight: bold;font-size:17px;color:#797575\" appOnlyNumber >\n                      </div>\n                      <div class=\"col-xs-4 col-md-4\" style=\"padding-left:0px\">\n                          <label for=\"porcentaje\" style=\"visibility: hidden;\">%</label>\n                          <input type=\"text\" class=\"form-control\" id=\"porcentaje\" [disabled]=\"true\" placeholder=\"50%\" [ngModel]='valorPorcentaje' style=\"text-align:center;background-color: #DFE5E5;font-weight: bold;font-size:17px; color:#797575\">\n                      </div>\n                  </div>\n                  <p style=\"font-size: 11px;color:#7E7E74\">Debe ser entre un 20% y un {{valorLimiteSuperiorPie}} del valor del vehículo</p>\n\n              </div>\n              <div class=\"horizontal-line visible-xs-block\" style=\"margin-top:20px\"></div>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-4 col-md-4\">\n              <br/>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-3 col-sm-offset-1 col-md-2 col-md-offset-2\">\n                    <h5 style=\"font-size:14px;color:#00548E\">Cuotas</h5>\n                </div>\n                <div class=\" col-xs-4 col-sm-3 col-md-3\" style=\"margin-top:2%\">\n                    <div class=\"radio radio-info radio-inline\">\n                        <input type=\"radio\" id=\"inlineRadio1\" value=\"25\" name=\"radioInline\" [ngModel]=\"valorCheckCuota\" (ngModelChange)=\"changeValorCheckCuota($event)\">\n                        <label for=\"inlineRadio1\" style=\"color:#797575;font-size:16px\"> 25 </label>\n                    </div>\n\n                </div>\n                <div class=\" col-xs-4 col-sm-5 col-md-5\" style=\"margin-top:2%\">\n                    <div class=\"radio radio-info radio-inline\">\n                        <input type=\"radio\" id=\"inlineRadio2\" value=\"37\" name=\"radioInline\" [ngModel]=\"valorCheckCuota\" (ngModelChange)=\"changeValorCheckCuota($event)\">\n                        <label for=\"inlineRadio2\" style=\"color:#797575;font-size:16px\"> 37 </label>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\" col-xs-12 col-sm-11 col-sm-offset-1 col-md-10 col-md-offset-2\">\n                      <p style=\"font-size:13px;color:#00548E\">Primera Cuota: <b>{{fecha_primera_cuota}}</b></p>\n                  </div>\n              </div>\n              <div class=\"horizontal-line visible-xs-block \" style=\"margin-top:15px\"></div>\n              <br class=\"visible-xs-block \"/>\n          </div>\n          <div class=\"col-xs-12 col-sm-4 col-md-4 arregloTasa\" >\n\n              <div class=\"row\">\n                <br class=\"hidden-xs\"/>\n                  <div class=\"col-xs-6 col-sm-7 col-md-7 cajaCaePadding\" >\n                    <label for=\"tasa-mensual\" class=\"tamanoLetraTasaMensual\">Tasa Interés Mensual</label>\n                    <input type=\"text\" class=\"form-control\" id=\"tasa-mensual\" value=\"{{valor_tasa_mensual}}\" [disabled]=\"true\" placeholder=\"0,8%\" style=\"text-align:left;background-color: #DFE5E5;font-weight: bold;color:#797575;font-size:22px\">\n                  </div>\n                  <div class=\"col-xs-6 col-sm-5 col-md-5 arregloCae\" >\n                      <label for=\"porcentaje\" style=\"font-size:14px;color:#00548E\">CAE\n                        <img data-toggle=\"tooltip\" title=\"Elige el crédito con la menor CAE para financiar tu proyecto.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n\n                      </label>\n                      <input type=\"text\" class=\"form-control\" id=\"porcentaje\" value=\"{{valor_cae}}\" [disabled]=\"true\" placeholder=\"12,78%\" style=\"text-align:center;background-color: #DFE5E5;font-weight: bold;color:#797575;font-size:22px\">\n                  </div>\n              </div>\n              <br class=\"hidden-md hidden-sm\"/>\n          </div>\n      </div>\n    </div>\n\n  </div>\n  <!--<hr style=\"color: #0056b2;\" />-->\n  <div class=\"horizontal-line visible-xs\" style=\"margin-top:10px\"></div>\n  <div class=\"row mismoAlto\">\n      <div class=\"col-xs-12 col-sm-7 col-md-7\" >\n        <div class=\"row anchoCajaResumenIzq\">\n          <div class=\"col-md-12\">\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-7 col-md-8\">\n                    <h4 style=\"font-weight: SemiBold;color:#797575;font-size:20px\">Precio del vehículo</h4>\n                </div>\n                <div class=\"col-xs-12 col-sm-5 col-md-4 cajaValorPadding\" >\n                    <input id=\"inputPrecioVehiculo\" type=\"text\" [disabled]=\"true\" class=\"form-control\" placeholder=\"$25.000.000\" [ngModel]='precioVehiculo' (ngModelChange)=\"changePrecioVehiculo($event)\" style=\"text-align:right;font-weight: SemiBold;font-size:22px;color:#797575\" appOnlyNumber>\n                    <span [hidden]='!errorPrecioVehiculo' style=\"color:red;font-weight: bold;float:right;position:absolute\">\n                      {{mensajeErrorPrecioVehiculo}}\n                    </span>\n                </div>\n            </div>\n            <br/>\n            <br/>\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 sliderPrecio\">\n                  <input class=\"range-slider__range\" id=\"range-slider__range_1\" type=\"range\" [ngModel]='rangePrecioVehiculo' (ngModelChange)=\"changeRangePrecioVehiculo($event)\" step='500000' min=\"7000000\" max=\"80000000\"  >\n                  <span style=\"float: left;padding-top:2%;font-size:17px;color:#797575\">$7.000.000</span><span style=\"float: right;padding-top:2%;font-size:17px;color:#797575\">$80.000.000</span>\n              </div>\n            </div>\n            <br class=\"visible-xs-block\"/>\n            <div class=\"horizontal-line visible-xs-block\" style=\"margin-top:10px\"></div>\n            <br class=\"hidden-xs\"/>\n            <br/>\n            <br class=\"hidden-xs\"/>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-7 col-md-8\">\n                    <h4 style=\"font-weight: SemiBold;color:#797575;font-size:20px\">Valor cuota mensual</h4>\n                </div>\n                <div class=\"col-xs-12 col-sm-5 col-md-4 cajaValorPadding\">\n                    <input id=\"inputValorCuotaMensual\" type=\"text\" class=\"form-control inputVerde\" placeholder=\"$142.500\" [ngModel]='valorCuota' [disabled]=\"true\" (ngModelChange)=\"changeValorCuota($event)\"  style=\"text-align:right;font-weight: SemiBold;font-size:22px;color:#797575\" appOnlyNumber>\n                </div>\n            </div>\n            <br/>\n            <br/>\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-12 col-md-12 sliderCuota\">\n                <input class=\"range-slider__range\" id=\"range-slider__range_2\" type=\"range\" [ngModel]='rangeValorCuota' (ngModelChange)=\"changeRangeValorCuota($event)\"  step='10000' min=\"20000\" max=\"2000000\">\n                <span style=\"float: left;padding-top:2%;font-size:17px;color:#797575\">$20.000</span><span style=\"float: right;padding-top:2%;font-size:17px;color:#797575\">$2.000.000</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br class=\"visible-xs\"/>\n        <div class=\"horizontal-line visible-xs\"></div>\n      </div>\n      <div class=\"col-xs-12 col-sm-5 col-md-5 ancho2\">\n          <div class=\"row anchoCajaResumen bordeCajaResumen\" >\n            <br/>\n            <div class=\"col-sm-12 col-md-12\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                  <h4 align=\"center\" style=\"color:#A9AF19;font-weight: bold;font-size:19.52px\">¿Cómo es el financiamiento?</h4>\n                </div>\n              </div>\n              <div class=\"row\" style=\"border-radius: 25px;border: 1px solid #A7B749;padding:0%;margin-left:6%;width:90%;\">\n                  <div class=\"col-xs-5 col-sm-5 col-md-5 tamanoAuto\" >\n                      <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-12\">\n                          <img src=\"assets/img/Group.svg\" width=\"80px\" height=\"auto\" class=\"margenAuto\" >\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-xs-7 col-sm-7 col-md-7\" style=\"padding-left:0px;padding-right:0px\">\n                      <div class=\"row\">\n                          <div class=\"col-xs-12 col-sm-12 col-md-12\" >\n                            <p class=\"tamanoResumenCostoTotal\">Costo Total del Crédito\n                              <img data-toggle=\"tooltip\" data-html=\"true\" title=\"Monto total que pagarás por ese tu proyecto. Considera:\n                              <br/>\n                              ✔\tMonto solicitado,\n                              <br/>\n                              ✔\tIntereses y\n                              <br/>\n                              ✔\tGastos Operacionales\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n\n                            </p>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-xs-12 col-sm-12 col-md-12\" >\n                            <p class=\"tamanoMontoCostoTotal\">{{costoTotalCredito}}</p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-xs-6 col-sm-5 col-md-5\" style=\"padding-right:0px\" align=\"right\">\n                    <p style=\"color:#9B9B9B;font-weight: bold;font-size: 19.52px;\">{{valorPieResumen}}</p>\n                  </div>\n                  <div class=\"col-xs-6 col-sm-7 col-md-7\" >\n                      <p style=\"color:#9B9B9B;font-weight: SemiBold;font-size: 13px;\">\n                        Pie\n                      </p>\n                  </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-xs-6 col-sm-5 col-md-5\" style=\"padding-right:0px\" align=\"right\">\n                    <p style=\"color:#9B9B9B;font-weight: bold;font-size: 19.52px;\">{{montoCuotas}}</p>\n                  </div>\n                  <div class=\"col-xs-6 col-sm-7 col-md-7\">\n                      <p style=\"color:#9B9B9B;font-weight: SemiBold;font-size: 13px;\">Monto de {{valor2}} cuotas</p>\n                  </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-xs-6 col-sm-5 col-md-5\" style=\"padding-right:0px\" align=\"right\">\n                    <p style=\"color:#9B9B9B;font-weight: bold;font-size: 19.52px\">{{ultimaCuota}}</p>\n                  </div>\n                  <div class=\"col-xs-6 col-sm-7 col-md-7\">\n\n                      <div class=\"row\">\n                          <div class=\"col-xs-12 col-md-7\">\n                              <p style=\"color:#9B9B9B;font-weight: SemiBold;font-size: 13px;margin-top:-10px\">\n                                  Última Cuota<img data-toggle=\"tooltip\" title=\"Esta cuota final permite que tus cuotas mensuales sean más bajas. Además puedes traspasar esta cuota a un nuevo Crédito Automotriz al momento de cambiar tu auto cada 2 o 3 años, incluso financiarla cómodamente con un crédito en las cuotas que más te acomode.\" style=\"margin-left:10px;margin-bottom:5px;\" src=\"assets/img/icon_important.svg\"/>\n                              </p>\n                              <p style=\"color:#9B9B9B;font-weight: SemiBold;font-size: 13px;margin-top:-20px\">\n                                  {{fechaCuoton}}\n                              </p>\n\n                          </div>\n                      </div>\n\n                  </div>\n              </div>\n              <div class=\"horizontal-line\"></div>\n              <div class=\"row\">\n                  <div class=\"col-xs-6 col-sm-5 col-md-5\" align=\"right\" style=\"margin-top:10px;padding-right: 0px\">\n                      <p style=\"color:#AAB00A;font-weight: bold;font-size: 19.52px;\">{{montoLiquido}}</p>\n                  </div>\n                  <div class=\"col-xs-6 col-sm-7 col-md-7\" style=\"margin-top:15px\">\n                      <p style=\"color:#AAB00A;font-weight: semiBold;font-size: 13px;\">Monto líquido del Crédito\n                        <img  data-toggle=\"tooltip\" title=\"Monto que recibirás al contratar el Crédito.\" style=\"margin-top:-10px\" src=\"assets/img/icon_important.svg\"/>\n\n                      </p>\n                  </div>\n              </div>\n            </div>\n          </div>\n      </div>\n  </div>\n  <br class=\"hidden-xs\"/>\n  <br class=\"hidden-xs\"/>\n  <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3\">\n          <button type=\"button\" class=\"btn btn-default btn-block \" onclick=\"showModal()\" style=\"color:#1D689E;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;\" >Enviar simulación a mi Email</button>\n\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"myModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n            <div class=\"modal-dialog\" role=\"document\"  >\n              <div class=\"modal-content\" style=\"border-radius: 0px\" >\n                <div class=\"modal-body\" style=\"padding-top: 0px;\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                          <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\" (click)=\"reiniciaFormEnviaSimulacion($event)\" ></span>\n                          <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                              <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                          </div>\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\">\n                    <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">Ingresa tu email para enviarte esta simulación</h4>\n                    </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <form [formGroup]=\"enviaSimulacionFormGroup\" (ngSubmit)=\"onFormSubmit1()\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                          <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                          <span *ngIf=\"enviaSimulacionFormGroup.controls.mail.invalid && enviaSimulacionFormGroup.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                              Ingresa un mail válido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                        <img src=\"assets/img/line_horizontal.png\" style=\"width: 100%\">\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                          <h5 style=\"font-weight: bold\">¿Necesitas información adicional?</h5>\n                          <h6>Ingresa tus datos para poder entregarte una mejor asesoría</h6>\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"nombreApellidoContacto\" style=\"color:#3780AC\">Nombre y Apellido</label>\n                          <input type=\"text\" class=\"form-control\" id=\"nombreApellidoContacto\" formControlName=\"nombreApellido\" placeholder=\"Carlos Negabez\"  name='inputValorNombre' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                          <span *ngIf=\"enviaSimulacionFormGroup.controls.nombreApellido.invalid && enviaSimulacionFormGroup.controls.nombreApellido.touched\" style=\"color:red;font-weight: bold\">\n                              Debes ingresar tu nombre y apellido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"rutContacto\" style=\"color:#3780AC\">RUT</label>\n                          <input type=\"text\" class=\"form-control\" id=\"rutContacto\" formControlName=\"rut\" placeholder=\"11.111.111-1\"  name='inputValorRutContacto' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                          <span *ngIf=\"enviaSimulacionFormGroup.controls.rut.invalid && enviaSimulacionFormGroup.controls.rut.touched\" style=\"color:red;font-weight: bold\">\n                              Ingresa un RUT válido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                              <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\"  name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                            </div>\n                            <span *ngIf=\"enviaSimulacionFormGroup.controls.celular.invalid && enviaSimulacionFormGroup.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                                Ingresa un número de celular válido\n                            </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\" style=\"align-content: center\">\n\n                      <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                          <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaSimulacionMail()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n\n                      </div>\n\n                      <div class=\"col-xs-7 col-md-8\">\n\n                      </div>\n\n                  </div>\n                  <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n                </form>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- sadkjhadskjhadskjhadskjhadskjhadskjhasdkjadsh -->\n          <div class=\"modal fade\" id=\"myModal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n            <div class=\"modal-dialog\" role=\"document\"  >\n              <div class=\"modal-content\" style=\"border-radius: 0px\" >\n                <div class=\"modal-body\" style=\"padding-top: 0px;\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                          <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\" (click)=\"reiniciaFormEnviaSimulacion($event)\"></span>\n                          <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                              <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                          </div>\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\">\n                    <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">{{ nombreCliente }}, revisa o completa tus datos para que podamos enviarte esta simulación</h4>\n                    </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <form [formGroup]=\"enviaSimulacionFormGroup4\" (ngSubmit)=\"onFormSubmit4()\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                          <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail'  style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                          <span *ngIf=\"enviaSimulacionFormGroup4.controls.mail.invalid && enviaSimulacionFormGroup4.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                            Ingresa un mail válido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                              <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\"  name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                            </div>\n                            <span *ngIf=\"enviaSimulacionFormGroup4.controls.celular.invalid && enviaSimulacionFormGroup4.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                              Ingresa un número de celular válido\n                            </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\" style=\"align-content: center\">\n\n                    <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                        <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup4.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaSimulacionMail()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n\n                    </div>\n\n                    <div class=\"col-xs-7 col-md-8\">\n\n                    </div>\n\n                  </div>\n                  <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n                </form>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--kadshgdaskgdasjhgdashjgdashjadgsjh-->\n          <div class=\"modal fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n            <div class=\"modal-dialog\" role=\"document\"  >\n              <div class=\"modal-content\"  style=\"border-radius: 0px\" >\n                <div class=\"modal-body\" style=\"padding-top: 0px;\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n\n                          <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\"></span>\n                          <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                              <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                          </div>\n\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\">\n                    <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">¿Quieres que te sigamos asesorando?</h4>\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">Ingresa tus datos para entregarte una mejor asesoría</h4>\n                    </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <form [formGroup]=\"enviaSimulacionFormGroup3\" (ngSubmit)=\"onFormSubmit3()\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                            <label for=\"nombreApellidoContacto\" style=\"color:#3780AC\">Nombre y Apellido</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nombreApellidoContacto\" formControlName=\"nombreApellido\" placeholder=\"Carlos Negabez\"  name='inputValorNombre' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                            <span *ngIf=\"enviaSimulacionFormGroup3.controls.nombreApellido.invalid && enviaSimulacionFormGroup3.controls.nombreApellido.touched\" style=\"color:red;font-weight: bold\">\n                              Debes ingresar tu nombre y apellido\n                            </span>\n                        </div>\n                        <div class=\"col-xs-1 col-md-1\">\n                        </div>\n                    </div>\n                    <br class=\"hidden-xs\"/>\n                    <div class=\"row\">\n                        <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                            <label for=\"rutContacto\" style=\"color:#3780AC\">RUT</label>\n                            <input type=\"text\" class=\"form-control\" id=\"rutContacto\" formControlName=\"rut\" placeholder=\"11.111.111-1\"  name='inputValorRutContacto' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                            <span *ngIf=\"enviaSimulacionFormGroup3.controls.rut.invalid && enviaSimulacionFormGroup3.controls.rut.touched\" style=\"color:red;font-weight: bold\">\n                              Ingresa un RUT válido\n                            </span>\n                        </div>\n                        <div class=\"col-xs-1 col-md-1\">\n                        </div>\n                    </div>\n                    <br class=\"hidden-xs\"/>\n                    <div class=\"row\">\n                        <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                            <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                                <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\"  name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                              </div>\n                              <span *ngIf=\"enviaSimulacionFormGroup3.controls.celular.invalid && enviaSimulacionFormGroup3.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                                Ingresa un número de celular válido\n                              </span>\n                        </div>\n                        <div class=\"col-xs-1 col-md-1\">\n\n                        </div>\n                    </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                          <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail'  style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                          <span *ngIf=\"enviaSimulacionFormGroup3.controls.mail.invalid && enviaSimulacionFormGroup3.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                            Ingresa un mail válido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                  <br/>\n                  <div class=\"row\" style=\"align-content: center\">\n\n                    <!--div class=\"col-xs-4 col-xs-offset-8 col-md-3 col-md-offset-9\">-->\n                    <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                        <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup3.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaQuieroContacto()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n\n                    </div>\n                    <div class=\"col-xs-4 col-xs-offset-2 col-md-3 col-md-offset-4\" style=\"margin-top: 2%;\">\n\n                      <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default btn-block \" style=\"color:#1D689E;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;\" >Volver</button>\n\n                    </div>\n                    <div class=\"col-xs-1 col-md-1\">\n\n                    </div>\n\n                  </div>\n                  <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n                </form>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--asddsalhkasdhasdkjhdsakjhadskjasdhkj-->\n          <!-- cONFIRMACION OK-->\n        <div class=\"modal fade\" id=\"myModalExito\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n          <div class=\"modal-dialog\" role=\"document\"  >\n            <div class=\"modal-content\" style=\"border-radius: 0px\" >\n              <div class=\"modal-body\" style=\"padding-top: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                        <span class=\"glyphicon glyphicon-remove closeBoton\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\"></span>\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n                    <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\" style=\"white-space:nowrap\">\n                        <img src=\"assets/img/exito.svg\" style=\"float: left; margin-top: 3%\"><h3 style=\"color:#7FB535!important;float: left; margin-left: 5%\">Simulación enviada</h3>\n                      </div>\n                </div>\n                <br class=\"hidden-xs\"/>\n                <div class=\"row\">\n                <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                    <img src=\"assets/img/line_horizontal_azul.png\" style=\"width: 100%\">\n                  </div>\n                </div>\n                <br class=\"hidden-xs\"/>\n                <div class=\"row\">\n                    <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                        <h3 style=\"color:#3780AC; font-weight: bold\">Gracias por simular tu proyecto con nosotros</h3>\n                        <h4  style=\"color:#3780AC\">Hemos enviado la información al email:</h4>\n                        <h4  style=\"color:#3780AC\">{{ email }}</h4>\n                    </div>\n                    <div class=\"col-xs-1 col-md-1\">\n\n                    </div>\n                </div>\n                <br class=\"hidden-xs\"/>\n\n                <br/>\n                <div class=\"row\" style=\"align-content: center\" >\n                    <div class=\"col-xs-3 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                        <button id=\"botonParaReiniciar\" class=\"queMeContacten\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\">Cerrar</button>\n                    </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n          <!--jadjhgdasjhgadshjgadsjhgasjhdghjasdhjgashjdhjsgdhhd-->\n      </div>\n      <br class=\"visible-xs-block \"/>\n      <br class=\"visible-xs-block \">\n      <br class=\"visible-xs-block \">\n      <div class=\"col-xs-12 col-sm-4 col-md-3\">\n        <button type=\"button\" class=\"btn btn-primary btn-block \" onclick=\"showModal2()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Quiero que me contacten</button>\n        <!--saadsadsdaasdasdasd-->\n        <div class=\"modal fade\" id=\"myModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n          <div class=\"modal-dialog\" role=\"document\"  >\n            <div class=\"modal-content\" style=\"border-radius: 0px\">\n              <div class=\"modal-body\" style=\"padding-top: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n\n                        <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\" (click)=\"reiniciaFormEnviaSimulacion($event)\"></span>\n                        <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                            <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                        </div>\n\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n                  <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                    <h4 style=\"font-weight: bold; color:#3780AC!important\">Ingresa tus datos para que podamos ponernos en contacto</h4>\n                  </div>\n                </div>\n                <br class=\"hidden-xs\"/>\n                <form [formGroup]=\"enviaSimulacionFormGroup2\" (ngSubmit)=\"onFormSubmit2()\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"nombreApellidoContacto\" style=\"color:#3780AC\">Nombre y Apellido</label>\n                          <input type=\"text\" class=\"form-control\" id=\"nombreApellidoContacto\" formControlName=\"nombreApellido\" placeholder=\"Carlos Negabez\" name='inputValorNombre' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                          <span *ngIf=\"enviaSimulacionFormGroup2.controls.nombreApellido.invalid && enviaSimulacionFormGroup2.controls.nombreApellido.touched\" style=\"color:red;font-weight: bold\">\n                            Debes ingresar tu nombre y apellido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"rutContacto\" style=\"color:#3780AC\">RUT</label>\n                          <input type=\"text\" class=\"form-control\" id=\"rutContacto\" formControlName=\"rut\" placeholder=\"11.111.111-1\"  name='inputValorRutContacto' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                          <span *ngIf=\"enviaSimulacionFormGroup2.controls.rut.invalid && enviaSimulacionFormGroup2.controls.rut.touched\" style=\"color:red;font-weight: bold\">\n                            Ingresa un RUT válido\n                          </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n                      </div>\n                  </div>\n                  <br class=\"hidden-xs\"/>\n                  <div class=\"row\">\n                      <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                          <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                              <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\" name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                            </div>\n                            <span *ngIf=\"enviaSimulacionFormGroup2.controls.celular.invalid && enviaSimulacionFormGroup2.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                              Ingresa un número de celular válido\n                            </span>\n                      </div>\n                      <div class=\"col-xs-1 col-md-1\">\n\n                      </div>\n                  </div>\n                <br class=\"hidden-xs\"/>\n                <div class=\"row\">\n                    <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                        <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                        <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                        <span *ngIf=\"enviaSimulacionFormGroup2.controls.mail.invalid && enviaSimulacionFormGroup2.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                          Ingresa un mail válido\n                        </span>\n                    </div>\n                    <div class=\"col-xs-1 col-md-1\">\n\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n\n                  <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                      <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup2.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaQuieroContacto()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n\n                  </div>\n\n                  <div class=\"col-xs-7 col-md-8\">\n\n                  </div>\n                </div>\n                <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n              </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--asdadsadsdasasdds-->\n      <div class=\"modal fade\" id=\"myModal5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n        <div class=\"modal-dialog\" role=\"document\"  >\n          <div class=\"modal-content\" style=\"border-radius: 0px\" >\n            <div class=\"modal-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                      <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\" (click)=\"reiniciaFormEnviaSimulacion($event)\"></span>\n                      <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                          <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                      </div>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                  <h4 style=\"font-weight: bold; color:#3780AC!important\">{{ nombreCliente }}, revisa o completa tus datos para que podamos ponernos en contacto</h4>\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <form [formGroup]=\"enviaSimulacionFormGroup5\" (ngSubmit)=\"onFormSubmit5()\">\n              <div class=\"row\">\n                  <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                      <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                      <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                      <span *ngIf=\"enviaSimulacionFormGroup5.controls.mail.invalid && enviaSimulacionFormGroup5.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                        Ingresa un mail válido\n                      </span>\n                  </div>\n                  <div class=\"col-xs-1 col-md-1\">\n\n                  </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                  <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                      <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                      <div class=\"input-group\">\n                          <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                          <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\"  name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                        </div>\n                        <span *ngIf=\"enviaSimulacionFormGroup5.controls.celular.invalid && enviaSimulacionFormGroup5.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                          Ingresa un número de celular válido\n                        </span>\n                  </div>\n                  <div class=\"col-xs-1 col-md-1\">\n\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n\n                    <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup5.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaQuieroContacto()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n\n                </div>\n\n                <div class=\"col-xs-7 col-md-8\">\n\n                </div>\n              </div>\n              <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n            </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--sasddasadsadsdas-->\n      <div class=\"modal fade\" id=\"myModal6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n        <div class=\"modal-dialog\" role=\"document\"  >\n          <div class=\"modal-content\" style=\"border-radius: 0px\" >\n            <div class=\"modal-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                      <span class=\"glyphicon glyphicon-remove closeBoton\" data-dismiss=\"modal\" (click)=\"reiniciaFormEnviaSimulacion($event)\"></span>\n                      <div [hidden]=\"estadoMataAngustiaModales\" id =\"loadingScreen\" style=\"position: fixed; width: 100%; height: 100%; z-index: 100000; background-color: rgba(255, 255, 255, 0.6); transition:visibility 0.3s linear,opacity 0.3s linear;\">\n                          <img src=\"./assets/img/loader.gif\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); \"/>\n                      </div>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-xs-11 col-xs-offset-1 col-md-11 col-md-offset-1\">\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">¿Quieres que te sigamos asesorando?</h4>\n                      <h4 style=\"font-weight: bold; color:#3780AC!important\">Ingresa tus datos para entregarte una mejor asesoría</h4>\n                    </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <form [formGroup]=\"enviaSimulacionFormGroup6\" (ngSubmit)=\"onFormSubmit6()\">\n              <div class=\"row\">\n                  <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                      <label for=\"mailEnviaSimulacion\" style=\"color:#3780AC\">Mail</label>\n                      <input type=\"text\" class=\"form-control\" id=\"mailEnviaSimulacion\" formControlName=\"mail\" placeholder=\"carlos.neganez@gmail.com\" name='inputValorMail'  style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\">\n                      <span *ngIf=\"enviaSimulacionFormGroup6.controls.mail.invalid && enviaSimulacionFormGroup6.controls.mail.touched\" style=\"color:red;font-weight: bold\">\n                        Ingresa un mail válido\n                      </span>\n                  </div>\n                  <div class=\"col-xs-1 col-md-1\">\n\n                  </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                  <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                      <label for=\"celularEnviaSimulacion\" style=\"color:#3780AC\">Celular</label>\n                      <div class=\"input-group\">\n                          <span class=\"input-group-addon\" id=\"basic-addon1\">+569</span>\n                          <input type=\"text\" class=\"form-control\" id=\"celularEnviaSimulacion\" formControlName=\"celular\" placeholder=\"33333333\"  name='inputValorCelular' style=\"text-align:left;border: 1px solid #D3D6D4;font-weight: bold\" >\n                        </div>\n                        <span *ngIf=\"enviaSimulacionFormGroup6.controls.celular.invalid && enviaSimulacionFormGroup6.controls.celular.touched\" style=\"color:red;font-weight: bold\">\n                          Ingresa un número de celular válido\n                        </span>\n                  </div>\n                  <div class=\"col-xs-1 col-md-1\">\n\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n\n                <div class=\"col-xs-4 col-xs-offset-1 col-md-3 col-md-offset-1\">\n                    <button type=\"button\" [disabled] = \"!enviaSimulacionFormGroup6.valid || flagValida=='1'\" class=\"btn btn-primary btn-block \" (click)=\"enviaQuieroContacto()\" style=\"color:white;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;background-color:#1D689E\" >Enviar</button>\n                </div>\n\n                <div class=\"col-xs-4 col-xs-offset-2 col-md-3 col-md-offset-4\" style=\"margin-top: 2%;\">\n\n                  <button type=\"button\" class=\"btn btn-default btn-block\" data-dismiss=\"modal\" style=\"color:#1D689E;font-weight: bold;border: 1px solid #1D689E;border-radius: 0px;\" >Volver</button>\n\n                </div>\n                <div class=\"col-xs-1 col-md-1\">\n\n                </div>\n              </div>\n              <!--<p>Form value {{ enviaSimulacionFormGroup.value | json }} </p>\n                  <p> Form status {{ enviaSimulacionFormGroup.status | json}} </p>-->\n            </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--salasdhjkdashkjadshjkdash-->\n      <div class=\"modal fade\" id=\"myModalErrorConn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n        <div class=\"modal-dialog\" role=\"document\" >\n          <div class=\"modal-content\" style=\"border-radius: 0px\" >\n            <div class=\"modal-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                  <span class=\"glyphicon glyphicon-remove closeBoton\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\"></span>\n                </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                <div class=\"col-xs-2 col-xs-offset-1 col-md-2 col-md-offset-1\" >\n                  <img src=\"assets/img/errorConn.svg\" style=\"float: left; margin-top: 15px\">\n                </div>\n                <div class=\"col-xs-9 col-md-9\">\n                  <h3 style=\"color:#f44336!important;float: left; margin-left: 5%\">Error en el envío</h3>\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                  <img src=\"assets/img/line_horizontal_azul.png\" style=\"width: 100%\">\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                  <h3 style=\"color:#3780AC; font-weight: bold\">No se puede enviar el correo en estos momentos</h3>\n                  <h4 style=\"color:#3780AC\">Inténtalo nuevamente más tarde.</h4>\n                </div>\n                <div class=\"col-xs-1 col-md-1\">\n\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n\n              <br/>\n              <div class=\"row\" style=\"align-content: center\" >\n                <div class=\"col-xs-3 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n                  <button class=\"queMeContacten\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--lkafshjaskhafskjhadsjkdshakjdas-->\n      <div class=\"modal fade\" id=\"myModalErrorConnCti\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n        <div class=\"modal-dialog\" role=\"document\" >\n          <div class=\"modal-content\" style=\"border-radius: 0px\" >\n            <div class=\"modal-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                  <span class=\"glyphicon glyphicon-remove closeBoton\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\"></span>\n                </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                <div class=\"col-xs-2 col-xs-offset-1 col-md-2 col-md-offset-1\" >\n                  <img src=\"assets/img/errorConn.svg\" style=\"float: left; margin-top: 15px\">\n                </div>\n                <div class=\"col-xs-9 col-md-9\">\n                  <h3 style=\"color:#f44336!important;float: left; margin-left: 5%\">Error al contactar</h3>\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                  <img src=\"assets/img/line_horizontal_azul.png\" style=\"width: 100%\">\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                  <h3 style=\"color:#3780AC; font-weight: bold\">No lo podemos atender en este momento</h3>\n                  <h4 style=\"color:#3780AC\">Inténtelo nuevamente más tarde.</h4>\n                </div>\n                <div class=\"col-xs-1 col-md-1\">\n\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n\n              <br/>\n              <div class=\"row\" style=\"align-content: center\" >\n                <div class=\"col-xs-3 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n                  <button class=\"queMeContacten\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- cONFIRMACION OK-->\n      <div class=\"modal fade\" id=\"myModalExitoContacto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\" data-keyboard=\"false\" data-backdrop=\"static\" style=\"height: 100%\">\n        <div class=\"modal-dialog\" role=\"document\"  >\n          <div class=\"modal-content\" style=\"border-radius: 0px\" >\n            <div class=\"modal-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-12\" style=\"padding-right: 0px;padding-left: 0px;\">\n                      <span class=\"glyphicon glyphicon-remove closeBoton\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\"></span>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-xs-2 col-xs-offset-1 col-md-2 col-md-offset-1\" >\n                      <img src=\"assets/img/exito.svg\" style=\"float: left; margin-top: 15px\">\n                  </div>\n                  <div class=\"col-xs-9 col-md-9\">\n                    <h3 style=\"color:#7FB535!important;float: left;\">Nos pondremos en contacto</h3>\n                  </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n              <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                  <img src=\"assets/img/line_horizontal_azul.png\" style=\"width: 100%\">\n                </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n              <div class=\"row\">\n                  <div class=\"col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1\">\n                      <h3 style=\"color:#3780AC; font-weight: bold\">Gracias por simular tu proyecto con nosotros</h3>\n                      <h4  style=\"color:#3780AC\">Un ejecutivo nuestro se pondrá en contacto.</h4>\n                  </div>\n                  <div class=\"col-xs-1 col-md-1\">\n\n                  </div>\n              </div>\n              <br class=\"hidden-xs\"/>\n\n              <br/>\n              <div class=\"row\" style=\"align-content: center\" >\n                  <div class=\"col-xs-3 col-xs-offset-1 col-md-3 col-md-offset-1\" style=\"margin-top: 2%;\">\n                    <button class=\"queMeContacten\" (click)=\"cambiaEstadoBoton()\" data-dismiss=\"modal\">Cerrar</button>\n                  </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--kjadsgjhaghjhadsj-->\n  </div>\n  <br class=\"hidden-xs\"/>\n  <br/>\n  <div class=\"row hidden-xs\" *ngIf=\"flagPreguntas=='1'\" >\n      <div class=\"col-sm-12\">\n        <div class=\"row\">\n          <div class=\"panel-group\" id=\"accordion\" style=\"border-radius: 15px;border: 1px solid #D3D6D4;overflow:hidden\">\n            <div class=\"panel panel-default\" style=\"border: 0px solid transparent;border-bottom: 1px solid #D3D6D4\">\n                <div class=\"panel-heading\" style=\"background-color: rgba(255,255,255,.15);\">\n                    <h4 class=\"panel-title\" style=\"color:#797575;margin-top: 10px;margin-bottom: 5px\">\n                        <a id=\"pregunta1\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseOne\" style=\"text-decoration: none;cursor: pointer;\">\n                        1)\t¿Por qué comprar tu nuevo auto con un Crédito Automotriz BICE?\n                        <i class=\"indicator glyphicon glyphicon-chevron-down pull-right\"></i>\n                      </a>\n                    </h4>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse out\">\n                    <div class=\"panel-body\">\n                      <b>✔</b> Porque puedes renovar tu auto por uno nuevo cada 2 o 3 años,\n                      <br/>\n                      <b>✔</b> Porque accedo a la mejor tasa de interés en el mercado de financiamiento automotriz y\n                      <br/>\n                      <b>✔</b> Porque puedo pagar cuotas mensuales hasta un 50% más bajas que un Crédito de Consumo en cuotas iguales.\n                      <br/>\n                      <b>✔</b> Porque no quedo restringido a ninguna marca o automotora.\n\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"panel panel-default\" style=\"border: 0px solid transparent;border-bottom: 1px solid #D3D6D4\">\n                <div class=\"panel-heading\" style=\"background-color: rgba(255,255,255,.15);\">\n                    <h4 class=\"panel-title\" style=\"color:#797575;margin-top: 10px;margin-bottom: 5px\">\n                        <a id=\"pregunta2\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseTwo\" style=\"text-decoration: none;cursor: pointer;\">\n                        2)\t¿Qué tan simple es el trámite de la prenda del auto?\n                        <i class=\"indicator glyphicon glyphicon-chevron-down pull-right\"></i></a>\n                    </h4>\n                </div>\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse out\">\n                    <div class=\"panel-body\">\n                      <b>✔</b> Muy simple, sólo debes enviar por mail a tu Ejecutivo de Cuentas la Factura y Solicitud de Primera Inscripción del Auto y nosotros nos preocupamos del resto.\n                      <br/>\n                      <b>✔</b> Al finalizar tu crédito, o si lo prepagas, alzamos automáticamente la prenda.\n\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"panel panel-default\" style=\"border: 0px solid transparent;\">\n                <div class=\"panel-heading\" style=\"background-color: rgba(255,255,255,.15);\">\n                    <h4 class=\"panel-title\" style=\"color:#797575;margin-top: 10px;margin-bottom: 5px\">\n                        <a id=\"pregunta3\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#collapseThree\" style=\"text-decoration: none;cursor: pointer;\">\n                        3)\t¿Necesito asegurar mi nuevo auto?\n                        <i class=\"indicator glyphicon glyphicon-chevron-down pull-right\"></i></a>\n                    </h4>\n                </div>\n                <div id=\"collapseThree\" class=\"panel-collapse collapse out\">\n                    <div class=\"panel-body\">\n                      <b>✔</b> Sí. Debes mantenerlo asegurado, así podrás manejar tranquilo y estar protegido ante algún evento inesperado. Además es un requisito de la prenda del crédito.\n                      <br/>\n                      <b>✔</b> Puedes gestionar un Seguro Automotriz por tu cuenta, el que deberá cumplir con los requisitos y condiciones de cobertura para este Crédito.\n                      <br/>\n                      <b>✔</b> BICE Corredores de Seguros tiene un Seguro Automotriz conveniente para ti, el que podrás revisar directamente con tu Ejecutivo de Cuentas.\n\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n  </div>\n  <div class=\"row hidden-xs hidden-sm\">\n      <div class=\"col-md-12\" style=\"text-align: justify\">\n          <p>La aprobación y otorgamiento de este Préstamo, está sujeto a la evaluación del cliente y al cumplimiento de las Políticas de Riesgo y Comerciales del Banco.</p>\n\n          <p><b>(*) </b>La tasa de interés corresponde a un Cliente con Clasificación de Riesgo A.</p>\n\n          <p><b>(**) </b>Carga Anual Equivalente (CAE) indicador que, expresado en forma de porcentaje, revela el costo de un préstamo en un período anual, cualquiera que sea el plazo pactado para el pago de la obligación. Contempla el tipo de interés, todos los gastos asociados al crédito, el plazo de la operación; y se calcula sobre base anual.</p>\n\n          <p><b>(***) </b>Costo Final de un Préstamo es un indicador que, expresado en una suma de dinero, da cuenta del monto total a pagar por el préstamo solicitado, sumado lo adeudado por tasa de interés y los gastos asociados al crédito. Estos valores son referenciales.</p>\n      </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/masterPage/masterpage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componentes/masterPage/masterpage.component.ts ***!
  \****************************************************************/
/*! exports provided: MasterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageComponent", function() { return MasterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_simulacionAutomotriz_simulacion_automotriz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/simulacionAutomotriz/simulacion-automotriz.service */ "./src/app/servicios/simulacionAutomotriz/simulacion-automotriz.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validator/rut.validator */ "./src/app/validator/rut.validator.ts");








var MasterPageComponent = /** @class */ (function () {
    function MasterPageComponent(router, simulacionService, formBuilderEnviaSimulacion, modalService) {
        this.router = router;
        this.simulacionService = simulacionService;
        this.formBuilderEnviaSimulacion = formBuilderEnviaSimulacion;
        this.modalService = modalService;
        this.url_string = window.location.href;
        this.url = new URL(this.url_string);
        this.arregloTasas = [];
        this.tipo_seguro_desgravamen = '';
        this.checkDesgravamen = true;
        this.checkProteccion = false;
        this.tasaMensual = true;
        this.cae = true;
        this.valor_tasa_mensual = '';
        this.valor_cae = '';
        this.fecha_primera_cuota = '';
        this.fechaCuoton = '';
        this.valorPie = '';
        this.ultimoValorPie = '';
        this.valorPorcentaje = '';
        this.rangePrecioVehiculo = '';
        this.precioVehiculo = '';
        this.rangeValorCuota = '';
        this.valorCuota = '';
        this.ultimaCuota = '';
        this.montoCuotas = '';
        this.costoTotalCredito = '';
        this.montoLiquido = '';
        this.montoBruto = '';
        this.valorPieResumen = '';
        this.valorMail = '';
        this.valorTipoCredito = "Automotriz Inteligente";
        this.colorEmail = 'blue';
        this.errorPrecioVehiculo = false;
        this.mensajeErrorPrecioVehiculo = '';
        this.valorCheckCuota = '';
        this.valor = '10';
        this.enabled = true;
        this.bandera1Pregunta1 = false;
        this.bandera1Pregunta2 = false;
        this.bandera1Pregunta3 = false;
        this.valorNotario = 0;
        this.valorPrenda = 0;
        this.valorDesgravamen = 0;
        this.valorCesantia = 0;
        this.valorTasaInteligente = '';
        this.valorTasaProtegido = '';
        this.valorDesgravamen25 = '';
        this.valorDesgravamen37 = '';
        this.valorImpuesto = 0;
        this.valorFactor = 0;
        this.flagValida = "0";
        this.flagPreguntas = "1";
        this.valor2 = '36';
        this.valorLimiteSuperiorPie = '60%';
        this.rut = "";
        this.email = "";
        this.telefono = "";
        this.nombre = "";
        this.nombreCliente = "";
        this.toolTipTipoCredito = true;
        this.toolTipPie = true;
        this.estadoMataAngustiaModales = true;
    }
    MasterPageComponent.prototype.changeDesgravamen = function (values) {
        if (values.currentTarget.checked) {
            this.tipo_seguro_desgravamen = 'Desgravamen A través de Banco BICE';
        }
        else {
            this.tipo_seguro_desgravamen = 'Lo contrataré con otra compañía de seguros';
        }
        this.checkDesgravamen = values.currentTarget.checked;
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.changeProteccion = function (values) {
        this.checkProteccion = values.currentTarget.checked;
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        //var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.changeRangePrecioVehiculo = function (values) {
        this.rangePrecioVehiculo = values;
        this.precioVehiculo = this.transformNumberToMoney(values);
        var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
        var porcentaje = (numeroPie / parseInt(values)) * 100;
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje >= 20 && porcentaje <= 50) {
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                }
                else {
                    if (porcentaje < 20) {
                        this.valorPorcentaje = "20%";
                        var nuevoPie = (values * 20) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                    if (porcentaje > 50) {
                        this.valorPorcentaje = "50%";
                        var nuevoPie = (values * 50) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                }
            }
            else {
                if (porcentaje >= 20 && porcentaje <= 60) {
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                }
                else {
                    if (porcentaje < 20) {
                        this.valorPorcentaje = "20%";
                        var nuevoPie = (values * 20) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                    if (porcentaje > 60) {
                        this.valorPorcentaje = "60%";
                        var nuevoPie = (values * 60) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                }
            }
        }
        else {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje >= 20 && porcentaje <= 60) {
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                }
                else {
                    if (porcentaje < 20) {
                        this.valorPorcentaje = "20%";
                        var nuevoPie = (values * 20) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                    if (porcentaje > 60) {
                        this.valorPorcentaje = "60%";
                        var nuevoPie = (values * 60) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                }
            }
            else {
                if (porcentaje >= 20 && porcentaje <= 50) {
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                }
                else {
                    if (porcentaje < 20) {
                        this.valorPorcentaje = "20%";
                        var nuevoPie = (values * 20) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                    if (porcentaje > 50) {
                        this.valorPorcentaje = "50%";
                        var nuevoPie = (values * 50) / 100;
                        this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                        this.valorPieResumen = this.valorPie;
                    }
                }
            }
        }
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.changeRangePrecioVehiculoAjustaPie = function (values) {
        var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
        var nuevoPie = 0;
        var porcentaje = (numeroPie / parseInt(values)) * 100;
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje >= 20 && porcentaje <= 50) {
                    nuevoPie = numeroPie;
                }
                else {
                    if (porcentaje < 20) {
                        nuevoPie = (values * 20) / 100;
                    }
                    if (porcentaje > 50) {
                        nuevoPie = (values * 50) / 100;
                    }
                }
            }
            else {
                if (porcentaje >= 20 && porcentaje <= 60) {
                    nuevoPie = numeroPie;
                }
                else {
                    if (porcentaje < 20) {
                        nuevoPie = (values * 20) / 100;
                    }
                    if (porcentaje > 60) {
                        nuevoPie = (values * 60) / 100;
                    }
                }
            }
        }
        else {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje >= 20 && porcentaje <= 60) {
                    nuevoPie = numeroPie;
                }
                else {
                    if (porcentaje < 20) {
                        nuevoPie = (values * 20) / 100;
                    }
                    if (porcentaje > 60) {
                        nuevoPie = (values * 60) / 100;
                    }
                }
            }
            else {
                if (porcentaje >= 20 && porcentaje <= 50) {
                    nuevoPie = numeroPie;
                }
                else {
                    if (porcentaje < 20) {
                        nuevoPie = (values * 20) / 100;
                    }
                    if (porcentaje > 50) {
                        nuevoPie = (values * 50) / 100;
                    }
                }
            }
        }
        return nuevoPie;
    };
    MasterPageComponent.prototype.changeRangeValorCuota = function (values) {
        this.rangeValorCuota = values;
        this.valorCuota = this.transformNumberToMoney(values);
        var vehiculoLocalMas = parseInt(this.rangePrecioVehiculo) + 50000;
        var vehiculoLocalMenos = parseInt(this.rangePrecioVehiculo) - 50000;
        var resulInteligente = 0;
        var resulProtegido = 0;
        var resulInteligente2 = 0;
        var resulProtegido2 = 0;
        var nuevoPieMas = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMas.toString());
        var nuevoPieMenos = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMenos.toString());
        var montoLiquido = vehiculoLocalMas - nuevoPieMas;
        var montoLiquido2 = vehiculoLocalMenos - nuevoPieMenos;
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            resulInteligente = this.SimuladorCreditoAutomotrizInteligenteNoPinta(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
            resulInteligente2 = this.SimuladorCreditoAutomotrizInteligenteNoPinta(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda);
            if (resulInteligente < parseInt(this.rangeValorCuota)) {
                while ((parseInt(this.rangeValorCuota) - resulInteligente) > 500) {
                    vehiculoLocalMas = vehiculoLocalMas + 50000;
                    nuevoPieMas = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMas.toString());
                    montoLiquido = vehiculoLocalMas - nuevoPieMas;
                    resulInteligente = this.SimuladorCreditoAutomotrizInteligenteNoPinta(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
                }
                if (vehiculoLocalMas > 80000000) {
                    vehiculoLocalMas = 80000000;
                    nuevoPieMas = 16000000;
                    montoLiquido = vehiculoLocalMas - nuevoPieMas;
                }
                this.rangePrecioVehiculo = vehiculoLocalMas.toString();
                this.valorPie = this.transformNumberToMoney(nuevoPieMas.toString());
                this.SimuladorCreditoAutomotrizInteligente(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
                this.precioVehiculo = this.transformNumberToMoney(this.rangePrecioVehiculo);
                cssIsolatedRange(this.rangePrecioVehiculo);
                var porcentaje = (parseInt(this.transformMoneyToNumber(this.valorPie)) / parseInt(this.rangePrecioVehiculo)) * 100;
                this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                this.valorPieResumen = this.valorPie;
                this.calculaValorCae(montoLiquido);
            }
            else {
                if (resulInteligente2 > parseInt(this.rangeValorCuota)) {
                    while (resulInteligente2 - (parseInt(this.rangeValorCuota)) > 500) {
                        vehiculoLocalMenos = vehiculoLocalMenos - 50000;
                        nuevoPieMenos = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMenos.toString());
                        montoLiquido2 = vehiculoLocalMenos - nuevoPieMenos;
                        resulInteligente2 = this.SimuladorCreditoAutomotrizInteligenteNoPinta(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda);
                    }
                    if (vehiculoLocalMenos < 7000000) {
                        vehiculoLocalMenos = 7000000;
                        if (parseInt(this.valorCheckCuota) == 25) {
                            nuevoPieMenos = 3500000;
                        }
                        else {
                            nuevoPieMenos = 4200000;
                        }
                        montoLiquido2 = vehiculoLocalMenos - nuevoPieMenos;
                    }
                    this.rangePrecioVehiculo = vehiculoLocalMenos.toString();
                    this.valorPie = this.transformNumberToMoney(nuevoPieMenos.toString());
                    this.SimuladorCreditoAutomotrizInteligente(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda);
                    this.precioVehiculo = this.transformNumberToMoney(this.rangePrecioVehiculo);
                    cssIsolatedRange(this.rangePrecioVehiculo);
                    var porcentaje = (parseInt(this.transformMoneyToNumber(this.valorPie)) / parseInt(this.rangePrecioVehiculo)) * 100;
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    this.valorPieResumen = this.valorPie;
                    this.calculaValorCae(montoLiquido);
                }
            }
        }
        else {
            resulProtegido = this.SimuladorCreditoAutomotrizProtegidoNoPinta(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, nuevoPieMas);
            resulProtegido2 = this.SimuladorCreditoAutomotrizProtegidoNoPinta(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda, nuevoPieMenos);
            if (resulProtegido < parseInt(this.rangeValorCuota)) {
                while ((parseInt(this.rangeValorCuota) - resulProtegido) > 500) {
                    vehiculoLocalMas = vehiculoLocalMas + 50000;
                    nuevoPieMas = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMas.toString());
                    montoLiquido = vehiculoLocalMas - nuevoPieMas;
                    resulProtegido = this.SimuladorCreditoAutomotrizProtegidoNoPinta(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, nuevoPieMas);
                }
                if (vehiculoLocalMas > 80000000) {
                    vehiculoLocalMas = 80000000;
                    nuevoPieMas = 16000000;
                    montoLiquido = vehiculoLocalMas - nuevoPieMas;
                }
                this.rangePrecioVehiculo = vehiculoLocalMas.toString();
                this.valorPie = this.transformNumberToMoney(nuevoPieMas.toString());
                this.SimuladorCreditoAutomotrizProtegido(vehiculoLocalMas, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, nuevoPieMas);
                this.precioVehiculo = this.transformNumberToMoney(this.rangePrecioVehiculo);
                cssIsolatedRange(this.rangePrecioVehiculo);
                var porcentaje = (parseInt(this.transformMoneyToNumber(this.valorPie)) / parseInt(this.rangePrecioVehiculo)) * 100;
                this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                this.valorPieResumen = this.valorPie;
                this.calculaValorCae(montoLiquido);
            }
            else {
                if (resulProtegido2 > parseInt(this.rangeValorCuota)) {
                    var contador = 0;
                    while (resulProtegido2 - (parseInt(this.rangeValorCuota)) > 500) {
                        vehiculoLocalMenos = vehiculoLocalMenos - 50000;
                        nuevoPieMenos = this.changeRangePrecioVehiculoAjustaPie(vehiculoLocalMenos.toString());
                        montoLiquido2 = vehiculoLocalMenos - nuevoPieMenos;
                        resulProtegido2 = this.SimuladorCreditoAutomotrizProtegidoNoPinta(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda, nuevoPieMenos);
                    }
                    if (vehiculoLocalMenos < 7000000) {
                        vehiculoLocalMenos = 7000000;
                        if (parseInt(this.valorCheckCuota) == 25) {
                            nuevoPieMenos = 4200000;
                        }
                        else {
                            nuevoPieMenos = 3500000;
                        }
                        montoLiquido2 = vehiculoLocalMenos - nuevoPieMenos;
                    }
                    this.rangePrecioVehiculo = vehiculoLocalMenos.toString();
                    this.valorPie = this.transformNumberToMoney(nuevoPieMenos.toString());
                    this.SimuladorCreditoAutomotrizProtegido(vehiculoLocalMenos, parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido2, this.valorNotario, this.valorPrenda, nuevoPieMenos);
                    this.precioVehiculo = this.transformNumberToMoney(this.rangePrecioVehiculo);
                    cssIsolatedRange(this.rangePrecioVehiculo);
                    var porcentaje = (parseInt(this.transformMoneyToNumber(this.valorPie)) / parseInt(this.rangePrecioVehiculo)) * 100;
                    this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    this.valorPieResumen = this.valorPie;
                    this.calculaValorCae(montoLiquido);
                }
            }
        }
    };
    MasterPageComponent.prototype.changeValorTipoCredito = function (values) {
        this.valorTipoCredito = values;
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.toolTipTipoCredito = true;
            if (parseInt(this.valorCheckCuota) == 25) {
                this.toolTipPie = false;
                this.valorLimiteSuperiorPie = "50%";
                //this.valorPorcentaje = '50%';
                var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
                var porcentaje = (numeroPie / parseInt(this.rangePrecioVehiculo)) * 100;
                if (porcentaje > 50) {
                    this.valorPorcentaje = '50%';
                    var nuevoPie = (parseInt(this.rangePrecioVehiculo) * 50) / 100;
                    this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                    this.valorPieResumen = this.valorPie;
                }
            }
            else {
                this.valorLimiteSuperiorPie = "60%";
                this.toolTipPie = true;
                //this.valorPorcentaje = '60%';
            }
            this.valor_tasa_mensual = this.valorTasaInteligente;
            var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
            this.calculaValorCae(montoLiquido);
        }
        else {
            this.toolTipTipoCredito = false;
            if (parseInt(this.valorCheckCuota) == 25) {
                this.toolTipPie = true;
                this.valorLimiteSuperiorPie = "60%";
            }
            else {
                this.valorLimiteSuperiorPie = "50%";
                this.toolTipPie = false;
                var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
                var porcentaje = (numeroPie / parseInt(this.rangePrecioVehiculo)) * 100;
                if (porcentaje > 50) {
                    this.valorPorcentaje = '50%';
                    var nuevoPie = (parseInt(this.rangePrecioVehiculo) * 50) / 100;
                    this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                    this.valorPieResumen = this.valorPie;
                }
            }
            this.valor_tasa_mensual = this.valorTasaProtegido;
            var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
            this.calculaValorCae(montoLiquido);
        }
    };
    MasterPageComponent.prototype.changePrecioVehiculo = function (values) {
        var initalValue = values;
        initalValue = initalValue.replace(/[^0-9]/g, '');
        this.precioVehiculo = this.transformNumberToMoney(initalValue);
    };
    MasterPageComponent.prototype.changeValorCuota = function (values) {
        var initalValue = values;
        initalValue = initalValue.replace(/[^0-9]/g, '');
        this.rangeValorCuota = initalValue;
    };
    MasterPageComponent.prototype.transformNumberToMoney = function (value) {
        var initalValue = value;
        initalValue = initalValue.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        initalValue = initalValue.split('').reverse().join('').replace(/^[\.]/, '');
        return '$' + initalValue;
    };
    MasterPageComponent.prototype.transformMoneyToNumber = function (value) {
        var initalValue = value;
        initalValue = initalValue.replace(/[^0-9]/g, '');
        return initalValue;
    };
    MasterPageComponent.prototype.transformStringToNumber = function (value) {
        var initalValue = value;
        initalValue = initalValue.replace(/\./g, '');
        var index = initalValue.indexOf(",");
        initalValue = initalValue.substring(0, index);
        return initalValue;
    };
    MasterPageComponent.prototype.transformStringDecimalToPercentage = function (value) {
        var initalValue = value;
        initalValue = initalValue.replace(/\,/g, '.');
        var numero = parseFloat(initalValue);
        var numString = numero.toFixed(2).toString();
        numString = numString.replace(/\./g, ',');
        return numString + "%";
    };
    MasterPageComponent.prototype.transformPercentageToStringDecimal = function (value) {
        var initalValue = value;
        initalValue = initalValue.replace(/\,/g, '.');
        initalValue = initalValue.replace(/\%/g, '');
        var numero = parseFloat(initalValue);
        return numero;
    };
    MasterPageComponent.prototype.seleccionaMenu = function (value) {
        var elem = document.getElementById("menu1");
        var elem2 = document.getElementById("menu2");
        var elem3 = document.getElementById("inputPrecioVehiculo");
        var elem4 = document.getElementById("inputValorCuotaMensual");
        elem.classList.remove("activeApp");
        elem2.classList.remove("activeApp");
        elem3.classList.remove("inputVerde");
        elem4.classList.remove("inputVerde");
        if (value == "1") {
            elem.classList.add("activeApp");
            elem4.classList.add("inputVerde");
            this.rangePrecioVehiculo = '25000000';
            this.precioVehiculo = '$25.000.000';
            this.valorPie = '$15.000.000';
            this.ultimoValorPie = '$15.000.000';
            this.valorPieResumen = '$15.000.000';
            this.valorPorcentaje = '60%';
        }
        else {
            elem2.classList.add("activeApp");
            elem3.classList.add("inputVerde");
            this.rangePrecioVehiculo = '40000000';
            this.precioVehiculo = '$40.000.000';
            this.valorPie = '$8.000.000';
            this.ultimoValorPie = '$8.000.000';
            this.valorPieResumen = '$8.000.000';
            this.valorPorcentaje = '20%';
        }
        //cssIsolatedRange(this.rangePrecioVehiculo);
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.onFormSubmit1 = function () {
        if (this.enviaSimulacionFormGroup.valid) {
            this.email = this.enviaSimulacionFormGroup.controls.mail.value;
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup.value;
        }
    };
    MasterPageComponent.prototype.onFormSubmit2 = function () {
        if (this.enviaSimulacionFormGroup2.valid) {
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup2.value;
        }
    };
    MasterPageComponent.prototype.onFormSubmit3 = function () {
        if (this.enviaSimulacionFormGroup3.valid) {
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup3.value;
        }
    };
    MasterPageComponent.prototype.onFormSubmit4 = function () {
        if (this.enviaSimulacionFormGroup4.valid) {
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup4.value;
            this.email = this.enviaSimulacionFormGroup4.controls.mail.value;
        }
    };
    MasterPageComponent.prototype.onFormSubmit5 = function () {
        if (this.enviaSimulacionFormGroup5.valid) {
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup5.value;
        }
    };
    MasterPageComponent.prototype.onFormSubmit6 = function () {
        if (this.enviaSimulacionFormGroup6.valid) {
            //this.enviaSimulacionForm = this.enviaSimulacionFormGroup6.value;
        }
    };
    MasterPageComponent.prototype.reiniciaFormEnviaSimulacion = function (value) {
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == 'PUBLICO') {
            this.enviaSimulacionFormGroup = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup2 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup3 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
        }
        else {
            var mail = sessionStorage.getItem('EmailSimuladorAutomotriz');
            var nombre = sessionStorage.getItem('fullNameSimuladorAutomotriz');
            var rut = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            this.enviaSimulacionFormGroup4 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup5 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup6 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
        }
    };
    MasterPageComponent.prototype.blurInputPie = function (value) {
        if (this.valorPie == '' || this.valorPie == '$') {
            this.valorPie = this.ultimoValorPie;
        }
        var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
        this.valorPie = this.transformNumberToMoney(numeroPie.toString());
        var numeroPrecio = parseInt(this.transformMoneyToNumber(this.precioVehiculo));
        var porcentaje = (numeroPie * 100) / numeroPrecio;
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje < 20) {
                    this.valorPie = this.transformNumberToMoney("" + (0.2 * numeroPrecio));
                    this.valorPieResumen = this.valorPie;
                    this.valorPorcentaje = "20%";
                }
                else {
                    if (porcentaje > 50) {
                        this.valorPie = this.transformNumberToMoney("" + (0.5 * numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = "50%";
                    }
                    else {
                        //this.valorPie = this.transformNumberToMoney(""+((porcentaje/100)*numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    }
                }
            }
            else {
                if (porcentaje < 20) {
                    this.valorPie = this.transformNumberToMoney("" + (0.2 * numeroPrecio));
                    this.valorPieResumen = this.valorPie;
                    this.valorPorcentaje = "20%";
                }
                else {
                    if (porcentaje > 60) {
                        this.valorPie = this.transformNumberToMoney("" + (0.6 * numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = "60%";
                    }
                    else {
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    }
                }
            }
        }
        else {
            if (parseInt(this.valorCheckCuota) == 25) {
                if (porcentaje < 20) {
                    this.valorPie = this.transformNumberToMoney("" + (0.2 * numeroPrecio));
                    this.valorPieResumen = this.valorPie;
                    this.valorPorcentaje = "20%";
                }
                else {
                    if (porcentaje > 60) {
                        this.valorPie = this.transformNumberToMoney("" + (0.6 * numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = "60%";
                    }
                    else {
                        //this.valorPie = this.transformNumberToMoney(""+((porcentaje/100)*numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    }
                }
            }
            else {
                if (porcentaje < 20) {
                    this.valorPie = this.transformNumberToMoney("" + (0.2 * numeroPrecio));
                    this.valorPieResumen = this.valorPie;
                    this.valorPorcentaje = "20%";
                }
                else {
                    if (porcentaje > 50) {
                        this.valorPie = this.transformNumberToMoney("" + (0.5 * numeroPrecio));
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = "50%";
                    }
                    else {
                        this.valorPieResumen = this.valorPie;
                        this.valorPorcentaje = (porcentaje.toFixed(0) + "%").replace(/\./g, ',');
                    }
                }
            }
        }
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.guardaUltimoValor = function () {
        this.ultimoValorPie = this.valorPie;
    };
    MasterPageComponent.prototype.changeValorCheckCuota = function (value) {
        this.valorCheckCuota = value;
        this.fechaCuoton = this.calculaFecha2("cuoton", 0, parseInt(this.valorCheckCuota));
        this.valor2 = (parseInt(value) - 1).toString();
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            if (parseInt(value) == 25) {
                this.valorLimiteSuperiorPie = '50%';
                this.toolTipPie = false;
                var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
                var porcentaje = (numeroPie / parseInt(this.rangePrecioVehiculo)) * 100;
                if (porcentaje > 50) {
                    this.valorPorcentaje = '50%';
                    var nuevoPie = (parseInt(this.rangePrecioVehiculo) * 50) / 100;
                    this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                    this.valorPieResumen = this.valorPie;
                }
                this.valorDesgravamen = parseFloat(this.valorDesgravamen25);
            }
            else {
                this.valorLimiteSuperiorPie = '60%';
                this.toolTipPie = true;
                this.valorDesgravamen = parseFloat(this.valorDesgravamen37);
            }
        }
        else {
            if (parseInt(value) == 25) {
                this.valorLimiteSuperiorPie = '60%';
                this.toolTipPie = true;
                var numeroPie = parseInt(this.transformMoneyToNumber(this.valorPie));
                var porcentaje = (numeroPie / parseInt(this.rangePrecioVehiculo)) * 100;
                if (porcentaje > 60) {
                    this.valorPorcentaje = '60%';
                    var nuevoPie = (parseInt(this.rangePrecioVehiculo) * 60) / 100;
                    this.valorPie = this.transformNumberToMoney(nuevoPie.toString());
                    this.valorPieResumen = this.valorPie;
                }
                this.valorDesgravamen = parseFloat(this.valorDesgravamen25);
            }
            else {
                this.valorLimiteSuperiorPie = '50%';
                this.toolTipPie = false;
                this.valorDesgravamen = parseFloat(this.valorDesgravamen37);
            }
        }
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
    };
    MasterPageComponent.prototype.calculaValorCae = function (montoLiquido) {
        var numeroCae = this.simulacionService.secante(parseInt(this.valorCheckCuota), parseInt(this.rangeValorCuota), montoLiquido, parseInt(this.transformMoneyToNumber(this.ultimaCuota)));
        this.valor_cae = ((numeroCae * 100).toFixed(2) + "%").replace(/\./g, ',');
    };
    MasterPageComponent.prototype.enviaSimulacionMail = function () {
        var _this = this;
        this.flagValida = "0";
        var correoServicioEmail = "";
        var rutServicioEmail = "";
        this.estadoMataAngustiaModales = false;
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
            correoServicioEmail = this.enviaSimulacionFormGroup4.controls.mail.value;
        }
        else {
            correoServicioEmail = this.enviaSimulacionFormGroup.controls.mail.value;
            rutServicioEmail = this.enviaSimulacionFormGroup.controls.rut.value;
        }
        this.email = correoServicioEmail;
        var flagDesgravamen = "NO";
        var flagProteccion = "NO";
        if (this.checkDesgravamen == true) {
            flagDesgravamen = "SI";
        }
        if (this.checkProteccion == true) {
            flagProteccion = "SI";
        }
        var nombreEnvioMail = "";
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
            nombreEnvioMail = sessionStorage.getItem('fullNameSimuladorAutomotriz');
        }
        else {
            nombreEnvioMail = this.enviaSimulacionFormGroup.controls.nombreApellido.value;
        }
        this.flagValida = "1";
        this.simulacionService.sendEnvioMail(correoServicioEmail, nombreEnvioMail, this.montoCuotas, this.montoLiquido, this.valorCheckCuota, this.costoTotalCredito, this.valor_tasa_mensual, this.valor_cae, this.fecha_primera_cuota, flagDesgravamen, flagProteccion).subscribe(function (response) {
            if (response.respuesta.estado != null) {
                var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                var rutCli = "";
                if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
                    rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                }
                else {
                    if (rutServicioEmail == "") {
                        rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                    }
                    else {
                        rutCli = _this.transformMoneyToNumber(rutServicioEmail);
                    }
                }
                var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                var fechaVen = _this.calculaFecha2("plus", 2, 37);
                _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), correoServicioEmail, "").subscribe(function (response) {
                });
                showExitoMail();
                _this.estadoMataAngustiaModales = true;
            }
            else {
                var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                var rutCli = "";
                if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
                    rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                }
                else {
                    if (rutServicioEmail == "") {
                        rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                    }
                    else {
                        rutCli = _this.transformMoneyToNumber(rutServicioEmail);
                    }
                }
                var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                var fechaVen = _this.calculaFecha2("plus", 2, 37);
                _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "ERRORSERVICIO", "").subscribe(function (response) {
                });
                showErrorMail();
                _this.estadoMataAngustiaModales = true;
            }
        }, function (error) {
            var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
            valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
            var rutCli = "";
            if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
                rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            }
            else {
                if (rutServicioEmail == "") {
                    rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                }
                else {
                    rutCli = _this.transformMoneyToNumber(rutServicioEmail);
                }
            }
            var fechaConsulta = _this.calculaFecha2("now", 2, 37);
            var fechaVen = _this.calculaFecha2("plus", 2, 37);
            _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "ERRORSERVICIO", "").subscribe(function (response) {
            });
            showErrorMail();
            _this.estadoMataAngustiaModales = true;
        });
    };
    MasterPageComponent.prototype.cambiaEstadoBoton = function () {
        console.log("entre al modal cambia estado boton");
        this.flagValida = "0";
    };
    MasterPageComponent.prototype.enviaQuieroContacto = function () {
        var _this = this;
        this.flagValida = "1";
        var casoOrigen = "WebMaster Sitio Publico";
        var infoAd = "CW_PPU_SC";
        var rutCti = "";
        var rutCli = "";
        this.estadoMataAngustiaModales = false;
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PRIVADO") {
            casoOrigen = "WebMaster Sitio Privado";
            infoAd = "CW_PPR_SC";
            rutCti = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            ;
        }
        else {
            casoOrigen = "WebMaster Sitio Publico";
            infoAd = "CW_PPU_SC";
            rutCti = this.enviaSimulacionFormGroup2.controls.rut.value;
            rutCli = this.enviaSimulacionFormGroup2.controls.rut.value;
            if (rutCti == "") {
                rutCti = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
                rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            }
        }
        rutCti = rutCti.replace(/\./g, '').replace(/-/g, '');
        rutCli = rutCli.replace(/\./g, '').replace(/-/g, '');
        //rutCti = rutCti.substring(0, rutCti.length-1) +"-"+rutCti.substring(rutCti.length-1);
        console.log("rut cti enviar: " + rutCti);
        var descripcion = "{\"cuotas\": \"" + this.valorCheckCuota.toString() + "\", \"valorcuota\": \"" + this.transformMoneyToNumber(this.montoCuotas) + "\",\"montoliquido\": \"" + this.transformMoneyToNumber(this.montoLiquido) + "\", \"montototal\": \"" + this.transformMoneyToNumber(this.costoTotalCredito) + "\", \"tasa\": \"" + this.valor_tasa_mensual + "\"}";
        this.simulacionService.sendPostCTI(rutCti, casoOrigen, infoAd, descripcion).subscribe(function (response) {
            if (response.CASO_ID != null) {
                contactoOK();
                _this.estadoMataAngustiaModales = true;
                var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                var fechaVen = _this.calculaFecha2("plus", 2, 37);
                _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", response.CASO_ID).subscribe(function (response) {
                });
            }
            else {
                if (response.CLIENTE_BANCO != null) {
                    contactoOK();
                    _this.estadoMataAngustiaModales = true;
                    var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                    valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                    var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                    var fechaVen = _this.calculaFecha2("plus", 2, 37);
                    if (response.CLIENTE_BANCO == "NO") {
                        _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "NOCLIENTE").subscribe(function (response) {
                        });
                    }
                    else {
                        _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "SICLIENTE;YAENVIOCTI").subscribe(function (response) {
                        });
                    }
                }
                else {
                    showErrorCti();
                    _this.estadoMataAngustiaModales = true;
                    var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                    valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                    var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                    var fechaVen = _this.calculaFecha2("plus", 2, 37);
                    _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "ERRORSERVICIO").subscribe(function (response) {
                    });
                }
            }
        }, function (error) {
            showErrorCti();
            _this.estadoMataAngustiaModales = true;
            var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
            valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
            var fechaConsulta = _this.calculaFecha2("now", 2, 37);
            var fechaVen = _this.calculaFecha2("plus", 2, 37);
            _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "ERRORSERVICIO").subscribe(function (response) {
            });
        });
    };
    MasterPageComponent.prototype.SimuladorCreditoAutomotrizInteligente = function (valorAuto, plazo, tasaInteres, montoLiquido, notario, prenda) {
        var seguros;
        if (this.checkDesgravamen == true && this.checkProteccion == true) {
            seguros = [this.valorDesgravamen, this.valorCesantia];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == false) {
            seguros = [0, 0];
        }
        if (this.checkDesgravamen == true && this.checkProteccion == false) {
            seguros = [this.valorDesgravamen, 0];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == true) {
            seguros = [0, this.valorCesantia];
        }
        var cuotaFinal = this.simulacionService.calculaCuotaFinal(valorAuto, plazo);
        var capitalCuotaFinal = this.simulacionService.calculaCapitalCuotaFinal(cuotaFinal, tasaInteres / 100);
        this.montoBruto = this.simulacionService.calculaMontoBruto2(this.valorImpuesto, montoLiquido + notario + prenda, montoLiquido + notario + prenda, seguros, parseInt(this.valorCheckCuota));
        var capitalCuotaMensual = this.simulacionService.calculaCapitalCuotaMensual(parseFloat(this.montoBruto), capitalCuotaFinal);
        var cuotaMensual = this.simulacionService.calculaCuotaMensual2(parseFloat(this.montoBruto), tasaInteres / 100, plazo, capitalCuotaFinal, capitalCuotaMensual, this.valorFactor);
        this.montoCuotas = this.transformNumberToMoney("" + parseInt("" + cuotaMensual));
        this.valorCuota = this.montoCuotas;
        this.rangeValorCuota = this.transformMoneyToNumber(this.montoCuotas);
        document.getElementById('range-slider__range_2').value = this.rangeValorCuota;
        cssIsolatedRangeCuota(this.rangeValorCuota);
        cssIsolatedRange(this.rangePrecioVehiculo);
        this.ultimaCuota = this.transformNumberToMoney("" + cuotaFinal);
        this.costoTotalCredito = this.transformNumberToMoney("" + (parseInt("" + cuotaMensual) * (parseInt(this.valorCheckCuota) - 1) + cuotaFinal));
        this.montoLiquido = this.transformNumberToMoney("" + (parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie))));
        this.calculaValorCae(parseInt(this.transformMoneyToNumber(this.montoLiquido)));
    };
    MasterPageComponent.prototype.SimuladorCreditoAutomotrizInteligenteNoPinta = function (valorAuto, plazo, tasaInteres, montoLiquido, notario, prenda) {
        var seguros;
        if (this.checkDesgravamen == true && this.checkProteccion == true) {
            seguros = [this.valorDesgravamen, this.valorCesantia];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == false) {
            seguros = [0, 0];
        }
        if (this.checkDesgravamen == true && this.checkProteccion == false) {
            seguros = [this.valorDesgravamen, 0];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == true) {
            seguros = [0, this.valorCesantia];
        }
        var cuotaFinal = this.simulacionService.calculaCuotaFinal(valorAuto, plazo);
        var capitalCuotaFinal = this.simulacionService.calculaCapitalCuotaFinal(cuotaFinal, tasaInteres / 100);
        this.montoBruto = this.simulacionService.calculaMontoBruto2(this.valorImpuesto, montoLiquido + notario + prenda, montoLiquido + notario + prenda, seguros, parseInt(this.valorCheckCuota));
        var capitalCuotaMensual = this.simulacionService.calculaCapitalCuotaMensual(parseFloat(this.montoBruto), capitalCuotaFinal);
        var cuotaMensual = this.simulacionService.calculaCuotaMensual2(parseFloat(this.montoBruto), tasaInteres / 100, plazo, capitalCuotaFinal, capitalCuotaMensual, this.valorFactor);
        return cuotaMensual;
    };
    MasterPageComponent.prototype.SimuladorCreditoAutomotrizProtegido = function (valorAuto, plazo, tasaInteres, montoLiquido, notario, prenda, pie) {
        var seguros;
        if (this.checkDesgravamen == true && this.checkProteccion == true) {
            seguros = [this.valorDesgravamen, this.valorCesantia];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == false) {
            seguros = [0, 0];
        }
        if (this.checkDesgravamen == true && this.checkProteccion == false) {
            seguros = [this.valorDesgravamen, 0];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == true) {
            seguros = [0, this.valorCesantia];
        }
        var cuotaFinal = this.simulacionService.calculaCuotaFinalProtegido(valorAuto, plazo, pie);
        var capitalCuotaFinal = this.simulacionService.calculaCapitalCuotaFinal(cuotaFinal, tasaInteres / 100);
        this.montoBruto = this.simulacionService.calculaMontoBruto2(this.valorImpuesto, montoLiquido + notario + prenda, montoLiquido + notario + prenda, seguros, parseInt(this.valorCheckCuota));
        var capitalCuotaMensual = this.simulacionService.calculaCapitalCuotaMensual(parseFloat(this.montoBruto), capitalCuotaFinal);
        var cuotaMensual = this.simulacionService.calculaCuotaMensual2(parseFloat(this.montoBruto), tasaInteres / 100, plazo, capitalCuotaFinal, capitalCuotaMensual, this.valorFactor);
        this.montoCuotas = this.transformNumberToMoney("" + parseInt("" + cuotaMensual));
        this.valorCuota = this.montoCuotas;
        this.rangeValorCuota = this.transformMoneyToNumber(this.montoCuotas);
        document.getElementById('range-slider__range_2').value = this.rangeValorCuota;
        cssIsolatedRangeCuota(this.rangeValorCuota);
        cssIsolatedRange(this.rangePrecioVehiculo);
        this.ultimaCuota = this.transformNumberToMoney("" + cuotaFinal);
        this.costoTotalCredito = this.transformNumberToMoney("" + (parseInt("" + cuotaMensual) * (parseInt(this.valorCheckCuota) - 1) + cuotaFinal));
        this.montoLiquido = this.transformNumberToMoney("" + (parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie))));
        this.calculaValorCae(parseInt(this.transformMoneyToNumber(this.montoLiquido)));
    };
    MasterPageComponent.prototype.SimuladorCreditoAutomotrizProtegidoNoPinta = function (valorAuto, plazo, tasaInteres, montoLiquido, notario, prenda, pie) {
        var seguros;
        if (this.checkDesgravamen == true && this.checkProteccion == true) {
            seguros = [this.valorDesgravamen, this.valorCesantia];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == false) {
            seguros = [0, 0];
        }
        if (this.checkDesgravamen == true && this.checkProteccion == false) {
            seguros = [this.valorDesgravamen, 0];
        }
        if (this.checkDesgravamen == false && this.checkProteccion == true) {
            seguros = [0, this.valorCesantia];
        }
        var cuotaFinal = this.simulacionService.calculaCuotaFinalProtegido(valorAuto, plazo, pie);
        var capitalCuotaFinal = this.simulacionService.calculaCapitalCuotaFinal(cuotaFinal, tasaInteres / 100);
        this.montoBruto = this.simulacionService.calculaMontoBruto2(this.valorImpuesto, montoLiquido + notario + prenda, montoLiquido + notario + prenda, seguros, parseInt(this.valorCheckCuota));
        var capitalCuotaMensual = this.simulacionService.calculaCapitalCuotaMensual(parseFloat(this.montoBruto), capitalCuotaFinal);
        var cuotaMensual = this.simulacionService.calculaCuotaMensual2(parseFloat(this.montoBruto), tasaInteres / 100, plazo, capitalCuotaFinal, capitalCuotaMensual, this.valorFactor);
        return cuotaMensual;
    };
    MasterPageComponent.prototype.requestDataFromMultipleSources = function () {
        var response1 = this.simulacionService.obtieneTasas();
        var response2 = this.simulacionService.obtieneValorNotario();
        var response3 = this.simulacionService.obtieneValorPrenda();
        var response4 = this.simulacionService.obtieneValorDesgravamen();
        var response5 = this.simulacionService.obtieneValorCesantia();
        var response6 = this.simulacionService.obtieneValorImpuesto();
        var response7 = this.simulacionService.obtieneValorFactor();
        var response8 = this.simulacionService.obtieneValorPreguntas();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([response1, response2, response3, response4, response5, response6, response7, response8]);
    };
    MasterPageComponent.prototype.preCarga = function () {
        var _this = this;
        //inicio
        this.valorTasaInteligente = "0,80%";
        this.valorTasaProtegido = "0,79%";
        this.valorDesgravamen25 = 13.0679.toString();
        this.valorDesgravamen37 = 19.1201.toString();
        this.valorNotario = 650;
        this.valorPrenda = 80000;
        this.valorDesgravamen = parseFloat(this.valorDesgravamen37);
        this.valorCesantia = 0.00087;
        this.valor_tasa_mensual = this.valorTasaInteligente;
        this.valorImpuesto = 0.008;
        this.valorFactor = 0.00015;
        //fin
        this.toolTipTipoCredito = true;
        this.valorPie = '$15.000.000';
        this.ultimoValorPie = '$15.000.000';
        this.valorPorcentaje = '60%';
        this.valor_cae = '12,78%';
        this.tipo_seguro_desgravamen = 'Desgravamen A través de Banco BICE';
        this.rangePrecioVehiculo = '25000000';
        this.rangeValorCuota = '142500';
        this.precioVehiculo = '$25.000.000';
        this.valorCuota = '$142.500';
        this.fecha_primera_cuota = this.calculaFecha2("plus", 0, 25);
        this.montoCuotas = '$142.500';
        this.costoTotalCredito = '$10.000.000';
        this.montoLiquido = '$10.000.000';
        this.valorPieResumen = '$15.000.000';
        this.valorCheckCuota = '37';
        this.fechaCuoton = this.calculaFecha2("cuoton", 0, parseInt(this.valorCheckCuota));
        this.ultimaCuota = '$5.000.000';
        this.ultimaCuota = this.transformNumberToMoney("" + this.simulacionService.calculaCuotaFinal(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota)));
        var montoLiquido = parseInt(this.rangePrecioVehiculo) - parseInt(this.transformMoneyToNumber(this.valorPie));
        if (this.valorTipoCredito == "Automotriz Inteligente") {
            this.SimuladorCreditoAutomotrizInteligente(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda);
        }
        else {
            this.SimuladorCreditoAutomotrizProtegido(parseInt(this.rangePrecioVehiculo), parseInt(this.valorCheckCuota), this.transformPercentageToStringDecimal(this.valor_tasa_mensual), montoLiquido, this.valorNotario, this.valorPrenda, parseInt(this.transformMoneyToNumber(this.valorPie)));
        }
        this.calculaValorCae(montoLiquido);
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == "PUBLICO") {
            var rutCli_1 = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            var fechaConsulta = this.calculaFecha2("now", 2, 37);
            this.simulacionService.ingresaTracking(rutCli_1, fechaConsulta, 'SIMULACION', '0', '0', '0', '0', '0', '01/01/90', '0', '0', '0', '0', '0', '0', '0', '', '').subscribe(function (response) {
            });
        }
        else {
            var casoOrigen = "CW_PPR_SC";
            var rutCti = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            var rutCli = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            //rutCti = this.transformMoneyToNumber(rutCti);
            //rutCli = this.transformMoneyToNumber(rutCli);
            //rutCti = rutCti.substring(0, rutCti.length-1) +"-"+rutCti.substring(rutCti.length-1);
            rutCti = rutCti.replace(/\./g, '').replace(/-/g, '');
            rutCli = rutCli.replace(/\./g, '').replace(/-/g, '');
            var descripcion = "Cliente ha simulado Crédito";
            this.simulacionService.sendPostCTI(rutCti, "WebMaster Sitio Privado", "CW_PPR_SC", descripcion).subscribe(function (response) {
                if (response.CASO_ID != null) {
                    var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                    valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                    var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                    var fechaVen = _this.calculaFecha2("plus", 2, 37);
                    _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", response.CASO_ID).subscribe(function (response) {
                    });
                }
                else {
                    if (response.CLIENTE_BANCO != null) {
                        var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                        valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                        var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                        var fechaVen = _this.calculaFecha2("plus", 2, 37);
                        if (response.CLIENTE_BANCO == "NO") {
                            _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "NOCLIENTE").subscribe(function (response) {
                            });
                        }
                        else {
                            _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "SICLIENTE;YAENVIOCTI").subscribe(function (response) {
                            });
                        }
                    }
                    else {
                        var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                        valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                        var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                        var fechaVen = _this.calculaFecha2("plus", 2, 37);
                        _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "ERRORSERVICIO").subscribe(function (response) {
                        });
                    }
                }
            }, function (error) {
                var valorTasaAnual = _this.valor_tasa_mensual.replace(/\%/g, '').replace(/\,/g, '.');
                valorTasaAnual = (parseFloat(valorTasaAnual) * 12).toFixed(2);
                var fechaConsulta = _this.calculaFecha2("now", 2, 37);
                var fechaVen = _this.calculaFecha2("plus", 2, 37);
                _this.simulacionService.ingresaTracking(rutCli, fechaConsulta, 'SIMULACION', _this.transformMoneyToNumber(_this.precioVehiculo), _this.transformMoneyToNumber(_this.montoLiquido), parseFloat(_this.montoBruto).toFixed(0).toString(), _this.valorCheckCuota.toString(), _this.transformMoneyToNumber(_this.montoCuotas), fechaVen, '18000', '650', '10907', _this.valor_tasa_mensual.replace(/\%/g, ''), valorTasaAnual.toString().replace(/\./g, ','), _this.valor_cae.replace(/\%/g, ''), _this.transformMoneyToNumber(_this.costoTotalCredito), "", "ERRORSERVICIO").subscribe(function (response) {
                });
            });
        }
        document.getElementById('loadingScreen').style.opacity = "0";
        document.getElementById('loadingScreen').remove();
    };
    MasterPageComponent.prototype.obtieneFechaHoy = function () {
        var hoy = new Date();
        var day = hoy.getDate();
        var monthIndex = (hoy.getMonth() + 1).toString();
        if (monthIndex.length == 1) {
            monthIndex = "0" + monthIndex;
        }
        var year = hoy.getFullYear();
        var fechaConsulta = day + '/' + monthIndex + '/' + year.toString().substring(2, 4);
        return fechaConsulta;
    };
    MasterPageComponent.prototype.calculaFecha = function (values) {
        var fechaFull = '';
        var nowDatePlus = new Date();
        if (values == "plus") {
            nowDatePlus.setDate(nowDatePlus.getDate() + 30);
            if (nowDatePlus.getDate() != 31 && nowDatePlus.getMonth() == 11) {
                nowDatePlus.setFullYear(nowDatePlus.getFullYear() + 1);
                nowDatePlus.setMonth(0);
            }
        }
        if (values == "now") {
            nowDatePlus.setDate(nowDatePlus.getDate());
        }
        var dd = nowDatePlus.getDate();
        var mm = nowDatePlus.getMonth();
        mm += 1;
        var yy = nowDatePlus.getFullYear().toString().substr(2);
        var ddToString = dd.toString();
        var mmToString = mm.toString();
        if (mm < 10) {
            mmToString = "0" + mm;
        }
        if (dd < 10) {
            ddToString = "0" + dd;
        }
        fechaFull = ddToString + "/" + mmToString + "/" + yy;
        return fechaFull;
    };
    MasterPageComponent.prototype.calculaFecha2 = function (values, tamanoAno, cuotas) {
        var fechaFull = '';
        var nowDatePlus = new Date();
        if (values == "plus") {
            nowDatePlus.setDate(nowDatePlus.getDate() + 30);
            if (nowDatePlus.getDate() != 31 && nowDatePlus.getMonth() == 11) {
                nowDatePlus.setFullYear(nowDatePlus.getFullYear() + 1);
                nowDatePlus.setMonth(0);
            }
        }
        if (values == "now") {
            nowDatePlus.setDate(nowDatePlus.getDate());
        }
        if (values == "cuoton") {
            nowDatePlus.setMonth(nowDatePlus.getMonth() + cuotas);
        }
        var dd = nowDatePlus.getDate();
        var mm = nowDatePlus.getMonth();
        mm += 1;
        var yy = nowDatePlus.getFullYear().toString().substr(tamanoAno);
        var ddToString = dd.toString();
        var mmToString = mm.toString();
        if (mm < 10) {
            mmToString = "0" + mm;
        }
        if (dd < 10) {
            ddToString = "0" + dd;
        }
        fechaFull = ddToString + "/" + mmToString + "/" + yy;
        return fechaFull;
    };
    MasterPageComponent.prototype.ngOnInit = function () {
        pruebajc();
        /*this.requestDataFromMultipleSources().subscribe(
    
          (responseList) => {
    
            this.responseDataTasas = responseList[0];
            this.responseDataNotario = responseList[1];
            this.responseDataPrenda = responseList[2];
            this.responseDataDesgravamen = responseList[3];
            this.responseDataCesantia = responseList[4];
            this.responseDataImpuesto = responseList[5];
            this.responseDataFactor = responseList[6];
            this.responseDataPreguntas = responseList[7];
    
            if(this.responseDataNotario.length>0 && this.responseDataPrenda.length>0 && this.responseDataDesgravamen.length>0 && this.responseDataCesantia.length>0 && this.responseDataImpuesto.length>0 && this.responseDataFactor.length>0 && this.responseDataPreguntas.length>0){
    
              this.valorTasaInteligente = this.responseDataTasas[0].valorTasa;
              this.valorTasaInteligente = this.valorTasaInteligente.replace(".",",")+"%";
              this.valorTasaProtegido = this.responseDataTasas[1].valorTasa;
              this.valorTasaProtegido =this.valorTasaProtegido.replace(".",",")+"%";
    
              this.valorDesgravamen25 = parseFloat(this.responseDataDesgravamen[1].valorParametro3).toString();
              this.valorDesgravamen37 = parseFloat(this.responseDataDesgravamen[2].valorParametro3).toString();
    
    
              this.valorNotario=parseInt(this.responseDataNotario[0].valorParametro);
              this.valorPrenda=parseInt(this.responseDataPrenda[0].valorParametro);
            //this.valorDesgravamen = 13.06;
              this.valorDesgravamen = parseFloat(this.valorDesgravamen37);
            //this.valorCesantia = 8.7;
              this.valorCesantia = parseFloat(this.responseDataCesantia[0].valorParametro);
            //this.valor_tasa_mensual='0,8%';
              this.valor_tasa_mensual= this.valorTasaInteligente;
              this.valorImpuesto = parseFloat(this.responseDataImpuesto[1].valorParametro2);
    
              this.valorFactor = parseFloat(this.responseDataFactor[0].valorParametro);
    
              this.flagPreguntas = this.responseDataPreguntas[0].valorParametro.toString();
    
              this.preCarga();
            }
            else{
              (<HTMLInputElement>document.getElementById('loadingScreen')).style.opacity = "0";
              (<HTMLInputElement>document.getElementById('loadingScreen')).remove();
              this.router.navigate(['tokenerror']);
            }
    
    
          },
          (error) =>{
    
            (<HTMLInputElement>document.getElementById('loadingScreen')).style.opacity = "0";
            (<HTMLInputElement>document.getElementById('loadingScreen')).remove();
            this.router.navigate(['tokenerror']);
          }
    
        );*/
        this.preCarga();
        if (sessionStorage.getItem('canalSimuladorAutomotriz') == 'PUBLICO') {
            this.enviaSimulacionFormGroup = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup2 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup3 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            var mail = sessionStorage.getItem('EmailSimuladorAutomotriz');
            var nombre = sessionStorage.getItem('fullNameSimuladorAutomotriz');
            var rut = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            this.enviaSimulacionFormGroup4 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup5 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup6 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
        }
        else {
            this.enviaSimulacionFormGroup = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup2 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup3 = this.formBuilderEnviaSimulacion.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                nombreApellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/[A-Za-z]+\s*[A-Za-z]+$/)]],
                rut: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\d{1,2}\.{0,1}\d{3}\.{0,1}\d{3}[-]{0,1}[0-9kK]{1}$/), _validator_rut_validator__WEBPACK_IMPORTED_MODULE_7__["ValidateRut"]]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            var mail = sessionStorage.getItem('EmailSimuladorAutomotriz');
            var nombre = sessionStorage.getItem('fullNameSimuladorAutomotriz');
            var rut = sessionStorage.getItem('rutClienteSimuladorAutomotriz');
            this.enviaSimulacionFormGroup4 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup5 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.enviaSimulacionFormGroup6 = this.formBuilderEnviaSimulacion.group({
                mail: [mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9\-_\.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/)]],
                celular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{8}$')]]
            });
            this.nombreCliente = sessionStorage.getItem('fullNameSimuladorAutomotriz');
        }
    };
    MasterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credper-masterpage',
            template: __webpack_require__(/*! ./masterpage.component.html */ "./src/app/componentes/masterPage/masterpage.component.html"),
            styles: [__webpack_require__(/*! ./masterpage.component.css */ "./src/app/componentes/masterPage/masterpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _servicios_simulacionAutomotriz_simulacion_automotriz_service__WEBPACK_IMPORTED_MODULE_2__["SimulacionAutomotrizService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], MasterPageComponent);
    return MasterPageComponent;
}());



/***/ }),

/***/ "./src/app/componentes/noService/noservice.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/noService/noservice.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25vU2VydmljZS9ub3NlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/noService/noservice.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/noService/noservice.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1 class=\"title\">Créditos Personales</h1>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"height: 400px;\">\n    <div class=\"col-md-12\" style=\"height: inherit;\">\n      <div class=\"elemental-box\"  style=\"height: inherit;\">\n        <header class=\"overlay-menu-toggle\">\n          <div class=\"icon\">\n            <img src=\"./assets/img/money-stack.svg\" alt=\"\">\n          </div>\n          <div class=\"title\">\n            Simula tu Crédito\n          </div>\n        </header>\n        <section>\n          <div class=\"card-contents\">\n            <div class=\"row\" style=\"margin-bottom: 20px;\">\n                <div class=\"col-xs-12 text-center\" style=\"margin-top:6%\">\n                    <div class=\"col-xs-12\">\n                      <img src='./assets/img/warning.svg' style=\"width: 60px; height: auto; \">\n                      <b style=\"color:rgb(235, 160, 47); font-size: 25px\">&nbsp;&nbsp; Estimado(a) Cliente:</b>\n                      <br>\n                      <span class=\"sub-title\" style=\"margin-left:15%\">El servicio no se encuentra disponible</span>\n                    </div>\n                  </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/noService/noservice.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/noService/noservice.component.ts ***!
  \**************************************************************/
/*! exports provided: NoserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoserviceComponent", function() { return NoserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoserviceComponent = /** @class */ (function () {
    function NoserviceComponent() {
    }
    NoserviceComponent.prototype.ngOnInit = function () {
    };
    NoserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tef-noservice',
            template: __webpack_require__(/*! ./noservice.component.html */ "./src/app/componentes/noService/noservice.component.html"),
            styles: [__webpack_require__(/*! ./noservice.component.css */ "./src/app/componentes/noService/noservice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoserviceComponent);
    return NoserviceComponent;
}());



/***/ }),

/***/ "./src/app/componentes/tokenError/tokenerror.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/tokenError/tokenerror.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3Rva2VuRXJyb3IvdG9rZW5lcnJvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/tokenError/tokenerror.component.html":
/*!******************************************************************!*\
  !*** ./src/app/componentes/tokenError/tokenerror.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br/>\n  <br/>\n  <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n          <div class=\"panel-group\">\n              <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\" style=\"background-color: #D9E3EC;\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-2 col-sm-2 col-md-2\">\n                            <img src=\"assets/img/bice-icon-64.png\" style=\"height: 33px; width: auto;margin-top: 5px;\"/>\n                        </div>\n                        <div class=\"col-xs-10 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1\">\n                            <h4 style=\"color: #326295;\">Simulador Crédito Automotriz</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-2 col-sm-1 col-sm-offset-2 col-md-1 col-md-offset-2\">\n                          <img src=\"assets/img/warning.svg\" style=\"height: 33px; width: auto;\"/>\n                      </div>\n                      <div class=\"col-xs-10 col-sm-9 col-md-9\">\n                            <h5 style=\"color: #326295;\">No puedes acceder a un área restringida</h5>\n                        </div>\n                  </div>\n                 \n                </div>\n              </div>\n          </div>\n      </div>\n\n  </div>  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/componentes/tokenError/tokenerror.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componentes/tokenError/tokenerror.component.ts ***!
  \****************************************************************/
/*! exports provided: TokenerrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenerrorComponent", function() { return TokenerrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");



var TokenerrorComponent = /** @class */ (function () {
    function TokenerrorComponent() {
        this.msjErrorToken = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].errorToken;
    }
    TokenerrorComponent.prototype.ngOnInit = function () {
        this.msjErrorToken = _utils_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].errorToken;
        document.getElementById('loadingScreen').style.opacity = "0";
        document.getElementById('loadingScreen').remove();
    };
    TokenerrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credper-tokenerror',
            template: __webpack_require__(/*! ./tokenerror.component.html */ "./src/app/componentes/tokenError/tokenerror.component.html"),
            styles: [__webpack_require__(/*! ./tokenerror.component.css */ "./src/app/componentes/tokenError/tokenerror.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenerrorComponent);
    return TokenerrorComponent;
}());



/***/ }),

/***/ "./src/app/directivas/only-number/only-number.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/directivas/only-number/only-number.directive.ts ***!
  \*****************************************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(_el) {
        this._el = _el;
    }
    OnlyNumberDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value.replace(/\./g, '');
        initalValue = initalValue.replace(/[a-zA-Z]*/g, '');
        initalValue = initalValue.replace('$', '');
        initalValue = initalValue.replace(/^\s+|\s+$/gm, '');
        //console.log("init value1: "+initalValue);
        if (!isNaN(initalValue)) {
            initalValue = initalValue.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            //console.log("init value2: "+initalValue);
            initalValue = initalValue.split('').reverse().join('').replace(/^[\.]/, '');
            //console.log("init value3: "+initalValue);
            if (initalValue === '') {
                this._el.nativeElement.value = initalValue;
            }
            else {
                this._el.nativeElement.value = '$' + initalValue;
            }
        }
        else {
            if (initalValue === '') {
                this._el.nativeElement.value = this._el.nativeElement.value.replace(/[^\d\.]*/g, '');
            }
            else {
                this._el.nativeElement.value = '$' + this._el.nativeElement.value.replace(/[^\d\.]*/g, '');
            }
        }
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onInputChange", null);
    OnlyNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[appOnlyNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/directivas/rut-chile/rut-chile.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directivas/rut-chile/rut-chile.directive.ts ***!
  \*************************************************************/
/*! exports provided: RutChileDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutChileDirective", function() { return RutChileDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RutChileDirective = /** @class */ (function () {
    function RutChileDirective(_el) {
        this._el = _el;
    }
    RutChileDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        console.log("valor entreda: " + initalValue);
        initalValue = initalValue.replace(/[^0-9kK]/g, '');
        console.log("rut formateo: " + this.formateaRut(initalValue));
        if (!isNaN(initalValue)) {
            this._el.nativeElement.value = this.formateaRut(initalValue);
        }
        else {
            this._el.nativeElement.value = this.formateaRut(initalValue);
        }
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    RutChileDirective.prototype.formateaRut = function (rut) {
        var rutPuntos = "";
        var actual = rut.replace(/^0+/, "");
        if (actual != '' && actual.length > 0) {
            var sinPuntos = actual.replace(/\./g, "");
            var actualLimpio = sinPuntos.replace(/-/g, "");
            var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
            rutPuntos = "";
            var i = 0;
            var j = 1;
            for (i = inicio.length - 1; i >= 0; i--) {
                var letra = inicio.charAt(i);
                rutPuntos = letra + rutPuntos;
                if (j % 3 == 0 && j <= inicio.length - 1) {
                    rutPuntos = "." + rutPuntos;
                }
                j++;
            }
            var dv = actualLimpio.substring(actualLimpio.length - 1);
            rutPuntos = rutPuntos + "-" + dv;
        }
        return rutPuntos;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RutChileDirective.prototype, "onInputChange", null);
    RutChileDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[appRutChile]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RutChileDirective);
    return RutChileDirective;
}());



/***/ }),

/***/ "./src/app/pipe/rut-chile.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipe/rut-chile.pipe.ts ***!
  \****************************************/
/*! exports provided: RutChilePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutChilePipe", function() { return RutChilePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RutChilePipe = /** @class */ (function () {
    function RutChilePipe() {
    }
    RutChilePipe.prototype.transform = function (value, args) {
        var initalValue = value;
        initalValue = initalValue.replace(/[^0-9kK]/g, '');
        return "$" + initalValue;
    };
    RutChilePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'rutChile'
        })
    ], RutChilePipe);
    return RutChilePipe;
}());



/***/ }),

/***/ "./src/app/servicios/secure/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/secure/auth.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _wstoken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wstoken.service */ "./src/app/servicios/secure/wstoken.service.ts");




//import { Functions } from '../../utils/functions';

//import * as Fingerprint2 from 'fingerprintjs2sync';
var AuthService = /** @class */ (function () {
    function AuthService(router, wsservice) {
        this.router = router;
        this.wsservice = wsservice;
    }
    // tslint:disable-next-line:cognitive-complexity
    AuthService.prototype.canActivate = function (route, state) {
        var _this = this;
        //const encodedData = 'DA39A2A27508B3BDC86AF18E5004E9ACED282E4558231A48DFA2D9AEAFFB696EE46CFB1EA60434C4D3EA60D75D373B0AA35CBE6699AF6B3FAD611A1B200A632F7787048E3B40F69979862D076F77BD937CD459AE138BF684817339B696082365DEAC684D890530666B0DA4EB13D67A2D566648B2D84F34ED7EE8AB337FF2667212C0F5B5568814E4580C285DE7155D938A91CF68D088B2FC83614286953542A0'//route.queryParamMap.get('ed');
        var token = route.queryParamMap.get('ed');
        var urlMobile = 'https://camilocorrea.github.io/demo3/?rut=0085193333&nombre=Enrique%20Berty%20Villarroel%20Arancibia&email=CAROLINA.BARRIENTOS@BICE.CL&telefono=224535833&canal=MB';
        var rutUrl = route.queryParamMap.get('rut');
        var nombreUrl = route.queryParamMap.get('nombre');
        var emailUrl = route.queryParamMap.get('email');
        var telefonoUrl = route.queryParamMap.get('telefono');
        var canal = route.queryParamMap.get('canal');
        var parametrosPP3015 = [];
        //localStorage.removeItem('canalSimuladorAutomotriz');
        //localStorage.removeItem('fullNameSimuladorAutomotriz');
        //localStorage.removeItem('rutClienteSimuladorAutomotriz');
        //localStorage.removeItem('rutCliente10SimuladorAutomotriz');
        //localStorage.removeItem('tokenSimuladorAutomotriz');
        //localStorage.removeItem('tokenOagSimuladorAutomotriz');
        var dispositivoLocal = sessionStorage.getItem("dispositivoSimuladorAutomotriz");
        var plataformaLocal = sessionStorage.getItem("plataformaSimuladorAutomotriz");
        var sistemaOperativoLocal = sessionStorage.getItem("sistemaOperativoSimuladorAutomotriz");
        var appLocal = "SIMCREDCON";
        if (token !== null && token.replace(/\s/g, "") !== "") {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.wsservice.TokenValidator(token, dispositivoLocal, plataformaLocal, appLocal, sistemaOperativoLocal).subscribe(function (data) {
                    if (data != null) {
                        sessionStorage.setItem("tokenOagSimuladorAutomotriz", data.tokenOag);
                        parametrosPP3015[0] = JSON.parse(data.informacion);
                        var currentRutFormat = _this.eliminarCaracteresIzquierdaRut(parametrosPP3015[0].rutCliente, '0');
                        sessionStorage.setItem('rutCliente10SimuladorAutomotriz', parametrosPP3015[0].rutCliente);
                        sessionStorage.setItem('rutClienteSimuladorAutomotriz', currentRutFormat);
                        sessionStorage.setItem('canalSimuladorAutomotriz', "PRIVADO");
                        sessionStorage.setItem('fullNameSimuladorAutomotriz', parametrosPP3015[0].nombre);
                        sessionStorage.setItem('EmailSimuladorAutomotriz', parametrosPP3015[0].EMAIL);
                        sessionStorage.setItem('HomePhoneSimuladorAutomotriz', parametrosPP3015[0].FONOPAR);
                        observer.next(true);
                        observer.complete();
                    }
                    else {
                        _this.router.navigate(['tokenerror']);
                        observer.next(false);
                        observer.complete();
                    }
                }, function (err) {
                    _this.router.navigate(['tokenerror']);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
        else {
            if (rutUrl !== null && rutUrl.replace(/\s/g, "") !== "") {
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                    var tokenPublico;
                    //localStorage.setItem('canal', 'PRIVADO');
                    //localStorage.setItem('rutCliente10', "0012345678");
                    //localStorage.setItem('rutCliente', "12345678");
                    //const currentRutFormat = this.eliminarCaracteresIzquierdaRut(rutUrl, '0');
                    //sessionStorage.setItem('rutCliente10SimuladorAutomotriz', "0012345678");
                    //sessionStorage.setItem('rutClienteSimuladorAutomotriz', "12345678");
                    //sessionStorage.setItem('canalSimuladorAutomotriz', 'PRIVADO');
                    //sessionStorage.setItem('fullNameSimuladorAutomotriz', nombreUrl);
                    //sessionStorage.setItem('EmailSimuladorAutomotriz', emailUrl);
                    //sessionStorage.setItem('HomePhoneSimuladorAutomotriz', telefonoUrl);
                    //sessionStorage.setItem('canalMBSimuladorAutomotriz', canal);
                    //observer.next(true);
                    //observer.complete();
                    _this.wsservice.GeneraTokenPublico("1").subscribe(function (data) {
                        if (data != null) {
                            tokenPublico = data.edPublico;
                            //this.validaOag(tokenPublico,dispositivoLocal,plataformaLocal,appLocal,sistemaOperativoLocal);
                            _this.wsservice.TokenValidator(tokenPublico, dispositivoLocal, plataformaLocal, appLocal, sistemaOperativoLocal).subscribe(function (data) {
                                if (data != null) {
                                    //localStorage.setItem('rutCliente10', data.rutCliente);
                                    sessionStorage.setItem("tokenOagSimuladorAutomotriz", data.tokenOag);
                                    //localStorage.setItem("rutCliente",data.rutCliente);
                                    //localStorage.setItem('canal', 'PUBLICO');
                                    var currentRutFormat = _this.eliminarCaracteresIzquierdaRut(rutUrl, '0');
                                    sessionStorage.setItem('rutCliente10SimuladorAutomotriz', rutUrl);
                                    sessionStorage.setItem('rutClienteSimuladorAutomotriz', currentRutFormat);
                                    sessionStorage.setItem('canalSimuladorAutomotriz', 'PRIVADO');
                                    sessionStorage.setItem('fullNameSimuladorAutomotriz', nombreUrl);
                                    sessionStorage.setItem('EmailSimuladorAutomotriz', emailUrl);
                                    sessionStorage.setItem('HomePhoneSimuladorAutomotriz', telefonoUrl);
                                    sessionStorage.setItem('canalMBSimuladorAutomotriz', canal);
                                    observer.next(true);
                                    observer.complete();
                                }
                                else {
                                    _this.router.navigate(['tokenerror']);
                                    observer.next(false);
                                    observer.complete();
                                }
                            }, function (error) {
                                _this.router.navigate(['tokenerror']);
                                observer.next(false);
                                observer.complete();
                            });
                        }
                        else {
                            _this.router.navigate(['tokenerror']);
                            observer.next(false);
                            observer.complete();
                        }
                    }, function (error) {
                        _this.router.navigate(['tokenerror']);
                        observer.next(false);
                        observer.complete();
                    });
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                    var tokenPublico;
                    sessionStorage.setItem('canalSimuladorAutomotriz', 'PUBLICO');
                    sessionStorage.setItem('rutCliente10SimuladorAutomotriz', "0012345678");
                    sessionStorage.setItem('rutClienteSimuladorAutomotriz', "12345678");
                    observer.next(true);
                    observer.complete();
                    /*this.wsservice.GeneraTokenPublico("1").subscribe((data:any) =>{
          
                      if(data != null){
          
                        tokenPublico = data.edPublico;
                        //this.validaOag(tokenPublico,dispositivoLocal,plataformaLocal,appLocal,sistemaOperativoLocal);
                        this.wsservice.TokenValidator(tokenPublico,dispositivoLocal,plataformaLocal,appLocal,sistemaOperativoLocal).subscribe(
          
                          (data:any) =>{
                            if(data != null){
          
                              sessionStorage.setItem('rutCliente10SimuladorAutomotriz', data.rutCliente);
                              sessionStorage.setItem("tokenOagSimuladorAutomotriz",data.tokenOag);
                              sessionStorage.setItem("rutClienteSimuladorAutomotriz",data.rutCliente);
                              sessionStorage.setItem('canalSimuladorAutomotriz', 'PUBLICO');
                              observer.next(true);
                              observer.complete();
                            }
                            else{
                              this.router.navigate(['tokenerror']);
                              observer.next(false);
                              observer.complete();
                            }
                          },
                          (error) => {
                            this.router.navigate(['tokenerror']);
                            observer.next(false);
                            observer.complete();
          
                          }
                        );
                      }
                      else{
                        this.router.navigate(['tokenerror']);
                        observer.next(false);
                        observer.complete();
          
                      }
                    },
                    error => {
                      this.router.navigate(['tokenerror']);
                      observer.next(false);
                      observer.complete();
          
                    });*/
                });
            }
        }
    };
    AuthService.prototype.eliminarCaracteresIzquierdaRut = function (rut, caracter) {
        if (rut === null) {
            return '';
        }
        var aux = '';
        var cont = 0;
        for (var _i = 0, rut_1 = rut; _i < rut_1.length; _i++) {
            var entry = rut_1[_i];
            if (entry === caracter) {
                cont++;
            }
            else {
                break;
            }
        }
        return rut.substring(cont, rut.length);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_wstoken_service__WEBPACK_IMPORTED_MODULE_4__["WstokenService"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _wstoken_service__WEBPACK_IMPORTED_MODULE_4__["WstokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servicios/secure/wstoken.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicios/secure/wstoken.service.ts ***!
  \*****************************************************/
/*! exports provided: WstokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WstokenService", function() { return WstokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var WstokenService = /** @class */ (function () {
    function WstokenService(http) {
        this.http = http;
        this.wstokenVlidation = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalidatoken;
        this.wstokenDecoder = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wstokenDecoder;
        this.wsGenerateToken = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsGenerateToken;
        this.wstokenPP3015 = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalidatokenOag;
        this.wstokenGeneraPublico = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsGeneraTokenPublico;
    }
    WstokenService.prototype.TokenValidator = function (encodedData, dispositivo, plataforma, app, sistemaOperativo) {
        var headers = new Headers({ Accept: 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        //const options = new RequestOptions({ headers });
        var body = JSON.parse('{ "dispositivo" : "' + dispositivo + '","encodedData": "' + encodedData + '","plataforma": "' + plataforma + '","app": "' + app + '","sistemaOperativo": "' + sistemaOperativo + '"}');
        var url = "" + this.wstokenPP3015;
        return this.http.post(url, body);
    };
    WstokenService.prototype.TokenDecoder = function (encodedData) {
        var headers = new Headers({ Accept: 'application/json' });
        //const options = new RequestOptions({ headers });
        var body = JSON.parse('{ "encodedData" : "' + encodedData + '"}');
        var url = "" + this.wstokenDecoder;
        return this.http.post(url, body);
    };
    // tslint:disable-next-line:max-line-length
    WstokenService.prototype.generateToken = function (rutCliente, rutUsuario, dispositivo, idAplicacion, sistemaOperacion, plataforma) {
        var headers = new Headers({ Accept: 'application/json' });
        //const options = new RequestOptions({ headers });
        var body = JSON.parse('{ "rutCliente" : "' + rutCliente + '",' +
            '"rutUsuario" : "' + rutUsuario + '",' +
            '"dispositivo" : "' + dispositivo + '",' +
            '"idAplicacion" : "' + idAplicacion + '",' +
            '"sistemaOperativo" : "' + sistemaOperacion + '",' +
            '"plataforma" : "' + plataforma + '"}');
        var url = "" + this.wsGenerateToken;
        return this.http.post(url, body);
    };
    WstokenService.prototype.GeneraTokenPublico = function (tipoCred) {
        var headers = new Headers({ Accept: 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        var body = JSON.parse('{ "tipoCred" : "' + tipoCred + '"}');
        var url = "" + this.wstokenGeneraPublico;
        return this.http.post(url, body);
    };
    WstokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WstokenService);
    return WstokenService;
}());



/***/ }),

/***/ "./src/app/servicios/simulacionAutomotriz/simulacion-automotriz.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/servicios/simulacionAutomotriz/simulacion-automotriz.service.ts ***!
  \*********************************************************************************/
/*! exports provided: SimulacionAutomotrizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulacionAutomotrizService", function() { return SimulacionAutomotrizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var SimulacionAutomotrizService = /** @class */ (function () {
    function SimulacionAutomotrizService(http) {
        this.http = http;
        this.baseOag = 'dispositivo=' + sessionStorage.getItem('dispositivoSimuladorAutomotriz') + '&rut=' + sessionStorage.getItem('rutCliente10SimuladorAutomotriz') + '&token=' + sessionStorage.getItem('tokenOagSimuladorAutomotriz');
        this.wsIngresaTracking = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsingresatracking;
        this.wsEnvioMail = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsenviomail;
        this.wsCti = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wscti;
        this.wsObtieneTasas = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsobtienetasas;
        this.wsValorNotario = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalornotario;
        this.wsValorPrenda = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalorprenda;
        this.wsValorDesgravamen = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalordesgravamen;
        this.wsValorCesantia = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalorcesantia;
        this.wsValorImpuesto = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalorimpuesto;
        this.wsValorFactor = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalorfactor;
        this.wsValorPreguntas = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsbase + this.baseOag + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wsvalorpreguntas;
        this.sumatoria = 0;
    }
    SimulacionAutomotrizService.prototype.ingresaTracking = function (rut, fechaConsulta, glosaAccion, montoPreAprobado, montoLiquido, montoBruto, numCuotas, valorCuota, fechaPrimerVencimiento, montoImpuesto, montoNotaria, montoSeguroDesgravamen, valorTasaMensual, valorTasaAnual, valorCae, montoCostoTotalCredito, flagMail, flagCti) {
        var apiURL = "" + this.wsIngresaTracking;
        var request = {
            "rut": sessionStorage.getItem('rutCliente10SimuladorAutomotriz'),
            "dispositivo": sessionStorage.getItem('dispositivoSimuladorAutomotriz'),
            "token": sessionStorage.getItem('tokenOagSimuladorAutomotriz'),
            "rutCliente": rut,
            "fechaConsulta": fechaConsulta,
            "glosaAccion": glosaAccion,
            "montoPreAprobado": montoPreAprobado,
            "montoLiquido": montoLiquido,
            "montoBruto": montoBruto,
            "numCuotas": numCuotas,
            "valorCuota": valorCuota,
            "fechaPrimerVencimiento": fechaPrimerVencimiento,
            "montoImpuesto": montoImpuesto,
            "montoNotaria": montoNotaria,
            "montoSeguroDesgravamen": montoSeguroDesgravamen,
            "valorTasaMensual": valorTasaMensual,
            "valorTasaAnual": valorTasaAnual,
            "valorCae": valorCae,
            "montoCostoTotalCredito": montoCostoTotalCredito,
            "glosaCanal": "Automotriz",
            "flagEmail": flagMail,
            "flagCti": flagCti
        };
        return this.http.post(apiURL, request);
    };
    SimulacionAutomotrizService.prototype.sendEnvioMail = function (email, nombre, valorCuota, montoLiquido, cuotas, costoTotalCredito, tasaMensual, cae, fechaPrimeraCuota, desgravamen, proteccion) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        var uRL = "" + this.wsEnvioMail;
        var arrayEmail = [
            {
                "posicionCampo": "1",
                "valorCampo": nombre
            },
            {
                "posicionCampo": "2",
                "valorCampo": valorCuota
            },
            {
                "posicionCampo": "3",
                "valorCampo": montoLiquido
            },
            {
                "posicionCampo": "4",
                "valorCampo": cuotas
            },
            {
                "posicionCampo": "5",
                "valorCampo": costoTotalCredito
            },
            {
                "posicionCampo": "6",
                "valorCampo": "$1.210.000"
            },
            {
                "posicionCampo": "7",
                "valorCampo": tasaMensual
            },
            {
                "posicionCampo": "8",
                "valorCampo": cae
            },
            {
                "posicionCampo": "9",
                "valorCampo": fechaPrimeraCuota
            },
            {
                "posicionCampo": "10",
                "valorCampo": desgravamen
            },
            {
                "posicionCampo": "11",
                "valorCampo": "NO"
            },
            {
                "posicionCampo": "12",
                "valorCampo": proteccion
            }
        ];
        var request = {
            "rut": sessionStorage.getItem('rutCliente10SimuladorAutomotriz'),
            "dispositivo": sessionStorage.getItem('dispositivoSimuladorAutomotriz'),
            "token": sessionStorage.getItem('tokenOagSimuladorAutomotriz'),
            "codigoServicio": "301",
            "tipoContacto": "RES_SIMUL",
            "toName": null,
            "toEmail": email,
            "datos": arrayEmail
        };
        return this.http.post(uRL, request, { headers: headers });
    };
    SimulacionAutomotrizService.prototype.sendPostCTI = function (rut, casoOrigen, casoInfo, descripcion) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        var uRL = "" + this.wsCti;
        var request = {
            "rut": sessionStorage.getItem('rutCliente10SimuladorAutomotriz'),
            "dispositivo": sessionStorage.getItem('dispositivoSimuladorAutomotriz'),
            "token": sessionStorage.getItem('tokenOagSimuladorAutomotriz'),
            "clienteRut": rut,
            "casoCategoria": "Solicitudes",
            "casoTipo": "Simulación",
            "casoItem": "0",
            "casoDescripcion": descripcion,
            "casoOrigen": casoOrigen,
            "casoInfoAdicional": casoInfo
        };
        return this.http.post(uRL, request, { headers: headers });
    };
    SimulacionAutomotrizService.prototype.obtieneTasas = function () {
        var apiURL = "" + this.wsObtieneTasas;
        return this.http.post(apiURL, {
            "rut": sessionStorage.getItem('rutCliente10SimuladorAutomotriz'),
            "dispositivo": sessionStorage.getItem('dispositivoSimuladorAutomotriz'),
            "token": sessionStorage.getItem('tokenOagSimuladorAutomotriz'),
            "tipoSimulacion": "automotriz"
        });
    };
    SimulacionAutomotrizService.prototype.obtieneValorNotario = function () {
        var apiURL = "" + this.wsValorNotario;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorPrenda = function () {
        var apiURL = "" + this.wsValorPrenda;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorDesgravamen = function () {
        var apiURL = "" + this.wsValorDesgravamen;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorCesantia = function () {
        var apiURL = "" + this.wsValorCesantia;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorImpuesto = function () {
        var apiURL = "" + this.wsValorImpuesto;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorFactor = function () {
        var apiURL = "" + this.wsValorFactor;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.obtieneValorPreguntas = function () {
        var apiURL = "" + this.wsValorPreguntas;
        return this.http.get(apiURL);
    };
    SimulacionAutomotrizService.prototype.calculaCapitalCuotaFinal = function (cuotaFinal, tasa) {
        return cuotaFinal / (1.0 + tasa);
    };
    SimulacionAutomotrizService.prototype.calculaCapitalCuotaMensual = function (montoBruto, capitalCuotaFinal) {
        return (montoBruto - capitalCuotaFinal);
    };
    SimulacionAutomotrizService.prototype.calculaCuotaFinal = function (valorAuto, plazo) {
        if (plazo == 25)
            return valorAuto * 0.5;
        if (plazo == 37)
            return valorAuto * 0.4;
        return 0;
    };
    SimulacionAutomotrizService.prototype.calculaCuotaFinalProtegido = function (valorAuto, plazo, pie) {
        var resul;
        if (plazo == 25)
            return (valorAuto * 0.6 - pie);
        if (plazo == 37)
            return (valorAuto * 0.5 - pie);
        return 0;
    };
    SimulacionAutomotrizService.prototype.calculaCuotaMensual = function (montoBruto, tasaInteres, numeroCuotas, capitalCuotaFinal, capitalCuotaMensual) {
        var unoMasTasa = 1 + tasaInteres;
        var unoMasTasaElevadoN = Math.pow(unoMasTasa, numeroCuotas);
        var arriba = capitalCuotaMensual * tasaInteres * unoMasTasaElevadoN;
        var abajo = unoMasTasaElevadoN - 1;
        var partido = arriba / abajo;
        //var cuotaMensual = partido + capitalCuotaFinal + unoMasTasa;
        var cuotaMensual = partido + (capitalCuotaFinal * tasaInteres);
        return cuotaMensual;
    };
    SimulacionAutomotrizService.prototype.calculaCuotaMensual2 = function (montoBruto, tasaInteres, numeroCuotas, capitalCuotaFinal, capitalCuotaMensual, factor) {
        var A = tasaInteres + factor;
        var B = Math.pow(1 + A, numeroCuotas - 1);
        var cm = ((capitalCuotaMensual * A * B) / (B - 1)) + capitalCuotaFinal * A;
        return cm;
    };
    SimulacionAutomotrizService.prototype.calculaMontoBruto = function (tasaInteres, cantCuotas, valorCuota) {
        var unoMasTasaElevadoCuotas = Math.pow((1.0 + tasaInteres), cantCuotas);
        var menosUno = unoMasTasaElevadoCuotas - 1.0;
        var porTasa = unoMasTasaElevadoCuotas * tasaInteres;
        return valorCuota * (menosUno / porTasa);
    };
    SimulacionAutomotrizService.prototype.calculaMontoBruto2 = function (impuesto, montoBruto, montoLiquido, seguros, numeroCuotas) {
        var imp1 = impuesto * montoBruto;
        var suma = imp1;
        var imp2;
        for (var i = 0; i < seguros.length; i++) {
            if (i == 0) {
                imp2 = seguros[i] * (montoBruto / 1000);
            }
            if (i == 1) {
                imp2 = seguros[i] * (montoBruto * numeroCuotas);
            }
            suma += imp2;
        }
        var bruto = montoLiquido + suma;
        var resta = suma - this.sumatoria;
        if (resta == 0)
            return montoBruto;
        this.sumatoria = suma;
        return this.calculaMontoBruto2(impuesto, bruto, montoLiquido, seguros, numeroCuotas);
    };
    SimulacionAutomotrizService.prototype.evaluaTIR = function (numCuotas, valorCuota, montoLiquido, tir) {
        var sumatoria = 0;
        for (var i = 1; i <= numCuotas; i++) {
            sumatoria += (valorCuota / Math.pow(1 + tir, i));
        }
        return sumatoria - montoLiquido;
    };
    SimulacionAutomotrizService.prototype.calculaTIR = function (numCuotas, valorCuota, montoLiquido) {
        var xs = [];
        xs.push(0);
        xs.push(1);
        var tirN = 0;
        for (var i = 1; i < 1000000; i++) {
            var arriba = (xs[i] - xs[i - 1]) * this.evaluaTIR(numCuotas, valorCuota, montoLiquido, xs[i]);
            var abajo = this.evaluaTIR(numCuotas, valorCuota, montoLiquido, xs[i]) - this.evaluaTIR(numCuotas, valorCuota, montoLiquido, xs[i]);
            var resta = xs[i] - (arriba / abajo);
            xs.push(resta);
            tirN = resta;
            if (Math.abs(xs[i + 1] - xs[i]) < Math.pow(10, -5))
                break;
        }
        return tirN;
    };
    SimulacionAutomotrizService.prototype.calculaGastosOperacionales = function (montoBruto, montoLiquido) {
        return montoBruto - montoLiquido;
    };
    SimulacionAutomotrizService.prototype.calculoIntereses = function (montoBruto, valorCuota, numCuotas) {
        var total = (valorCuota * numCuotas) - montoBruto;
        return total;
    };
    /* CAE AUTO */
    /**
    * Este método evalua el valor de x dentro de la formula del cae de sernac financiero
    * https://static.leychile.cl/Plone/Legis/Navegar/archivobinario?id=27019&formato=JPG
    *
                 * @param x
    * @return
    */
    SimulacionAutomotrizService.prototype.evaluar = function (x, plazo, valorCuota, montoLiquido, valorCuoton) {
        var sumatoria = 0;
        for (var m = 1; m <= plazo; m++) {
            if (m == plazo) {
                sumatoria += valorCuoton * Math.pow(1 + x, m * -1);
            }
            else {
                sumatoria += valorCuota * Math.pow(1 + x, m * -1);
            }
        }
        return (sumatoria - montoLiquido);
    };
    /**
    * Metodo de la Secante el cual le halla las raices de una funciones en un
    * intervalo ingresado como parametro de entrada [x1, x2] y un el error con
    * el cual deseamos hallar nuestra funcion, y nos retorna la raiz dentro del
    * intervalo
    *
    * @param x1
    * @param x2
    * @param error (tolerancia)
    * @return x3
    */
    SimulacionAutomotrizService.prototype.secante = function (plazo, valorCuota, montoLiquido, valorCuoton) {
        var x3, fx1, fx2, fx3;
        var x1 = 0;
        var x2 = 0.05;
        var error = Math.pow(10, -3);
        if (Math.abs(this.evaluar(x1, plazo, valorCuota, montoLiquido, valorCuoton)) < Math.abs(this.evaluar(x2, plazo, valorCuota, montoLiquido, valorCuoton))) {
            var aux = x1;
            x1 = x2;
            x2 = aux;
        }
        fx1 = this.evaluar(x1, plazo, valorCuota, montoLiquido, valorCuoton);
        fx2 = this.evaluar(x2, plazo, valorCuota, montoLiquido, valorCuoton);
        do {
            x3 = x2 - (fx2 * (x1 - x2)) / (fx1 - fx2);
            fx3 = this.evaluar(x3, plazo, valorCuota, montoLiquido, valorCuoton);
            x1 = x2;
            x2 = x3;
            fx1 = this.evaluar(x1, plazo, valorCuota, montoLiquido, valorCuoton);
            fx2 = this.evaluar(x2, plazo, valorCuota, montoLiquido, valorCuoton);
            fx3 = this.evaluar(x3, plazo, valorCuota, montoLiquido, valorCuoton);
        } while (Math.abs(fx3) > error);
        var total = x3 * 12;
        return total;
    };
    SimulacionAutomotrizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SimulacionAutomotrizService);
    return SimulacionAutomotrizService;
}());



/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
var constants = {
    idApp: 'SIMCREDCON',
    errorToken: 'No puedes acceder a un área restringida',
};


/***/ }),

/***/ "./src/app/validator/rut.validator.ts":
/*!********************************************!*\
  !*** ./src/app/validator/rut.validator.ts ***!
  \********************************************/
/*! exports provided: ValidateRut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRut", function() { return ValidateRut; });
function ValidateRut(control) {
    var rut = control.value.toLowerCase();
    //console.log("wea: "+rut);
    if (rut != "") {
        var final = rut.replace(/[^0-9kK]/g, '');
        var rutFinal = final.substring(0, final.length - 1);
        var digito = final.substring(final.length - 1, final.length);
        var resultado = validaRut(rutFinal);
        //console.log("resultado: "+resultado);
        //console.log("digito: "+digito);
        if (resultado != digito) {
            return { validRut: true };
        }
        return null;
    }
    else {
        return null;
    }
}
function validaRut(rutNoFormat) {
    var almacenaRut1 = [];
    var cadenaMultiplos = [2, 3, 4, 5, 6, 7, 2, 3];
    var multiplosRut = [];
    var sumaMultiplosRut = 0;
    var resto;
    var preDv;
    for (var i = 0; i < rutNoFormat.length; i++) {
        almacenaRut1[i] = rutNoFormat.substring(i, i + 1);
    }
    almacenaRut1.reverse();
    for (var i = 0; i < rutNoFormat.length; i++) {
        multiplosRut[i] = (almacenaRut1[i] * cadenaMultiplos[i]);
    }
    for (var i = 0; i < rutNoFormat.length; i++) {
        sumaMultiplosRut = sumaMultiplosRut + multiplosRut[i];
    }
    resto = sumaMultiplosRut % 11;
    preDv = 11 - resto;
    //console.log(almacenaRut1);
    //console.log(cadenaMultiplos);
    //console.log(multiplosRut);
    //console.log(sumaMultiplosRut);
    //console.log(resto);
    //console.log(preDv);
    if (preDv == 11) {
        return "0";
    }
    else {
        if (preDv == 10) {
            return "k";
        }
    }
    return preDv.toString();
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    wsvalidatoken: 'http://192.168.52.17:7080/WsTokenBotonpago/tokenservice/validatoken',
    wstokenDecoder: 'http://192.168.52.17:7080/WsTokenBotonpago/tokenservice/decodedata',
    wsGenerateToken: 'http://192.168.52.17:7080/wsGeneraToken/generaToken',
    //wsGeneraTokenPublico : 'https://desmova.bice.cl.bice.cl:443/portalServices/PP315/',
    wsGeneraTokenPublico: 'https://desmova.bice.cl/simuladorPubSesion/',
    wsvalidatokenOag: 'https://desmova.bice.cl:443/portalServices/PP3015/',
    wsingresatracking: 'https://desmova.bice.cl:443/portalServices/PP311/',
    wsenviomail: 'https://desmova.bice.cl:443/portalServices/PP312/',
    wscti: 'https://desmova.bice.cl:443/portalServices/PP313/',
    //wsobtieneTasas:'http://10.150.234.23:8010/servicio-tasas-tracking-cti/rest/api/v1/servicio-tasas-tracking-cti/obtieneTasas',
    wsobtienetasas: 'https://desmova.bice.cl:443/portalServices/PP310/',
    wsvalornotario: '&parametro=SIMCRED&tipo=NOTARIO&estado=1',
    wsvalorpreguntas: '&parametro=SIMCRED&tipo=SWITCH_PREGUNTAS&estado=1',
    wsvalorprenda: '&parametro=SIMCREDAUT&tipo=PRENDA&estado=1',
    wsvalordesgravamen: '&parametro=SIMCREDAUT&tipo=SEGDESGRAV&estado=1',
    wsvalorcesantia: '&parametro=SIMCRED&tipo=SEGCES&estado=1',
    wsvalorimpuesto: '&parametro=SIMCRED&tipo=IMPUESTO&estado=1',
    wsvalorfactor: '&parametro=SIMCREDAUT&tipo=FACTOR&estado=1',
    wsbase: 'https://desmova.bice.cl:443/portalServices/PP3024/?'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RESPALDO USUARIO\Escritorio\camilo\Proyectos Local\Nuevo-simulador-auto-angular-6\simulador-automotriz-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map