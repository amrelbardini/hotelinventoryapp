import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms.interface';
import { RoomService } from './../../room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  constructor(private roomService:RoomService) { }

  room:RoomList={
    roomType:'',
    roomNumber:0,
    rating:0,
    amenities:"",
    checkinTime:new Date(),
    checkoutTime:new Date(),
    price:0,
    photos:'',
  }
  successMsg!:string;
  oldList!:RoomList[];
  newList!:RoomList[];



  addRoom(roomsForm:NgForm){
   //get old roomlist
   this.roomService.getRooms$.subscribe(rooms=>{
    this.oldList=rooms;
    this.newList=[...this.oldList,this.room];
    this.roomService.addRoom(this.newList).subscribe(data=>{
      console.log("room added");
      this.successMsg='Room was added successfuly!';
      //reset the form also resets the pristine value
      roomsForm.reset();
    });
  });

  }
  ngOnInit(): void {
  }

}
