import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string="";
  fullName: string ="";
  loggedIn: boolean= false;
  show: boolean= false;
  subscription: Subscription;
  constructor(private authentication: AuthenticationService) {
    this.subscription=this.authentication.loggedInObs().subscribe((value)=>this.loggedIn=value);
  }

  ngOnInit(): void {
  }
  login(){
    if(this.userId!==null&&this.userId!==""){
      this.authentication.login(this.userId).subscribe(response=>{
        let res =response as User;
        this.fullName=res.firstname+" "+res.lastname;
      })
      this.userId="";
    }
  }
  logout(){
    this.authentication.logout()
  }
  toggleShow(){
    this.show=!this.show;
  }

}
