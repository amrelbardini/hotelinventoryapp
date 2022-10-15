import { Inject, Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms.interface';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from '../app/AppConfig/appconfig.interface';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig:AppConfig,
  private http:HttpClient) {
    console.log("Room service is getting initialized....");
    console.log(this.appConfig.apiEndPoint);
  }

  // headers= new HttpHeaders({token:'asdasdasdas641532121231'});
  getRooms$=this.http.get<RoomList[]>('https://api.npoint.io/87fa32caa4cc49539a8e').pipe(
    shareReplay(1)
  );



  getRooms(){
    //typecast the return of the get method to roomlist array
    return this.http.get(this.appConfig.apiEndPoint);
  }
  addRoom(room:RoomList[]){
    return this.http.post<RoomList[]>(this.appConfig.apiEndPoint,room);
  }
  editRoom(room:RoomList){
    // will delete the entire data on the json server and only save that of the sent argument
    return this.http.post<RoomList>(`https://api.npoint.io/87fa32caa4cc49539a8e`,room);
  }
  UpdateRooms(rooms:RoomList[]){
    return this.http.post<RoomList[]>(`https://api.npoint.io/87fa32caa4cc49539a8e`,rooms)
  }

  getPhotos(){
     const request=new HttpRequest('GET',"https://jsonplaceholder.typicode.com/photos",{
      reportProgress:true,
     });
     return this.http.request(request);
  }

}
