import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';





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


  constructor(
              private fb: FormBuilder,
              private bookingService:BookingService,
              private route:ActivatedRoute
              ) {}

  ngOnInit(): void {
    //initializing form
    const roomId=this.route.snapshot.paramMap.get('id');
    this.bookingForm = this.fb.group({
      roomId: new FormControl(
        {value:roomId,disabled:true},
        {validators:[Validators.required]}
        ), // this syntax is equal to the one at the bottom but more readable
      guestEmail: ['',[Validators.required,Validators.email]],
      checkinDate: ['',{updateOn:'blur'}],
      checkoutDate: ['',{updateOn:'blur'}],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      // update value only after leaving the control field not on keypress helps with form performance
      mobileNumber: ['', {updateOn:'blur'}],
      guestName: ['',
                    [
                      Validators.required,
                      Validators.minLength(5),
                      CustomValidator.validateName,
                      CustomValidator.validateSpecialChar('*')
                      ]
        ],
      guestAddress: [''],
      address:this.fb.group({
        adressLine1:['',[Validators.required]],
        adressLine2:['',[Validators.required]],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      // it's an array of formbuildergroup or an array of form controls if you will.
      guests:this.fb.array(
        [this.fb.group({guestName:['',[Validators.required]],age:new FormControl('',{validators:[Validators.required]})})]),
      //required true used when the default value is already given, such as boolean params (checkbox)
      TnC:new FormControl(false,{validators:[Validators.requiredTrue]}),
     // validation on a form group
    },{ updateOn:'blur',validators:[CustomValidator.validateDate]} );
    // show values in real time
    // this.bookingForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // });
  }

  //ADD BOOKING
  addBooking(){
    //getRawValue instead of value to return disabled values as well
    console.log( this.bookingForm.getRawValue());
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe(data=>{
      console.log(data);
    });

      // reset functions takes the default values of the desired form controls as an input object
     // this.bookingForm.reset();
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
