//MODULE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

//COMPONENTS
import { AppComponent } from './app.component';
import { IngredientsComponent } from './component/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
