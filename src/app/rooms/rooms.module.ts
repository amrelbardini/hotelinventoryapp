import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { HeaderModule } from '../header/header.module';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    AddRoomComponent,
    FilterPipe,
  ],
  imports: [
  CommonModule,
    RoomsRoutingModule,
     FormsModule,
     ReactiveFormsModule,
    //  AppRoutingModule,
     HeaderModule,
    ],
})
export class RoomsModule {}
