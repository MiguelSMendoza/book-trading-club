import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm: FormGroup;

  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  formatter = (x: {symbol: string}) => x.symbol;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.books.searchBooks(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          })
        )
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed)

  selectedItem(event) {
    this.bookForm.get('title').setValue(event.item.volumeInfo.title);
    this.bookForm.get('description').setValue(event.item.volumeInfo.description);
    if (event.item.volumeInfo.imageLinks) {
      this.bookForm.get('thumbnail').setValue(event.item.volumeInfo.imageLinks.thumbnail);
    }
    if (event.item.volumeInfo.authors) {
      this.bookForm.get('author').setValue(event.item.volumeInfo.authors.join(', '));
    }
    const isbn = event.item.volumeInfo.industryIdentifiers.find(
      (element) => {
        return element.type === 'ISBN_13';
      }
    );
    if (isbn) {
      this.bookForm.get('isbn').setValue(isbn.identifier);
    }
  }

  constructor(
    private books: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.books.addBook(this.bookForm.value).then(
      (response: Response) => {
        this.toastr.success('Book Saved!', 'Success!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    ).catch(
      (error: Error) => {
        this.toastr.error(error.message, error.name);
      }
    );
  }

  isValid() {
    return (this.bookForm.valid);
  }

  isValidISBN (control: FormControl): {[s: string]: boolean} {
    const isbn = control.value.replace(/[^\dX]/gi, '');
    if (isbn.length !== 10) {
      return null;
    }
    const chars = isbn.split('');
    if (chars[9].toUpperCase() === 'X') {
      chars[9] = 10;
    }
    let sum = 0;
    for (let i = 0; i < chars.length; i++) {
      sum += ((10 - i) * parseInt(chars[i], 10));
    }
    if ((sum % 11) === 0) {
      return {'isValidISBN': true};
    }
  }

  private initForm() {
    this.bookForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required),
      'isbn': new FormControl(''),
      'thumbnail': new FormControl(''),
      'description': new FormControl('')
    });
  }

}
