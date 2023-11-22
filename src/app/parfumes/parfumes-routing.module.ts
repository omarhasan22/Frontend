import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumesComponent } from './parfumes.component';

const routes: Routes = [{ path: '', component: ParfumesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParfumesRoutingModule { }
