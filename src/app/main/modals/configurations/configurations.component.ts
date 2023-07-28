import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreferencesService } from 'src/app/services/preferences.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss'],
})
export class ConfigurationsComponent  implements OnInit {

  tutorialStartup:boolean=false;

  constructor(private modalCtrl: ModalController,private preferences:PreferencesService) {}

  ngOnInit() {
    this.tutorialStartup = this.preferences.isFirstConfiguration;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.tutorialStartup, 'confirm');
  }

  checkStartup(event:any){
    this.tutorialStartup = event.detail.checked;
  }
}
