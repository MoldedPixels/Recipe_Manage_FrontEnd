import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReviewByIdService } from '../../services/review-by-id.service';
import { Review } from '../../models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(
    private reviewService: ReviewByIdService,
    private formBuilder: FormBuilder
  ) { 
  }

  reviewForm =  this.formBuilder.group({
    idNum: ['', Validators.required],
    type: ['', Validators.required]
  });
  results = 0;
  reviews: Review[]=[];

  ngOnInit(): void {
  }

  onSubmit(): void {
    //if(this.reviewForm.invalid) {
    //  alert("Please fill out the entire form.");
    //  return;
    //}
    if(this.reviewForm.controls['type'].value == 'Review'){
      if (this.reviewForm.invalid) return;
      this.reviewService.getReviewsById(this.reviewForm.controls['idNum'].value).subscribe((data) => {
        console.log(data);
        this.reviews = data as Review[];
        this.results = 1;
      });
    } else if(this.reviewForm.controls['type'].value == 'User'){
      if (this.reviewForm.invalid) return;
      this.reviewService.getReviewsByUser(this.reviewForm.controls['idNum'].value).subscribe((data) => {
        console.log(data);
        this.reviews = data as Review[];
        this.results = 1;
      });
    } else if(this.reviewForm.controls['type'].value == 'Recipe'){
      if (this.reviewForm.invalid) return;
      this.reviewService.getReviewsByRecipe(this.reviewForm.controls['idNum'].value).subscribe((data) => {
        console.log(data);
        this.reviews = data as Review[];
        this.results = 1;
      });
    } else {
      console.warn("you reached the else statement");
    }
  }
}
