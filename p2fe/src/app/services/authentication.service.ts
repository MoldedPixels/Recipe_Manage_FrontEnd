import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Observable, Subject, Subscription, } from 'rxjs';
import {concat, merge, buffer, take, tap, map} from 'rxjs/operators'
import { waitForAsync } from '@angular/core/testing';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: boolean = false;
  private subject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }
  logout(){
    this.http.delete(environment.apiUrl+'/login').subscribe(response=>{
      this.refreshCreds();
    });
  }
  login(id: string){
    // var one=this.http.post(environment.apiUrl+'/login?userid='+id, null).pipe(take(1))
    // var two=this.http.get(environment.apiUrl+'/login').pipe(take(1))
    return this.http.post(environment.apiUrl+'/login?userid='+id, null)
    .pipe(map(data=>{
      this.http.get(environment.apiUrl+'/login').subscribe(response=>{
        if(response===null){
          this.loggedIn=false;
          this.subject.next(this.loggedIn)
        }
        else{
          this.loggedIn=true;
          this.subject.next(this.loggedIn)
        }
        return data; 
      });
      return data;// look up how to do synchronous
    }))
  }
  refreshCreds(){
    this.http.get(environment.apiUrl+'/login',{ observe: 'response' }).subscribe(response=>{
      console.log(response.body)
      if(response.body===false){
        console.log("unfortunate")
        this.loggedIn=false;
        this.subject.next(this.loggedIn)
      }
      else{
        this.loggedIn=true;
        this.subject.next(this.loggedIn)
      } 
    });
  }
  loggedInObs(){
    return this.subject.asObservable();
  }

}
