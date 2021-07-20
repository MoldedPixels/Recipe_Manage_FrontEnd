import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../../../interfaces/ingredient';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {
  @Input('onFinish') onFinish!: () => void;
  allIngredients: Ingredient[] = [];
  form: FormGroup;
  addingIngredient: boolean = false;
  ingredientMap: Map<Ingredient,number> =  new Map();

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      cuisine: [''],
      ingredients: [''],
      body: [''],
      rating: ['']
    })
  }

  ngOnInit(): void {
    this.http.get('/api/ingredient').subscribe((res) => {
          this.allIngredients = res as Ingredient[];
          },
      (error) => console.log(error)
    )
  }

  onSelect(i: Ingredient): void {
    this.ingredientMap.set(i, 1);
    this.addingIngredient = false;
  }

  addIngredient(): void {
    this.addingIngredient = true;
  }

  submitForm() {
    let ingredientSubmit = new Map<string, number>();
    this.ingredientMap.forEach((value, key) => {
      ingredientSubmit.set(key.ingredientId, value)
    });
    console.log(ingredientSubmit.entries);
    let map = JSON.stringify(
      {
        cuisine: this.form.get("cuisine")?.value,
        ingredients: ingredientSubmit,
        name: this.form.get("name")?.value,
        rating: 0.0,
        body: this.form.get("body")?.value
      },
      this.replace
      );
    console.log(map);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('/api/request', map, {headers:headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.onFinish();
  }

  replace(this: object, key:string , val: any) {
    if(val instanceof Map){
      let obj = Object.create(null);
      for (let [k,v] of val) {
          obj[k.toString()] = v;
      }
      return obj
    } else {
      return val;
    }
  }

}
