import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CallsPageRoutingModule
  ],
  declarations: [CallsPage]
})
export class CallsPageModule {}
