import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminChildPageTestPageRoutingModule } from './admin-child-page-test-routing.module';

import { AdminChildPageTestPage } from './admin-child-page-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminChildPageTestPageRoutingModule
  ],
  declarations: [AdminChildPageTestPage]
})
export class AdminChildPageTestPageModule {}
