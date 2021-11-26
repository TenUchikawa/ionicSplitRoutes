import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [MediaComponent, TopComponent, IssueComponent, WikiComponent],
  imports: [CommonModule, MediaRoutingModule],
})
export class MediaModule {}
