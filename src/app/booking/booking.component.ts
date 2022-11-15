import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl('',{validators:[Validators.required]}), // this syntax is equal to the one at the bottom but more readable
      guestEmail: ['',[Validators.required,Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['',[Validators.required, Validators.minLength(5)]],
      guestAddress: [''],
      address:this.fb.group({
        adressLine1:[''],
        adressLine2:[''],
        City: [''],
       State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      // it's an array of formbuildergroup or an array of form controls if you will.
      guests:this.fb.array([this.fb.group({guestName:[''],age:new FormControl('')})]),
      //required true used when the default value is already given, such as boolean params (checkbox)
      TnC:new FormControl(false,{validators:[Validators.requiredTrue]}),
    });
  }

  //ADD BOOKING
  addBooking(){
    //getRawValue instead of value to return disabled values as well
      console.log(this.bookingForm.getRawValue());
      this.bookingForm.reset();

  }
  panelOpenState = false;
  //add guest
  addGuest(){
   this.guests.push(
    this.fb.group({guestName:[''],age: new FormControl('')})
   )
  }
  //remove Guest
  removeGuest(i:number){
    this.guests.removeAt(i);
  }
  //add passport
  addPassport(){
    this.bookingForm.addControl('passport',new FormControl(''));
  }
  //remove passport
  removePassport(){
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  }

}
