import { Component, OnInit } from '@angular/core';

import { morerecipe } from 'src/app/morerecipes';
@Component({
  selector: 'app-more-recipes',
  templateUrl: './more-recipes.component.html',
  styleUrls: ['./more-recipes.component.scss'],
})
export class MoreRecipesComponent implements OnInit {
  morerecipes = morerecipe;
  constructor() {}

  ngOnInit(): void {}
}
