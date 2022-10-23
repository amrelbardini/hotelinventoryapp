import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private loginService:LoginService) { }
  email:string="";
  password:string="";

  Login(){
    if(this.loginService.Login(this.email,this.password)){
      this.route.navigateByUrl('rooms');
    }

  }

  ngOnInit(): void {
  }

}
