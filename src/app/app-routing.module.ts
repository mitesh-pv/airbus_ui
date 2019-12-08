import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfFlightsComponent} from './list-of-flights/list-of-flights.component';
import { BodyComponent} from './body/body.component';
import { BookingDetailsComponent} from './booking-details/booking-details.component';


const routes: Routes = [
  { path: 'list-Of-Flights', component: ListOfFlightsComponent},
  { path: 'select', component: BodyComponent},
  { path: 'bookedFlight', component: BookingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
