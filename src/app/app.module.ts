import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { SubscribeComponent } from './components/global/subscribe/subscribe.component';
import { RecipeSuggestionComponent } from './components/global/recipe-suggestion/recipe-suggestion.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { RecipesComponent } from './components/home/recipes/recipes.component';
import { ChefComponent } from './components/home/chef/chef.component';
import { SocialComponent } from './components/home/social/social.component';
import { MoreRecipesComponent } from './components/home/more-recipes/more-recipes.component';
import { HeartComponent } from './components/global/heart/heart.component';
import { SectionHeaderComponent } from './components/global/section-header/section-header.component';

import { ButtonComponent } from './components/global/button/button.component';
import { RecipeCardComponent } from './components/home/recipes/recipe-card/recipe-card.component';
import { SlideComponent } from './components/home/hero/slide/slide.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeComponent,
    RecipeSuggestionComponent,
    HeroComponent,
    CategoriesComponent,
    RecipesComponent,
    ChefComponent,
    SocialComponent,
    MoreRecipesComponent,
    HeartComponent,
    SectionHeaderComponent,
    ButtonComponent,
    RecipeCardComponent,
    SlideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
