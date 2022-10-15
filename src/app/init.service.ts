import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InitService {

  config:any;

  constructor(private http:HttpClient) { }

   init(){
    return this.http.get('https://api.npoint.io/d638abce1179d6e4c175').pipe(
     tap((config)=>{this.config=config})
    );
  }
}

