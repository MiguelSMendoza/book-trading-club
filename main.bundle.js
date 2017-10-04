webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/books/books.module": [
		"../../../../../src/app/books/books.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'my-books',
        loadChildren: 'app/books/books.module#BooksModule'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* PreloadAllModules */]
            })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/* Everything but the jumbotron gets side spacing for mobile first views */\n\n.header,\n.marketing,\n.footer {\n  padding-right: 1rem;\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n\n\n/* Custom page header */\n\n.header {\n  padding-bottom: 1rem;\n  border-bottom: .05rem solid #e5e5e5;\n}\n\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 3rem;\n}\n\n\n/* Custom page footer */\n\n.footer {\n  margin-top: 1rem;\n  padding-top: 1.5rem;\n  color: #777;\n  border-top: .05rem solid #e5e5e5;\n}\n\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 48em) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n      padding-right: 0;\n      padding-left: 0;\n  }\n  /* Space out the masthead */\n  .header {\n      margin-bottom: 2rem;\n  }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n      border-bottom: 0;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n    <footer class=\"footer row\">\n        <div class=\"col-md-8\">\n            <p>&copy; <a href=\"https://www.freecodecamp.org/miguelsmendoza\" target=\"_blank\">Miguel S. Mendoza</a> in 2017 following instructions in <a href=\"https://www.freecodecamp.org/challenges/manage-a-book-trading-club\" target=\"_blank\">freeCodeCamp <i class=\"fa fa-free-code-camp\"></i></a>.\n            </p>\n        </div>\n        <div class=\"col-md-4 text-right\">\n            <p><a href=\"https://github.com/MiguelSMendoza/book-trading-club\" target=\"_blank\">Source <i class=\"fa fa-github\"></i></a>.</p>\n        </div>\n    </footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksService = (function () {
    function BooksService(db, authService, http) {
        var _this = this;
        this.db = db;
        this.authService = authService;
        this.http = http;
        this.books = db.list('/books', {
            query: {
                orderByChild: 'timestamp',
            }
        });
        this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = (user) ? true : false;
            if (_this.isAuthenticated) {
                _this.user = user;
            }
            else {
                _this.user = null;
            }
        });
    }
    // https://www.googleapis.com/books/v1/volumes?q=' + this.model.searchQuery
    // + '&maxResults=' + this.model.searchLimit + '&orderBy=' + this.model.sortOrder
    BooksService.prototype.searchBooks = function (query) {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
            .first()
            .map(function (res) {
            var data = res.json();
            return data.items;
        });
    };
    BooksService.prototype.getUserBooks = function () {
        return this.db.list('/books', {
            query: {
                orderByChild: 'owner',
                equalTo: this.user.uid
            }
        });
    };
    BooksService.prototype.addBook = function (book) {
        book.owner = this.user.uid;
        book.ownerName = this.user.displayName;
        book.timestamp = +new Date();
        return this.books.push(book);
    };
    BooksService.prototype.updateBook = function (book) {
        return this.db.object('/books/' + book.$key).update(book);
    };
    BooksService.prototype.removeBook = function (book) {
        if (this.isAuthenticated && this.user.uid === book.owner) {
            return this.db.object('/books/' + book.$key).remove();
        }
        else {
            return new firebase.Promise(function (resolve, reject) {
                reject(new Error('Not Authorized.'));
            });
        }
    };
    BooksService.prototype.tradeBook = function (book) {
        if (this.isAuthenticated && this.user.uid !== book.owner && !book.trader) {
            book.trader = this.user.uid;
            book.traderName = this.user.displayName;
            return this.db.object('/books/' + book.$key).update(book);
        }
        else {
            return new firebase.Promise(function (resolve, reject) {
                reject(new Error('Not Authorized.'));
            });
        }
    };
    BooksService.prototype.unTradeBook = function (book) {
        if (this.isAuthenticated && this.user.uid === book.trader || this.user.uid === book.owner) {
            book.trader = null;
            book.traderName = null;
            return this.db.object('/books/' + book.$key).update(book);
        }
        else {
            return new firebase.Promise(function (resolve, reject) {
                reject(new Error('Not Authorized.'));
            });
        }
    };
    BooksService.prototype.acceptTradeBook = function (book) {
        if (this.isAuthenticated && this.user.uid === book.owner) {
            book.owner = book.trader;
            book.ownerName = book.traderName;
            book.traderName = null;
            book.trader = null;
            return this.db.object('/books/' + book.$key).update(book);
        }
        else {
            return new firebase.Promise(function (resolve, reject) {
                reject(new Error('Not Authorized.'));
            });
        }
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], BooksService);

var _a, _b, _c;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__ = __webpack_require__("../../../../../src/app/app-routing-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_routing_module_module__["a" /* AppRoutingModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__books_books_service__["a" /* BooksService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, a {\n    cursor: pointer;\n}\n\n@media (min-width: 48em) {\n    .nav-content {\n        margin: 0 auto;\n        max-width: 46rem;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <a class=\"navbar-brand\" href=\"#\">freeCodeCamp <i class=\"fa fa-free-code-camp\"></i></a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" [ngbCollapse]=\"!isNavbarCollapsed\">\n        <ng-template [ngIf]=\"!isAuthenticated\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/\">Home</a>\n                </li>\n            </ul>\n        </ng-template>\n        <ng-template [ngIf]=\"isAuthenticated\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/\">Home</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/my-books\">My Books</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/my-books/new\">New Book</a>\n                </li>\n            </ul>\n        </ng-template>\n        <div class=\"mt-2 mt-md-0\">\n            <button *ngIf=\"!isAuthenticated\" (click)=\"onLogin()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\"><i class=\"fa fa-twitter\"></i> Sign in</button>\n            <ng-template [ngIf]=\"isAuthenticated\">\n                <div ngbDropdown class=\"d-inline-block my-2 my-sm-0\">\n                    <button class=\"btn btn-outline-success\" id=\"dropdownBasic1\" ngbDropdownToggle>{{username}}</button>\n                    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n                        <button (click)=\"onLogout()\" class=\"dropdown-item\" type=\"button\">Logout</button>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = (user) ? true : false;
            if (_this.isAuthenticated) {
                _this.username = user.displayName;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogin = function () {
        this.authService.login();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-heart {\n  color: red;\n}\nbutton {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Book Trading Club</h1>\n<hr/>\n<div class=\"list-group\">\n    <div class=\"list-group-item\" *ngFor=\"let book of books;\" [@listItem] (@listItem.done)=\"doNext()\">\n      <div class=\"row\">\n        <div class=\"col-2 text-center\">\n          <img *ngIf=\"book.thumbnail\" src=\"{{book.thumbnail}}\" width=\"50px\" class=\"img-responsive center-block\"/> \n        </div>\n        <div class=\"col-7\">\n          <h4>{{ book.title }}</h4>\n          <span class=\"text-muted text-small\">{{ book.author }}</span>\n        </div>\n        <div class=\"col-3 align-middle text-center\">\n            <button title=\"Propose a Trade\" *ngIf=\"!book.trader && book.owner !== uid\" class=\"btn btn-warning align-middle\" (click)=\"onTrade(book)\">\n                <i class=\"fa fa-exchange\"></i>\n            </button>\n            <div ngbDropdown *ngIf=\"book.trader && book.owner == uid\" class=\"d-inline-block\">\n                <button class=\"btn btn-outline-success\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <span class=\"dropdown-header\">{{ book.traderName }}</span>\n                    <div class=\"dropdown-divider\"></div>\n                    <button class=\"dropdown-item\" (click)=\"onAcceptTrade(book)\">Accept Trade</button>\n                    <button class=\"dropdown-item\" (click)=\"onCancelTrade(book)\">Refuse Trade</button>\n                </div>\n            </div>\n            <span class=\"pull-right m-2\" *ngIf=\"book.owner === uid\"><i class=\"fa fa-heart fa-2x\"></i></span>\n            <span title=\"Pending Trade\" *ngIf=\"book.trader && book.trader !== uid && book.owner !== uid\"><i class=\"fa fa-exchange\" aria-hidden=\"true\"></i></span>\n            <button title=\"Cancel Trade\" *ngIf=\"book.trader && book.trader === uid\" class=\"btn btn-danger align-middle\" (click)=\"onCancelTrade(book)\">\n                <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n            </button>\n        </div>\n      </div>\n      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(booksService, authService, toastr) {
        var _this = this;
        this.booksService = booksService;
        this.authService = authService;
        this.toastr = toastr;
        this.next = 0;
        this.uid = '';
        this.books = [];
        this.totalBooks = [];
        this.authService.user.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
            else {
                _this.uid = '';
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.booksService.books.subscribe(function (books) {
            if (_this.totalBooks.length !== books.length) {
                _this.totalBooks = books.reverse();
                _this.books = [];
                _this.next = 0;
                _this.doNext();
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeComponent.prototype.doNext = function () {
        if (this.next < this.totalBooks.length) {
            this.books.push(this.totalBooks[this.next++]);
        }
    };
    HomeComponent.prototype.onTrade = function (book) {
        var _this = this;
        if (this.uid === '') {
            this.authService.login();
            return false;
        }
        this.booksService.tradeBook(book)
            .catch(function (error) {
            _this.toastr.error(error.message, error.name);
        })
            .then(function () {
            _this.toastr.success('Now you have to wait until the owner accepts the trade.', 'Trade Saved');
        });
    };
    HomeComponent.prototype.onAcceptTrade = function (book) {
        var _this = this;
        this.booksService.acceptTradeBook(book)
            .catch(function (error) {
            _this.toastr.error(error.message, error.name);
        })
            .then(function () {
            _this.toastr.success('Now your book doesn\'t belong to you.', 'Trade Accepted');
        });
    };
    HomeComponent.prototype.onCancelTrade = function (book) {
        var _this = this;
        this.booksService.unTradeBook(book)
            .catch(function (error) {
            _this.toastr.error(error.message, error.name);
        })
            .then(function () {
            _this.toastr.warning('Trade Cancelled Succesffully', 'Trade Cancel');
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('listItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(-10px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC3ADNgzymRoeMVhl326atcy5mQaFo6MyI',
        authDomain: 'fcc-smendoza.firebaseapp.com',
        databaseURL: 'https://fcc-smendoza.firebaseio.com',
        projectId: 'fcc-smendoza',
        storageBucket: 'fcc-smendoza.appspot.com',
        messagingSenderId: '82796816871'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map