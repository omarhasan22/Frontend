import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumesComponent } from './parfumes.component';
import { PerfumeProfileComponent } from './perfume-profile/perfume-profile.component';
import { ShowTypeComponent } from './show-type/show-type.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: ParfumesComponent },
  { path: 'perfumeProfile/:id', component: PerfumeProfileComponent },
  { path: 'perfumeType/:type', component: ShowTypeComponent },
  { path: 'charge', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParfumesRoutingModule { }
