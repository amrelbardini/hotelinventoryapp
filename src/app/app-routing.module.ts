import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms/add', component: AddRoomComponent },
  { path: 'rooms/:id', component: RoomBookingComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule],
})
export class AppRoutingModule {}
