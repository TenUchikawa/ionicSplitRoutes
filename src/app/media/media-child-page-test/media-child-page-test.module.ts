import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaChildPageTestPageRoutingModule } from './media-child-page-test-routing.module';

import { MediaChildPageTestPage } from './media-child-page-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaChildPageTestPageRoutingModule
  ],
  declarations: [MediaChildPageTestPage]
})
export class MediaChildPageTestPageModule {}
