import { InjectionToken } from "@angular/core";

export const LocalStorageTocken= new InjectionToken<any>('local storage',{
  providedIn:'root',
  factory(){
    return localStorage;
  }
});
