import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css'],
})
export class BookFormTemplateComponent implements OnInit {
  hasBeenSubmitted = false;
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    this.hasBeenSubmitted = true;
    setTimeout(() => {
      form.reset();
      this.hasBeenSubmitted = false;
    }, 5000);
  }
}
