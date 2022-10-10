import { Inject, Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms.interface';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from '../app/AppConfig/appconfig.interface';


@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig:AppConfig) {
    console.log("Room service is getting initialized....");
    console.log(this.appConfig.apiEndPoint);
  }

   rooms: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
      price: 500,
      photos: 'https://place.hold.it/300/400.png',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
      price: 1000,
      photos: 'https://place.hold.it/300/400.png',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      rating: 4.2,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: ' AC-Free Wi-fi, TV , Bathroom , Kitchen',
      price: 1500,
      photos: 'https://place.hold.it/300/400.png',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('20-Nov-2022'),
      rating: 3.8,
    },
  ];

  getRooms():RoomList[]{
    return this.rooms;
  }
}
