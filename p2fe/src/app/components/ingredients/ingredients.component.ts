import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service'
import { Ingredients } from '../../Ingredients';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  id: number;
  text: string;
  unit: string;
  selected : boolean = false;;
  
  ingredient: Ingredients;



  @Output() onRemoveIngredients: EventEmitter<Ingredients> = new EventEmitter();
  ingredients: Ingredients[] = [];
  check: boolean[] = []
  


  constructor(private ingredientsService: IngredientsService) { 
    console.log('Start of constructor');
  }

  ngOnInit(): void {
    console.log('Start of ngOnInit');
    this.ingredientsService.getIngredients().subscribe(i => {
      this.ingredients = i;
      for(let j = 0 ; j < i.length; j++){
        this.check[j] = false;
      }
    }); //storing the ingredients in the variable array ingredients
  }

  onSubmit(){
    const newIngredient: Ingredients ={
      id: this.id,
      name: this.text,
      unit: this.unit,
    }

    this.ingredientsService.addIngredient(newIngredient).subscribe(t => this.ingredients.push(t));

    this.id = 0;
    this.text = "";
    this.unit = "";

  }


  onRemove(ingredient) {
    console.log(ingredient)
    console.log(this.ingredient)
    this.ingredientsService.removeIngredient(ingredient).subscribe(() => this.ingredients = this.ingredients.filter(i => i.id !== ingredient.id));
  }

  onSelectedRemove() {
    this.check.forEach((check,index) => {
      if (check){
        this.ingredientsService.removeIngredient(this.ingredients[index]).subscribe();
      }
    })
  }

  onAlert(){
    
  }

  onToggleSelect(i){
    this.check[i] = !this.check[i];
    this.check.forEach(c => console.log(c));
  }
}
