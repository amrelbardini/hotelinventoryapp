import { Inject, Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms.interface';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from '../app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig:AppConfig,
  private http:HttpClient) {
    console.log("Room service is getting initialized....");
    console.log(this.appConfig.apiEndPoint);
  }

   

  getRooms(){
    //typecast the return of the get method to roomlist array
    return this.http.get<RoomList[]>('https://api.npoint.io/5279d200642e9ea7a419');
  }
}
