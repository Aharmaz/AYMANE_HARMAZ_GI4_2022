import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillinginfoPage } from './billinginfo.page';

const routes: Routes = [
  {
    path: '',
    component: BillinginfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillinginfoPageRoutingModule {}
