import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MyBooksComponent } from './my-books/my-books.component';
import { NewBookComponent } from './new-book/new-book.component';

const booksRoutes: Routes = [
  {
    path: '',
    component: MyBooksComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'new',
    component: NewBookComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(booksRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    AuthGuardService
  ]
})
export class BooksRoutingModule { }
