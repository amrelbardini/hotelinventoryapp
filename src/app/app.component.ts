import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject } from '@angular/core';
import { LocalStorageTocken} from './localstorage.tocken';
import { InitService } from './init.service';



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

  constructor(@Inject(LocalStorageTocken) private LocalStorage:Storage, private initService:InitService){
    console.log(initService.config);

  }

  ngOnInit():void{

  //we can't create the instance here due to component life cycle if the static property is false.

   this.LocalStorage.setItem('name',"John");

  }
  ngAfterViewInit():void{
    // const componentRef=this.vcr.createComponent(RoomsComponent);
    const elementRef=this.name.nativeElement.innerText="Hotel Hilton";

  }
};






