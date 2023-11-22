import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParfumesRoutingModule } from './parfumes-routing.module';
import { ParfumesComponent } from './parfumes.component';
import { AddParfumeComponent } from './add-parfume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParfumesComponent,
    AddParfumeComponent,
   
  ],
  imports: [
    CommonModule,
    ParfumesRoutingModule,
   
    ReactiveFormsModule 
  ]
})
export class ParfumesModule { }
