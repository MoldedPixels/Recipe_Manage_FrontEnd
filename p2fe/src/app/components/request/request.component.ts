import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  hasForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newRecipeRequest(): void {
    this.hasForm = true;
  }
  newEditRequest(): void {
    this.hasForm = true;
  }
  requestComplete = (): void => {
    this.hasForm = false;
  }

}
