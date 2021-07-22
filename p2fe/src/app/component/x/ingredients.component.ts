import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service'
import { Ingredients } from '../../interfaces/ingredients';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  id: number;
  text: string;
  unit: number;


  @Output() onRemoveIngredients: EventEmitter<Ingredients> = new EventEmitter();
  ingredients: Ingredients[] = [];


  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredientsService.getIngredients().subscribe(t => this.ingredients = t);
  }

  onSubmit(){
    const newIngredient: Ingredients ={
      id: this.id,
      name: this.text,
      unit: this.unit
    }

    this.ingredientsService.addIngredient(newIngredient).subscribe(t => this.ingredients.push(t));

    this.id = 0;
    this.text = "";
    this.unit = 0;
  }

  onRemove(ingredients: Ingredients) {
    this.ingredientsService.removeIngredient(ingredients).subscribe(() => this.ingredients = this.ingredients.filter(i => i.id !== i.id));
  }
}
