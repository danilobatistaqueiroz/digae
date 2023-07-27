import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PreferencesService {

  isTutorial:boolean=false;
  isFirstConfiguration:boolean=true;

  private tutorialStatus = new BehaviorSubject(false);
  tutorialStatusChange = this.tutorialStatus.asObservable();
  
  async InitializeFirstAccess() {
    let tuto:GetResult = await Preferences.get({ key: 'tutorial' });
    if(tuto.value)
      this.isTutorial = (tuto.value==="true");

    let config:GetResult = await Preferences.get({ key: 'first-configuration' });
    if(config.value)
      this.isFirstConfiguration = (config.value==="true");
  }

  setTutorial(tutorial:string){
    Preferences.set({key: 'tutorial',value: tutorial});
    this.isTutorial=(tutorial==="true");
    this.tutorialStatus.next(tutorial==="true");
  }

  setFirstConfiguration(first:string){
    Preferences.set({key: 'first-configuration',value: first});
    this.isFirstConfiguration=(first==="true");
  }

}