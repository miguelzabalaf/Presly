import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PerfilUserComponent,
  ],
  exports: [
    HeaderComponent,
    PerfilUserComponent,
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
