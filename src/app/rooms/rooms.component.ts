import {  AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild,ViewChildren,QueryList } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { HeaderComponent } from './../header/header.component';
import { RoomService } from './../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers:[RoomService],

})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked {
  hotelName: string = 'Hilton';
  numOfRooms = 10;
  hideRooms: boolean = false;

  rooms: Rooms = {
    availableRooms: 0,
    bookedRooms: 5,
    hotelRooms: 20,
  };

  roomlist: RoomList[] = [];

  selectedRoom!:RoomList;
  title:string="Room List";
  // static true property is added when it's safe to use that component in the ngOnInit of another component
  @ViewChild(HeaderComponent) HeaderComponent!:HeaderComponent;
  // static property is immutable in viewchildren so you have to access the instances in ngAfterViewInit, it's accessed as a list
  // @ViewChildren(HeaderComponent) headerChildren!:QueryList<HeaderComponent>

  selectRoom(room:RoomList){
    this.selectedRoom=room;
    console.log(room);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title="rooms list";
  }
  addRoom(){
    const room:RoomList={
        roomNumber:5,
        roomType: 'Deluxe Room',
        amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
        price: 300,
        photos: 'https://place.hold.it/300/400.png',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('20-Nov-2022'),
        rating:4.5,
    };
    // rather than modifying the old object we create a new instance with the old data along the new on and reset
    this.roomlist=[...this.roomlist,room];
  }
  constructor(private roomService:RoomService) {}

  ngOnInit(): void {

    this.roomlist=this.roomService.getRooms();
  }
  ngAfterViewInit(): void {
    // console.log(this.headerChildren);
    // this.headerChildren.first.title="First Component Child";
    // this.headerChildren.get(1)!.title="middle component child";
    // this.headerChildren.last.title="Last component child";
  }
  ngAfterViewChecked(): void {

  }
}
