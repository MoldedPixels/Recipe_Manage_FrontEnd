import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes =[
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'review', component: ReviewsComponent},
  { path: 'ingredients', component: IngredientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
