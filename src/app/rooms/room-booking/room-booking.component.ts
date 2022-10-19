import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { RoomList } from '../rooms.interface';
@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})

export class RoomBookingComponent implements OnInit {


  constructor(private route:ActivatedRoute) { }


 id:number=0;
// using paramMap is more preferable than param
// paramMap is more clean as it has some methods that check for the key if it exists or not

//  id$=this.route.params.pipe( map(params=>params['id']));
id$=this.route.paramMap.pipe( map(params=>params.get('id')));


  ngOnInit(): void {

  }

}
