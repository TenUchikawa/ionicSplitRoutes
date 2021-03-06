import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaPage } from './media.page';

const routes: Routes = [
  {
    path: '',
    component: MediaPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'media-child-page-test',
        loadChildren: () =>
          import('./media-child-page-test/media-child-page-test.module').then(
            (m) => m.MediaChildPageTestPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/media/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaPageRoutingModule {}
