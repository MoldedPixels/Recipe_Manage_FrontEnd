import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import  {map } from 'rxjs/operators';

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
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials:true, observe: 'response' as 'response'};

  logout(){
    this.http.delete(environment.apiUrl+'/login', this.httpOptions).subscribe(response=>{
      this.refreshCreds();
    });
  }
  login(id: string){
    // var one=this.http.post(environment.apiUrl+'/login?userid='+id, null).pipe(take(1))
    // var two=this.http.get(environment.apiUrl+'/login').pipe(take(1))
    return this.http.post(environment.apiUrl+'/login?userid='+id, this.httpOptions)
    .pipe(map(response=>{
      this.refreshCreds();
      return response;
    }))
  }
  private refreshCreds(){
    this.http.get(environment.apiUrl+'/login',this.httpOptions).subscribe(response=>{
      if(response.body===false){
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
