import { Inject, Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms.interface';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from '../app/AppConfig/appconfig.interface';
import { HttpClient,HttpRequest } from '@angular/common/http';


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
    return this.http.get<RoomList[]>(this.appConfig.apiEndPoint);
  }
  addRoom(room:RoomList[]){
    return this.http.post<RoomList[]>(this.appConfig.apiEndPoint,room);
  }
  editRoom(room:RoomList){
    // will delete the entire data on the json server and only save that of the sent argument
    return this.http.post<RoomList>(`https://api.npoint.io/73c70139546260a5daf0`,room);
  }
  UpdateRooms(rooms:RoomList[]){
    return this.http.post<RoomList[]>(`https://api.npoint.io/73c70139546260a5daf0`,rooms)
  }

  getPhotos(){
     const request=new HttpRequest('GET',"https://jsonplaceholder.typicode.com/photos",{
      reportProgress:true,
     });
     return this.http.request(request);
  }

}
