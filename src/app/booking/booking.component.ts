import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''), // this syntax is equal to the one at the bottom but more readable
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      address:this.fb.group({
        adressLine1:[''],
        adressLine2:[''],
        City: [''],
       State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      guestCount: [''],
    });
  }

  //ADD BOOKING
  addBooking(){
    //getRawValue instead of value to return disabled values as well
      console.log(this.bookingForm.getRawValue());
  }

    panelOpenState = false;


}
