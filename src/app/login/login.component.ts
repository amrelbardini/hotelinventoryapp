import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  email:string="";
  password:string="";

  Login(){
    if(this.email==="admin@gmail.com" && this.password==="Admin"){
      alert("login successful");
      this.route.navigateByUrl("/rooms/add");
    }else{
      alert("you've entered a wrong email and password");
    }
  }

  ngOnInit(): void {
  }

}
