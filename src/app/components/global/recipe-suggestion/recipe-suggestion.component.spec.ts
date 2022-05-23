import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSuggestionComponent } from './recipe-suggestion.component';

describe('RecipeSuggestionComponent', () => {
  let component: RecipeSuggestionComponent;
  let fixture: ComponentFixture<RecipeSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
