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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-header (searchtextchange)=\"searchTextChange($event)\"></app-header>\n  <app-contact-list [datalist]=\"filterdList\" [totalcount]=\"contactList.length\" (onselect)=\"selectUser($event)\"></app-contact-list>\n  <app-contact-details [selectedContact]=\"selectedUser\"></app-contact-details>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
        this.title = 'my-contacts';
        this.contactList = [];
        this.filterdList = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContactList().subscribe(function (data) {
            _this.contactList = data.People;
            _this.filterdList = data.People;
            // this.contactStyles.height=((100/this.contactList.length)-2)+'%';
        });
    };
    AppComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    AppComponent.prototype.searchTextChange = function (searchtext) {
        this.filterdList = this.contactList.filter(function (contact) {
            if (contact.name.indexOf(searchtext) > -1) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-details/contact-details.component */ "./src/app/contact-details/contact-details.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"],
                _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-details/contact-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\nthead{\r\n    background-color: lightgray\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 16px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2\r\n}\r\n\r\n.button {\r\n    background-color: lightgray;\r\n    border: 1px solid gray;\r\n    color: black;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    width: 200px;\r\n    height: 80px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 40%;\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.fa.fa-heart{\r\n    font-size: 40px;\r\n    color: lightgray;\r\n}\r\n\r\n.fa.fa-heart.checked {\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/contact-details/contact-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left:25%;padding:20px 200px 20px 50px;height:auto;margin-top: 58px;overflow-x: hidden;overflow-y: auto;\">\n    <div *ngIf=\"selectedContact\" style=\"padding:20px;\">\n\n\n        <div>\n            <div style=\"width: 20%;display: inline-block;height: 130px;float: left;\">\n                <img [src]=\"selectedContact.img\" height=\"100%\" />\n            </div>\n            <div style=\"padding-left: 10px;width: 70%;display: inline-block;height: 130px;\">\n                <div>\n                    <input type=\"button\" class=\"button\" value=\"Send Message!\" />\n                </div>\n                <div style=\"margin-top:5px;\">\n                    <span *ngFor=\"let item of ratings;let i=index\" \n                    [className]=\"i<=(selectedContact.rating-1) ? 'fa fa-heart checked' : 'fa fa-heart'\"></span>\n                    <!-- <span class=\"fa fa-heart checked\"></span>\n                    <span class=\"fa fa-heart checked\"></span>\n                    <span class=\"fa fa-heart\"></span>\n                    <span class=\"fa fa-heart\"></span> -->\n                </div>\n            </div>\n        </div>\n        <p>{{selectedContact.Description}}</p>\n\n\n        <table>\n            <thead>\n                <tr>\n                    <th>Likes</th>\n                    <th>Dislikes</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of selectedContact.Likes; let i = index\">\n                    <td>{{item}}</td>\n                    <td>{{selectedContact.Dislikes[i]}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-details/contact-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent() {
        this.ratings = [1, 2, 3, 4, 5];
    }
    ContactDetailsComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var change = changes[propName];
            var curVal = change.currentValue;
            if (propName === 'selectedContact') {
                this.selectedContact = curVal;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactDetailsComponent.prototype, "selectedContact", void 0);
    ContactDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contact-details/contact-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 25%;\r\n    background-color: #f1f1f1;\r\n    position: fixed;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\nli{\r\n    text-align: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: #000;\r\n    padding: 0px;\r\n    text-decoration: none;\r\n    /* padding: 30px; */\r\n    border: 1px solid black;\r\n    border-top: none;\r\n    height: 100%;\r\n}\r\n\r\nli:first-child a {\r\n    border-top: 1px solid black;\r\n }\r\n\r\nli a span{\r\n    position: relative;\r\n    top: 40%;\r\n}\r\n\r\nli a.active {\r\n    background-color: #ccc;\r\n    /* color: white; */\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #555;\r\n    color: white;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul >\n  <li [ngStyle]=\"contactStyles\" (click)=\"selectUser(contact)\" *ngFor=\"let contact of datalist\">\n    <a [className]=\"contact==selectedUser? 'active' : ''\">\n      <span>{{contact.name}}</span>\n      <span [className]=\"contact==selectedUser? 'fa fa-caret-right' : 'fa '\"  \n      style=\"float: right;padding-right: 10px;\"></span>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
        this.totalcount = 0;
        this.onselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contactStyles = {
            'height': '10px'
        };
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var change = changes[propName];
            var curVal = change.currentValue;
            if (propName === 'datalist' && curVal) {
                this.datalist = curVal;
                this.contactStyles.height = ((100 / this.totalcount) - 2) + '%';
            }
        }
    };
    ContactListComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
        this.onselect.emit(user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContactListComponent.prototype, "datalist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ContactListComponent.prototype, "totalcount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "onselect", void 0);
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contact-list/contact-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getContactList = function () {
        return this.http.get('./assets/people.json');
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n.topnav {\r\n  border: 1px solid black;\r\n    overflow: visible;\r\n    background-color: #e9e9e9;\r\n  }\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n.topnav a.active {\r\n    background-color: #2196F3;\r\n    color: white;\r\n  }\r\n.topnav .search-container {\r\n    padding: 10px 10px;\r\n    display: inline-block;\r\n    width: 20%;\r\n    /* float: left; */\r\n  }\r\n.topnav .user-container{\r\n    float: right;\r\n  }\r\n.topnav input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n  }\r\n.topnav .search-container button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n.topnav .search-container button:hover {\r\n    background: #ccc;\r\n  }\r\n@media screen and (max-width: 600px) {\r\n    .topnav .search-container {\r\n      float: none;\r\n    }\r\n    .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    .topnav input[type=text] {\r\n      border: 1px solid #ccc;  \r\n    }\r\n  }\r\n.dropbtn {\r\n    background-color: transparent;\r\n    color: white;\r\n    padding: 0px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin: 6px 20px 1px 5px;\r\n    height: 45px;\r\n}\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    right: 0;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n.dropdown-content span {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n.dropdown-content span:hover {background-color: #f1f1f1;}\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header sticky topnav\">\n    <div class=\"search-container\">\n        <input type=\"text\" placeholder=\"Search..\" name=\"search\" (input)=\"onSearchChange($event.target.value)\">\n    </div>\n    <div class=\"user-container\">\n        <div style=\"display: inline-block;margin-top: 18px;margin-right: 10px;\">\n            <label>User Name</label>\n        </div>\n\n        <div class=\"dropdown\" style=\"float:right;\">\n            <button class=\"dropbtn\">\n                <img src=\"./assets/user-dd.png\" style=\"height: 100%;\" />\n            </button>\n            <div class=\"dropdown-content\">\n                <span href=\"#\">Rate this app</span>\n                <span href=\"#\">Log out</span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.searchtextchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSearchChange = function (value) {
        this.searchtextchange.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "searchtextchange", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bganguly\Documents\Application\my-contacts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map