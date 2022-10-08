export interface Rooms{
  availableRooms?:number;
  bookedRooms?:number;
  hotelRooms?:number;
}

export interface RoomList{
  roomNumber:number;
  roomType:string;
  amenities:string;
  price:number;
  photos:string;
  checkinTime:Date;
  checkoutTime:Date;
  rating:number;
}
