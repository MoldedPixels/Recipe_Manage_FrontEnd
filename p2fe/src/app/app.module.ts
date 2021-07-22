//MODULE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
>>>>>>> 2490586efade6a294d2b3967cc6939a919eb7fa9

//COMPONENTS
import { AppComponent } from './app.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ProfileComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    HttpClientModule,
    FormsModule
>>>>>>> 2490586efade6a294d2b3967cc6939a919eb7fa9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
