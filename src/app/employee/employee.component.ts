import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[RoomService],
})
export class EmployeeComponent implements OnInit {

  empName:string='john';

  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    console.log(this.roomService);
  }

}
