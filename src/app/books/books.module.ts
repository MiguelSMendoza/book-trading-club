import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBooksComponent } from './my-books/my-books.component';
import { BooksService } from './books.service';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksRoutingModule } from './books-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecurePipe } from './new-book/secure.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MyBooksComponent,
    NewBookComponent,
    SecurePipe
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
