import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Book } from './model/book.model';
import { Http } from '@angular/http';

@Injectable()
export class BooksService {
  isAuthenticated: boolean;
  books: AngularFireList<Book>;
  user: User;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private http: Http
  ) {
    this.books = db.list<Book>('/books', ref => ref.orderByChild('timestamp'));
    this.authService.user.subscribe(
      (user: User) => {
        this.isAuthenticated = (user) ? true : false;
        if (this.isAuthenticated) {
          this.user = user;
        } else {
          this.user = null;
        }
      }
    );
  }
// https://www.googleapis.com/books/v1/volumes?q=' + this.model.searchQuery
// + '&maxResults=' + this.model.searchLimit + '&orderBy=' + this.model.sortOrder
  searchBooks(query: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
    .first()
    .map(
      (res) => {
        const data = res.json();
        return data.items;
      }
    );
  }

  getUserBooks() {
    return this.db.list<Book>('/books', ref => ref.orderByChild('owner').equalTo(this.user.uid));
  }

  addBook(book: Book) {
    book.owner = this.user.uid;
    book.ownerName = this.user.displayName;
    book.timestamp = + new Date();
    return this.db.list('/books').push(book);
  }

  updateBook(book: Book) {
    return this.db.object('/books/' + book.$key).update(book);
  }

  removeBook(book) {
    if (this.isAuthenticated && this.user.uid === book.owner) {
      return this.db.object('/books/' + book.$key).remove();
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not Authorized.'));
      });
    }
  }

  tradeBook(book) {
    if (this.isAuthenticated && this.user.uid !== book.owner && !book.trader) {
      book.trader = this.user.uid;
      book.traderName = this.user.displayName;
      return this.db.object('/books/' + book.$key).update(book);
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not Authorized.'));
      });
    }
  }

  unTradeBook(book) {
    if (this.isAuthenticated && this.user.uid === book.trader || this.user.uid === book.owner) {
      book.trader = null;
      book.traderName = null;
      return this.db.object('/books/' + book.$key).update(book);
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not Authorized.'));
      });
    }
  }

  acceptTradeBook(book) {
    if (this.isAuthenticated && this.user.uid === book.owner) {
      book.owner = book.trader;
      book.ownerName = book.traderName;
      book.traderName = null;
      book.trader = null;
      return this.db.object('/books/' + book.$key).update(book);
    } else {
      return new Promise((resolve, reject) => {
        reject(new Error('Not Authorized.'));
      });
    }
  }

}
