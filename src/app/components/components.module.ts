import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPopoverComponent } from './user-popover/user-popover.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserPopoverComponent
  ],
  exports: [
    UserPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
