import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakerChildPageTestPage } from './maker-child-page-test.page';

const routes: Routes = [
  {
    path: '',
    component: MakerChildPageTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakerChildPageTestPageRoutingModule {}
