import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject } from '@angular/core';
import { LocalStorageTocken} from './localstorage.tocken';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'hotelinventoryapp';
  role = 'admin';

  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  @ViewChild('name',{read:ElementRef}) name!:ElementRef;

  constructor(@Inject(LocalStorageTocken) private LocalStorage:Storage, private initService:InitService, private router:Router){
    console.log(initService.config);


  }

  ngOnInit():void{
  //we can't create the instance here due to component life cycle if the static property is false.
   this.LocalStorage.setItem('name',"John");
   //start navigation filter
   this.router.events.pipe(
   filter(event=>event instanceof NavigationStart)
   ).subscribe(event=> console.log("navigation started!======> good place to call loading animation!"));

     //end navigation filter
  this.router.events.pipe(
    filter(event=>event instanceof NavigationEnd)
    ).subscribe(event=> console.log("navigation End!======> good place to Stop! loading animation!"));
   }


  ngAfterViewInit():void{
    // const componentRef=this.vcr.createComponent(RoomsComponent);
    const elementRef=this.name.nativeElement.innerText="Hotel Hilton";
  }
};






