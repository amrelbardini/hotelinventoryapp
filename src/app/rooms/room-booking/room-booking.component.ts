import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})

export class RoomBookingComponent implements OnInit {


  constructor(private route:ActivatedRoute) { }

  id:number=0;


  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.id=Number(param.get('id'));
      console.log("this is the paramater ====>",param)});
  }

}
