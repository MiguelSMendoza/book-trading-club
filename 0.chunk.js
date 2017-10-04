webpackJsonp([0],{

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (auth) { return !auth ? _this.router.navigate(['/']) : true; });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/books/books-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_books_my_books_component__ = __webpack_require__("../../../../../src/app/books/my-books/my-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_book_new_book_component__ = __webpack_require__("../../../../../src/app/books/new-book/new-book.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var booksRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__my_books_my_books_component__["a" /* MyBooksComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_5__new_book_new_book_component__["a" /* NewBookComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]]
    },
];
var BooksRoutingModule = (function () {
    function BooksRoutingModule() {
    }
    return BooksRoutingModule;
}());
BooksRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(booksRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard_service__["a" /* AuthGuardService */]
        ]
    })
], BooksRoutingModule);

//# sourceMappingURL=books-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_books_my_books_component__ = __webpack_require__("../../../../../src/app/books/my-books/my-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_book_new_book_component__ = __webpack_require__("../../../../../src/app/books/new-book/new-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_routing_module__ = __webpack_require__("../../../../../src/app/books/books-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_book_secure_pipe__ = __webpack_require__("../../../../../src/app/books/new-book/secure.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__books_routing_module__["a" /* BooksRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_books_my_books_component__["a" /* MyBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_4__new_book_new_book_component__["a" /* NewBookComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_book_secure_pipe__["a" /* SecurePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__books_service__["a" /* BooksService */]
        ]
    })
], BooksModule);

//# sourceMappingURL=books.module.js.map

/***/ }),

/***/ "../../../../../src/app/books/my-books/my-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/my-books/my-books.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Books</h1>\n<p class=\"lead text-muted\">Select a book to edit or <a routerLink=\"/my-books/new\">add a new book</a>!</p>\n<hr/>\n<div class=\"list-group\">\n    <div class=\"list-group-item\" *ngFor=\"let book of myBooks;\" [@listItem] (@listItem.done)=\"doNext()\">\n      <div class=\"row\">\n        <div class=\"col-2 text-center\">\n          <img *ngIf=\"book.thumbnail\" src=\"{{book.thumbnail}}\" width=\"50px\" class=\"img-responsive center-block\"/> \n        </div>\n        <div class=\"col-7\">\n          <h4>{{ book.title }}</h4>\n          <span class=\"text-muted text-small\">{{ book.author }}</span>\n        </div>\n        <div class=\"col-3 text-center\">\n            <div ngbDropdown *ngIf=\"book.trader\" class=\"d-inline-block m-2\">\n                <button class=\"btn btn-outline-success\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                  <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <span class=\"dropdown-header\">{{ book.traderName }}</span>\n                    <div class=\"dropdown-divider\"></div>\n                  <button class=\"dropdown-item\" (click)=\"onAcceptTrade(book)\">Accept Trade</button>\n                  <button class=\"dropdown-item\" (click)=\"onRefuseTrade(book)\">Refuse Trade</button>\n                </div>\n            </div>\n              <button class=\"pull-right m-2 btn btn-link\" (click)=\"onRemoveBook(book)\"><i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\"></i></button>\n        </div>\n        \n      </div>\n      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/my-books/my-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyBooksComponent = (function () {
    function MyBooksComponent(bookService, toastr) {
        this.bookService = bookService;
        this.toastr = toastr;
        this.next = 0;
        this.myBooks = [];
        this.totalBooks = [];
    }
    MyBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.bookService.getUserBooks().subscribe(function (books) {
            if (_this.totalBooks.length !== books.length) {
                _this.totalBooks = books.reverse();
                _this.myBooks = [];
                _this.next = 0;
                _this.doNext();
            }
        });
    };
    MyBooksComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MyBooksComponent.prototype.doNext = function () {
        if (this.next < this.totalBooks.length) {
            this.myBooks.push(this.totalBooks[this.next++]);
        }
    };
    MyBooksComponent.prototype.onRemoveBook = function (book) {
        var _this = this;
        if (confirm('Are you sure you want to remove this Book from your Bookshelf? ')) {
            this.bookService.removeBook(book)
                .catch(function (error) {
                _this.toastr.warning(error.message, error.name);
            })
                .then(function () {
                _this.toastr.warning('Your Book has been removed', 'Book Removed');
            });
        }
    };
    MyBooksComponent.prototype.onAcceptTrade = function (book) {
        var _this = this;
        this.bookService.acceptTradeBook(book)
            .catch(function (error) {
            _this.toastr.error(error.message, error.name);
        })
            .then(function () {
            _this.toastr.success('Now your book doesn\'t belong to you.', 'Trade Accepted');
        });
    };
    MyBooksComponent.prototype.onRefuseTrade = function (book) {
        var _this = this;
        this.bookService.unTradeBook(book)
            .catch(function (error) {
            _this.toastr.error(error.message, error.name);
        })
            .then(function () {
            _this.toastr.warning('Trade Cancelled Succesffully', 'Trade Cancel');
        });
    };
    return MyBooksComponent;
}());
MyBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-books',
        template: __webpack_require__("../../../../../src/app/books/my-books/my-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/my-books/my-books.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('listItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ transform: 'translateY(-10px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* animate */])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object])
], MyBooksComponent);

var _a, _b;
//# sourceMappingURL=my-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/new-book/new-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  cursor:pointer;\n}\nbutton:disabled {\n  cursor: not-allowed;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/new-book/new-book.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\n  <img *ngIf=\"r.volumeInfo.imageLinks\" src=\"{{r.volumeInfo.imageLinks.smallThumbnail | secure}}\" width=\"50px\"/> {{ r.volumeInfo.title }} <span *ngIf=\"r.volumeInfo.authors\">- {{r.volumeInfo.authors[0]}}</span>\n</ng-template>\n<h1>New Book</h1>\n<p class=\"lead text-muted\">Search for a book or create your own volume information.</p>\n<hr/>\n<div class=\"form-group m-2 rounded bg-info p-2 m-1\">\n  <label for=\"typeahead-http\">Search for a Book:</label>\n  <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Book Search\" (selectItem)=\"selectedItem($event)\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\"\n  />\n  <span *ngIf=\"searching\">Searching...</span>\n  <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n</div>\n<form [formGroup]=\"bookForm\" (ngSubmit)=\"onSubmit()\" class=\"bg-light p-2 rounded m-1\">\n  <div class=\"row\">\n  <div class=\"col\">\n  <div class=\"form-group\">\n      <label for=\"title\">Title:</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\">Author:</label>\n    <input type=\"text\" class=\"form-control\" id=\"author\" formControlName=\"author\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"isbn\">ISBN:</label>\n    <input type=\"text\" class=\"form-control\" id=\"isbn\" formControlName=\"isbn\" />\n</div>\n  </div>\n  <div class=\"col\">\n    <input type=\"hidden\" formControlName=\"thumbnail\" #thumbnail value=\"\"/>\n    <p><label for=\"thumbnail\">Thumbnail:</label></p>\n    <img src=\"{{thumbnail.value}}\" />\n  </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description:</label>\n    <textarea rows=\"5\" class=\"form-control\" id=\"description\" formControlName=\"description\" ></textarea>\n  </div>\n  <button type=\"submit\" [disabled]=\"!isValid()\" class=\"btn btn-default\">Guardar</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/books/new-book/new-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var NewBookComponent = (function () {
    function NewBookComponent(books, route, router, toastr) {
        var _this = this;
        this.books = books;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__["Observable"](function () { return function () { return _this.searching = false; }; });
        this.formatter = function (x) { return ''; };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this.books.searchBooks(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
    }
    NewBookComponent.prototype.selectedItem = function (event) {
        event.preventDefault();
        this.bookForm.get('title').setValue(event.item.volumeInfo.title);
        this.bookForm.get('description').setValue(event.item.volumeInfo.description);
        if (event.item.volumeInfo.imageLinks) {
            this.bookForm.get('thumbnail').setValue(event.item.volumeInfo.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://'));
        }
        if (event.item.volumeInfo.authors) {
            this.bookForm.get('author').setValue(event.item.volumeInfo.authors.join(', '));
        }
        var isbn = event.item.volumeInfo.industryIdentifiers.find(function (element) {
            return element.type === 'ISBN_13';
        });
        if (isbn) {
            this.bookForm.get('isbn').setValue(isbn.identifier);
        }
        if (!event.item.volumeInfo.description) {
            this.bookForm.get('description').setValue('No Description.');
        }
    };
    NewBookComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.books.addBook(this.bookForm.value).then(function (response) {
            _this.toastr.success('Book Saved!', 'Success!');
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }).catch(function (error) {
            _this.toastr.error(error.message, error.name);
        });
    };
    NewBookComponent.prototype.isValid = function () {
        return (this.bookForm.valid);
    };
    NewBookComponent.prototype.isValidISBN = function (control) {
        var isbn = control.value.replace(/[^\dX]/gi, '');
        if (isbn.length !== 10) {
            return null;
        }
        var chars = isbn.split('');
        if (chars[9].toUpperCase() === 'X') {
            chars[9] = 10;
        }
        var sum = 0;
        for (var i = 0; i < chars.length; i++) {
            sum += ((10 - i) * parseInt(chars[i], 10));
        }
        if ((sum % 11) === 0) {
            return { 'isValidISBN': true };
        }
    };
    NewBookComponent.prototype.initForm = function () {
        this.bookForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'author': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'isbn': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            'thumbnail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('')
        });
    };
    return NewBookComponent;
}());
NewBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-book',
        template: __webpack_require__("../../../../../src/app/books/new-book/new-book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/new-book/new-book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object])
], NewBookComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/new-book/secure.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecurePipe = (function () {
    function SecurePipe() {
    }
    SecurePipe.prototype.transform = function (value, limit) {
        return value.replace(/^http:\/\//i, 'https://');
    };
    return SecurePipe;
}());
SecurePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'secure'
    })
], SecurePipe);

//# sourceMappingURL=secure.pipe.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/catch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var catch_1 = __webpack_require__("../../../../rxjs/operator/catch.js");
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinctUntilChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilChanged.js");
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var do_1 = __webpack_require__("../../../../rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var map_1 = __webpack_require__("../../../../rxjs/operator/map.js");
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/merge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var merge_1 = __webpack_require__("../../../../rxjs/operator/merge.js");
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMap_1 = __webpack_require__("../../../../rxjs/operator/switchMap.js");
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var take_1 = __webpack_require__("../../../../rxjs/operator/take.js");
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinctUntilChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "../../../../rxjs/operator/take.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "../../../../rxjs/util/ArgumentOutOfRangeError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map