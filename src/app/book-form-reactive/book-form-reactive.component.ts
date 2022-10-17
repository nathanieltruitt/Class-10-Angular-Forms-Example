import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {
  hasBeenSubmitted = false;
  bookForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required),
      isBestSeller: new FormControl(null),
    });
  }

  onFormSubmit() {
    this.hasBeenSubmitted = true;

    setTimeout(() => {
      this.hasBeenSubmitted = false;
      this.bookForm.reset();
    }, 5000);
  }
}
