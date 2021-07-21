import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from '../Ingredients';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private apiUrl = 'http://localhost:5000/ingredients';
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredients[]>{
    return this.http.get<Ingredients[]>(this.apiUrl);
  }

  removeIngredient(ingredient: Ingredients): Observable<Ingredients>{
    const url = `${this.apiUrl}/${ingredient.id}`;
    return this.http.delete<Ingredients>(url);
  }

  updateIngredient(ingredient: Ingredients): Observable<Ingredients>{
    const url = `${this.apiUrl}/${ingredient.id}`;
    return this.http.put<Ingredients>(url, ingredient, httpOptions);
  }

  addIngredient(ingredient: Ingredients):Observable<Ingredients>{
    return this.http.post<Ingredients>(this.apiUrl, ingredient, httpOptions);
  }
}
