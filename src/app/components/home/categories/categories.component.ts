import { Component, OnInit } from '@angular/core';

import { categories } from 'src/app/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories = categories;
  constructor() {}
  openCategory() {
    console.log('clicked');
  }
  ngOnInit(): void {}
}
