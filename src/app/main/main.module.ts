import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { ScenesComponent } from '../tutorial/scenes/scenes.component';
import { FirstConfigurationsComponent } from '../tutorial/first-configurations/first-configurations.component';
import { ConfigurationsComponent } from './modals/configurations/configurations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, FirstConfigurationsComponent, ConfigurationsComponent, ScenesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule {}
