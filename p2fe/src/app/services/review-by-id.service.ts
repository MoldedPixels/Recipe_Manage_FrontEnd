import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewByIdService {
  private endpoint: string = "http://localhost:8080/reviews";

  constructor(private http: HttpClient) { }

  getReviewsById(uuid: string): Observable<Review[]> {
    return this.http.get<any>(this.endpoint+'/review/'+uuid);
  }
  getReviewsByUser(uuid: string): Observable<Review[]> {
    return this.http.get<any>(this.endpoint+'/user/'+uuid);
  }
  getReviewsByRecipe(uuid: string): Observable<Review[]> {
    return this.http.get<any>(this.endpoint+'/'+uuid);
  }
}
