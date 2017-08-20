import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../model/book.model';
import { Subscription } from 'rxjs/Subscription';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
  animations: [
    trigger(
      'listItem', [
        transition(':enter', [
          style({ transform: 'translateY(-10px)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class MyBooksComponent implements OnInit, OnDestroy {
  myBooks: Book[];
  subscription: Subscription;
  totalBooks: Book[];
  next = 0;

  constructor(private bookService: BooksService, public toastr: ToastsManager) {
    this.myBooks = [];
    this.totalBooks = [];
  }

  ngOnInit() {
    this.subscription = this.bookService.getUserBooks().subscribe(
      books => {
        if (this.totalBooks.length !== books.length) {
          this.totalBooks = books.reverse();
          this.myBooks = [];
          this.next = 0;
          this.doNext();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doNext() {
    if (this.next < this.totalBooks.length) {
      this.myBooks.push(this.totalBooks[this.next++]);
    }
  }

  onRemoveBook(book: Book) {
    if (confirm('Are you sure you want to remove this Book from your Bookshelf? ')) {
      this.bookService.removeBook(book)
      .catch(
        (error) => {
          this.toastr.warning(error.message, error.name);
        }
      )
      .then(
        () => {
          this.toastr.warning('Your Book has been removed', 'Book Removed');
        }
      );
    }
  }

  onAcceptTrade(book) {
    this.bookService.acceptTradeBook(book)
    .catch(
      (error) => {
        this.toastr.error(error.message, error.name);
      }
    )
    .then(
      () => {
        this.toastr.success('Now your book doesn\'t belong to you.', 'Trade Accepted');
      }
    );
  }

  onRefuseTrade(book) {
    this.bookService.unTradeBook(book)
    .catch(
      (error) => {
        this.toastr.error(error.message, error.name);
      }
    )
    .then(
      () => {
        this.toastr.warning('Trade Cancelled Succesffully', 'Trade Cancel');
      }
    );
  }

}
