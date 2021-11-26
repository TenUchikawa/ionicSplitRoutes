import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminChildPageTestPage } from './admin-child-page-test.page';

const routes: Routes = [
  {
    path: '',
    component: AdminChildPageTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminChildPageTestPageRoutingModule {}
