import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillinginfoPageRoutingModule } from './billinginfo-routing.module';

import { BillinginfoPage } from './billinginfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillinginfoPageRoutingModule
  ],
  declarations: [BillinginfoPage]
})
export class BillinginfoPageModule {}
