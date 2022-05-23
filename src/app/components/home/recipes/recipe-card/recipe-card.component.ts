import { Component, OnInit } from '@angular/core';
import { recipes } from 'src/app/recipes';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  recipes = recipes;
  constructor() {}

  ngOnInit(): void {}
}
