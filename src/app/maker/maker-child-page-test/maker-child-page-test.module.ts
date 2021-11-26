import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakerChildPageTestPageRoutingModule } from './maker-child-page-test-routing.module';

import { MakerChildPageTestPage } from './maker-child-page-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakerChildPageTestPageRoutingModule
  ],
  declarations: [MakerChildPageTestPage]
})
export class MakerChildPageTestPageModule {}
