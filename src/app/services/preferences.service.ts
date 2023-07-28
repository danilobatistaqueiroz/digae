import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Injectable()
export class PreferencesService {

  isFirstConfiguration:boolean=false;

  constructor(private router:Router){
    
  }

  async initialize(){
    this.isFirstConfiguration = await this.getFirstConfiguration();
  }

  setFirstConfiguration(first:string){
    Preferences.set({key: 'first-configuration',value: first});
    this.isFirstConfiguration = first==="true";
  }

  async getFirstConfiguration():Promise<boolean> {
    let first:string|null = (await Preferences.get({key: 'first-configuration'})).value;
    if(first)
      return first==="true";
    else
      return false;
  }


}