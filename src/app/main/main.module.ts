import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { ConfigurationsComponent } from './modals/configurations/configurations.component';
import { FirstConfigurationsComponent } from '../tutorial/first-configurations/first-configurations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, ConfigurationsComponent, FirstConfigurationsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule {}
