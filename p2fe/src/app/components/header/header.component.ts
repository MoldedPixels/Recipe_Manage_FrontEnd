import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId!: string;
  loggedIn: boolean= false;
  subscription: Subscription;
  constructor(private authentication: AuthenticationService) {
    this.subscription=this.authentication.loggedInObs().subscribe((value)=>this.loggedIn=value);
  }

  ngOnInit(): void {
  }
  login(){
    if(this.userId!==null&&this.userId!==""){
      this.authentication.login(this.userId).subscribe(response=>{
        //maybe a welcome firstname lastname
      })
      this.userId="";
    }
  }
  logout(){
    this.authentication.logout()
  }
  refresh(){
    console.log("check")
    this.authentication.refreshCreds();
  }
  //ca1f9f80-e8ca-11eb-99d6-d79ab99217ff

}
