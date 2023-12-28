import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingGuard } from './guards/booking.guard';

//remove canDeactivate Route if needed, since it blocks the routing if the return value is false
const routes: Routes = [{ path: '', component: BookingComponent, canDeactivate:[BookingGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
