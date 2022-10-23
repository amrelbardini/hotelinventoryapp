import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;

  isAdmin:boolean=false;

  Login(email:string,password:string){
    if(email==="admin@gmail.com" && password==="Admin"){
      alert("login successful");
             this.isLoggedIn=true;
             this.isAdmin=true;
             return this.isLoggedIn;

    }else if(email==="user@gmail.com" && password==="User"){
          this.isLoggedIn=true;
          this.isAdmin=false;
          return this.isLoggedIn;

    }else{
      alert("you've entered a wrong email and password");
              this.isLoggedIn=false;
              this.isAdmin=false;
              return this.isLoggedIn;
    }
  }

  constructor() { }
}
