import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReviewByIdService } from '../../services/review-by-id.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(
    private reviewService: ReviewByIdService,
    private formBuilder: FormBuilder
  ) { }

  reviewForm =  this.formBuilder.group({
    idNum: ['', Validators.required],
    type: ['', Validators.required]
  });

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
      });
    } else if(this.reviewForm.controls['type'].value == 'User'){
      if (this.reviewForm.invalid) return;
      this.reviewService.getReviewsByUser(this.reviewForm.controls['idNum'].value).subscribe((data) => {
        console.log(data);
      });
    } else if(this.reviewForm.controls['type'].value == 'Recipe'){
      if (this.reviewForm.invalid) return;
      this.reviewService.getReviewsByRecipe(this.reviewForm.controls['idNum'].value).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.warn("you reached the else statement");
    }
  }
}
