import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from '../interfaces/ingredients';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private apiUrl = 'http://localhost:8080/ingredient';
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredients[]>{
    return this.http.get<Ingredients[]>(this.apiUrl);
  }

  removeIngredient(ingredient: Ingredients): Observable<void>{
    const url = `${this.apiUrl}/${ingredient.ingredientId}`;
    return this.http.delete<void>(url);
  }

  updateIngredient(ingredient: Ingredients): Observable<Ingredients>{
    const url = `${this.apiUrl}/${ingredient.ingredientId}`;
    return this.http.put<Ingredients>(url, ingredient, httpOptions);
  }

  addIngredient(ingredient: Ingredients):Observable<Ingredients>{
    return this.http.post<Ingredients>(this.apiUrl, ingredient, httpOptions);
  }
}
