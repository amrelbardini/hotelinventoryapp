import { AbstractControl, FormGroup } from '@angular/forms';
// create a custom validation class inside a validators folder, use it to validate certain controls
export class CustomValidator {
  // AbstractControl is a base class for formGroup, FormArry, FormControl....
  static validateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      console.log('custom name validation value is false');
      // return an object with invalidName key holding TRUE VALUE
      return { invalidName: true };
    } else {
      //returning null means there's no validation error
      return null;
    }
  }
  // validate special characters
  static validateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (value.includes(char)) {
        return { invalidSpecialChar: true };
      } else {
        return null;
      }
    };
  }
  static validateDate(control:FormGroup){
    // type cast date and we store the value of checkin and checkout
    const checkinDate:any=new Date(control.get('checkinDate')?.value);
    const checkoutDate:any=new Date(control.get('checkoutDate')?.value);
 // calculate time diff large-small
    const diffTime=(checkoutDate-checkinDate);

    const diffDays=Math.ceil(diffTime/(1000 * 60 * 60 * 24));

    if(diffDays<=0){
      // to add error on control level
       control.get('checkoutDate')?.setErrors(
        {
          invalidDate:true
        }
        );
       return {invalidDate:true};
    }else{
      return null;
    }
  }
}
