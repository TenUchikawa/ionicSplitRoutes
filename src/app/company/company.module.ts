import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [CompanyComponent, TopComponent, IssueComponent, WikiComponent],
  imports: [CommonModule, CompanyRoutingModule],
})
export class CompanyModule {}
