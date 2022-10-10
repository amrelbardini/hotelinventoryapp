import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';



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

  ngOnInit():void{

  //we can't create the instance here due to component life cycle if the static property is false.

  }
  ngAfterViewInit():void{
    // const componentRef=this.vcr.createComponent(RoomsComponent);
    const elementRef=this.name.nativeElement.innerText="Hotel Hilton";

  }
};






