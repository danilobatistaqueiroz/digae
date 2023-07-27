import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
})
export class ChatsPage implements OnInit, AfterViewInit {

  @ViewChild('content') content!: ElementRef;
  @ViewChild('inicial') inicial!: ElementRef;
  @ViewChild('popover') popover!: any;

  closeResult = '';
  page:number=0;

  msg = '/assets/icon/message-square.svg';

  tutorialText:string='';

  isOpen = false;

  allFade:boolean[]=[];

  chats:Chat[]=[];

  checkedTrash:boolean=false;
  checkedBookmark:boolean=true;
  checkedFire:boolean=true;
  checkedMoney:boolean=false;

  constructor(public preferences: PreferencesService, private router: Router, private chatsService:ChatsService) { }

  ngAfterViewInit() {
    //console.log('after view init');
  }

  ngOnInit() {
    setTimeout(()=>this.page=1,1300);
    this.chatsService.getChats().subscribe(c => {
      this.chats.push(c);
    });
  }


  newMessage(){
    this.router.navigate(['contacts']);
  }

  next(){
    this.page=2;
  }

  selectChat(chat:Chat){
    chat.active=true;
    setTimeout(()=>{
      chat.active=false;
      this.router.navigate(['contact-chat',chat.id]);
    },500);
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

}
