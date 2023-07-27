import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PreferencesService } from 'src/app/services/preferences.service';

@Component({
  selector: 'app-first-configurations',
  templateUrl: './first-configurations.component.html',
  styleUrls: ['./first-configurations.component.scss'],
})
export class FirstConfigurationsComponent  implements OnInit, AfterViewInit {

  checkedTrash:boolean=false;
  checkedBookmark:boolean=true;
  checkedFire:boolean=true;
  checkedMoney:boolean=false;

  checkedLock:boolean=false;

  closeResult = '';
  page:number=0;

  constructor(public preferences: PreferencesService, public router: Router) { 
    //para forçar iniciar com tutorial sem considerar o localstorage
    //this.preferences.setFirstConfiguration("true");
    //this.preferences.setTutorial("false");
    //*************************************************** */
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(()=>this.page=1,1300);
  }

  checkTrash(){
    this.checkedTrash=!this.checkedTrash;
  }
  checkBookmark() {
    this.checkedBookmark=!this.checkedBookmark;
  }
  checkFire() {
    this.checkedFire=!this.checkedFire;
  }
  checkMoney() {
    this.checkedMoney=!this.checkedMoney;
  }

  checkLock(){
    this.checkedLock=!this.checkedLock;
  }

  next(){
    this.page+=1;
  }

  isSlide(page:number){
    return (this.preferences.isFirstConfiguration && this.page==page);
  }

  closeConfigurations() {
    this.preferences.setFirstConfiguration("false");
    this.preferences.setTutorial("true");
  }

}
