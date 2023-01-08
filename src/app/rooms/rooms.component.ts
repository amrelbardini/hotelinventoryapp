import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Rooms, RoomList } from './rooms.interface';
import { HeaderComponent } from './../header/header.component';
import { RoomService } from './../room.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomService],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Hilton';
  numOfRooms = 10;
  hideRooms: boolean = false;

  rooms: Rooms = {
    availableRooms: 0,
    bookedRooms: 5,
    hotelRooms: 20,
  };
  // creating a stream and cashing the main data to be used, instead of calling the main data more than once
  //

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
 // new form control to input price filter value
  priceFilter=new FormControl(0);

  roomlist: RoomList[] = [];

  selectedRoom!: RoomList;

  title: string = 'Room List';
  // static true property is added when it's safe to use that component in the ngOnInit of another component
  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;
  // static property is immutable in viewchildren so you have to access the instances in ngAfterViewInit, it's accessed as a list
  // @ViewChildren(HeaderComponent) headerChildren!:QueryList<HeaderComponent>

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'rooms list';
  }
  editRoom() {
    console.log('EDIT ROOM IS CALLED');
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Edited Room',
      amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
      price: 100,
      photos: 'https://place.hold.it/300/400.png',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      rating: 4.5,
    };
    //clone current list
    const rooms = this.roomlist;
    const roomRemoved = rooms.filter((room) => room.roomNumber !== 3);
    const updatedRooms = [...roomRemoved, room];
    console.log(updatedRooms);
    this.roomService.UpdateRooms(updatedRooms).subscribe((data) => {
      this.roomlist = data;
    });
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: this.roomlist.length + 1,
      roomType: 'new Room',
      amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
      price: 300,
      photos: 'https://place.hold.it/300/400.png',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      rating: 4.5,
    };
    // rather than modifying the old object we create a new instance with the old data along the new on and reset
    // this.roomlist = [...this.roomlist, room];
    const rooms = [...this.roomlist, room];
    this.roomService.addRoom(rooms).subscribe((data) => {
      this.roomlist = data;
    });
  }
  //delete room
  deleteRoom(id: number) {
    const oldList = this.roomlist;
    const newList = oldList.filter((room) => room.roomNumber !== id);
    this.roomService.UpdateRooms(newList).subscribe((rooms) => {
      this.roomlist = rooms;
      console.log('delete room is called from parent component');
    });
  }

  totalBytes: number = 0;
  constructor(private roomService: RoomService, private http: HttpClient) {}
  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    //api call happens at getRooms function sends back a stream (observable)
    this.roomService.getRooms$.subscribe((rooms) => {
      this.roomlist = rooms;
    });
    //get photos using httprequest to access each event using type property
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('request sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          console.log(this.totalBytes);
        }
      }
    });
  }
  ngAfterViewInit(): void {
    // console.log(this.headerChildren);
    // this.headerChildren.first.title="First Component Child";
    // this.headerChildren.get(1)!.title="middle component child";
    // this.headerChildren.last.title="Last component child";
  }
  ngAfterViewChecked(): void {}
}
