import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ProfileComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
=======
    NgbModule,
    HttpClientModule,
    FormsModule
>>>>>>> 2490586efade6a294d2b3967cc6939a919eb7fa9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
