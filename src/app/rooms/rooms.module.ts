import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    AddRoomComponent,
  ],
  imports: [
  CommonModule,
    RoomsRoutingModule,
     FormsModule,
    //  AppRoutingModule,
     HeaderModule,
    ],
})
export class RoomsModule {}
