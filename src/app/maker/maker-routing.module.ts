import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakerPage } from './maker.page';

const routes: Routes = [
  {
    path: '',
    component: MakerPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'maker-child-page-test',
        loadChildren: () =>
          import('./maker-child-page-test/maker-child-page-test.module').then(
            (m) => m.MakerChildPageTestPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/maker/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakerPageRoutingModule {}
