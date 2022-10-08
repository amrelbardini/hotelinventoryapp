import {  AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],

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
  constructor() {}

  ngOnInit(): void {

    this.roomlist=[
      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
        price: 500,
        photos: 'https://place.hold.it/300/400.png',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('20-Nov-2022'),
        rating:4.5,
      },
      {
        roomNumber:2,
        roomType: 'Deluxe Room',
        amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
        price: 1000,
        photos: 'https://place.hold.it/300/400.png',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('20-Nov-2022'),
        rating:4.2,
      },
      {
        roomNumber:3,
        roomType: 'Private Suite',
        amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
        price: 1500,
        photos: 'https://place.hold.it/300/400.png',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('20-Nov-2022'),
        rating:3.8,
      },
    ];
  }
  ngAfterViewInit(): void {
    console.log(this.HeaderComponent);
    this.HeaderComponent.title="Room View"
  }
  ngAfterViewChecked(): void {

  }
}
