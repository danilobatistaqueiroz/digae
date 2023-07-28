import { AfterContentChecked, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { PreferencesService } from 'src/app/services/preferences.service';

@Component({
  selector: 'app-first-configurations',
  templateUrl: './first-configurations.component.html',
  styleUrls: ['./first-configurations.component.scss'],
})
export class FirstConfigurationsComponent  implements OnInit, AfterViewInit, AfterContentChecked {

  checkedTrash:boolean=false;
  checkedBookmark:boolean=true;
  checkedFire:boolean=true;
  checkedMoney:boolean=false;

  checkedLock:boolean=false;

  closeResult = '';
  page:number=0;

  scenes:Scene[]=[];
  scene:number=-1;
  backdropVisible:boolean=false;
  popoverMessage:string='';
  
  contacts:Contact[]=[];
  
  constructor(public preferences: PreferencesService, public router: Router, private contactsService: ContactsService) { 
    //para forçar iniciar com tutorial sem considerar o localstorage
    //this.preferences.setFirstConfiguration("true");
    //*************************************************** */
  }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(c => {
      this.contacts=c;
    });
  }

  scenesConfigured:boolean=false;
  async ngAfterContentChecked(){
    let tabCalls:HTMLElement|null = document.querySelector("ion-tab-button#tab-button-calls");
    if(tabCalls && tabCalls.offsetTop>0){
      if(this.scenesConfigured==false){
        this.scenesConfigured=true;
        await this.setScenes();
      }
    }
  }

  async ngAfterViewInit(){
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

  nextPage(){
    this.page+=1;
    if(this.page==5){
      this.startScenes();
    }
  }

  async startScenes(){
    setTimeout(()=>this.next(),500);
  }

  closeConfigurations() {
    this.preferences.setFirstConfiguration("false");
    this.router.navigate(['/']);
  }






  back:boolean=false;
  public async setScenes(){
    await this.setSceneHistoryCallsTab();
    await this.setSceneDetailsPhoneCall();
    await this.setSceneChatsTab();
    await this.setSceneContactDetails();
    await this.setSceneFloatNewMessageButton();
  }
  private async setSceneHistoryCallsTab(){
    this.tabCalls();
    return new Promise(resolve => {
      setTimeout(async ()=> {
        await this.waitTabCalls();
        resolve('finished');
      },200);
    });
  }
  private waitTabCalls(){
    let scene = new Scene();
    let grid:HTMLElement|null = document.querySelector("ion-tab-bar");
    let gridHeight = grid?.offsetHeight;
    let tabCalls:HTMLElement|null = document.querySelector("ion-tab-button#tab-button-calls");
    let callsLeft = tabCalls?.offsetLeft;
    let callsHeight = tabCalls?.clientHeight;
    let content:HTMLElement|null = document.querySelector("ion-tabs");
    let contentLeft = content?.offsetLeft;
    scene.arrowSide='right-arrow';
    scene.img.src="assets/tutorial/chamadas.png";
    scene.msg.text="histórico de chamadas";
    if(gridHeight!=undefined && callsHeight!=undefined && callsLeft!=undefined && contentLeft!=undefined){
      let top = gridHeight;
      let imgLeft = callsLeft+contentLeft+10;
      let imgTop = top-32;
      let msgTop = top-52;
      let popoverWidth = this.simulatePopover(scene.msg.text);
      let msgLeft = imgLeft-popoverWidth-24;
      scene.img.top = `${imgTop}px`;
      scene.img.left = `${imgLeft}px`;
      scene.img.right = '';
      scene.img.bottom = '';
      scene.msg.left = `${msgLeft}px`;
      scene.msg.top = `${msgTop}px`;
      scene.msg.right = '';
      scene.msg.bottom = '';
    }
    scene.actions.push(this.tabCalls);
    this.scenes.push(scene);
  }
  private async setSceneDetailsPhoneCall(){
    this.tabCalls();
    return new Promise(resolve => {
      setTimeout(async ()=>{
        await this.waitNgForPhoneCallFinish();
        resolve('finished');
      },1000);
    });
  }

  tabCalls(){
    let tab = document.getElementsByName('tabCalls')[0];
    tab.click();
  }
  private async waitNgForPhoneCallFinish(){
    let scene = new Scene();
    let tabBar:HTMLElement|null = document.querySelector("ion-tab-bar");
    let top = tabBar?.clientHeight;
    let tabs:HTMLElement|null = document.querySelector("ion-tabs");
    let left = tabs?.offsetLeft;
    let phone:HTMLElement|null = document.querySelector("#phone5");
    scene.arrowSide='right-arrow';
    scene.img.src="assets/tutorial/telefone.png";
    scene.msg.text="detalhes das chamadas";
    if(top!=undefined && left!=undefined && phone!=undefined){
      let imgTop = top + phone.offsetTop - 6;
      let imgLeft = left + phone.offsetLeft - 14;
      let msgTop = top + phone.offsetTop - 18;
      let popoverWidth = this.simulatePopover(scene.msg.text);
      let msgLeft = imgLeft-popoverWidth-24;
      scene.img.top = `${imgTop}px`;
      scene.img.left = `${imgLeft}px`;
      scene.img.right = '';
      scene.img.bottom = '';
      scene.msg.top = `${msgTop}px`;
      scene.msg.left = `${msgLeft}px`;
      scene.msg.right = '';
      scene.msg.bottom = '';
    }
    scene.actions.push(this.tabCalls);
    this.scenes.push(scene);
  }
  private simulatePopover(text:string):number{
    let p:HTMLElement|null = document.createElement('div');
    p.innerText = text;
    p.style.position='fixed';
    let inner:HTMLElement|null = document.querySelector('.tabs-inner');
    inner?.appendChild(p);
    let popoverWidth = p.clientWidth;
    inner?.removeChild(p);
    return popoverWidth;
  }

  tabChats() {
    let tab = document.getElementsByName('tabChats')[0];
    tab.click();
  }
  private async setSceneChatsTab(){
    let tab = document.getElementsByName('tabChats')[0];
    tab.click();
    let scene = new Scene();
    let grid:HTMLElement|null = document.querySelector("ion-tab-bar");
    let gridHeight = grid?.offsetHeight;
    let tabChats:HTMLElement|null = document.querySelector("ion-tab-button#tab-button-chats");
    let chatsLeft = tabChats?.offsetLeft;
    let chatsHeight = tabChats?.clientHeight;
    let content:HTMLElement|null = document.querySelector("ion-tabs");
    let contentLeft = content?.offsetLeft;
    scene.arrowSide='bottom-arrow';
    scene.img.src="assets/tutorial/conversas.png";
    scene.msg.text="tuas conversas";
    if(gridHeight!=undefined && chatsHeight!=undefined && chatsLeft!=undefined && contentLeft!=undefined){
      let top = gridHeight;
      let imgLeft = chatsLeft+contentLeft+10;
      let msgLeft = imgLeft-20;
      let imgTop = top-32;
      let msgTop = top-102;
      scene.img.top = `${imgTop}px`;
      scene.img.left = `${imgLeft}px`;
      scene.img.right = '';
      scene.img.bottom = '';
      scene.msg.left = `${msgLeft}px`;
      scene.msg.top = `${msgTop}px`;
      scene.msg.right = '';
      scene.msg.bottom = '';
    }
    scene.actions.push(this.tabChats);
    this.scenes.push(scene);
  }

  private async setSceneContactDetails(){
    this.tabChats();
    return new Promise(resolve => {
      setTimeout(async ()=> {
        await this.waitNgForContactDetailsFinish();
        resolve('finished');
      },100);
    });
  }
  private async waitNgForContactDetailsFinish(){
    let scene = new Scene();
    let tabBar:HTMLElement|null = document.querySelector("ion-tab-bar");
    let top = tabBar?.clientHeight;
    let tabs:HTMLElement|null = document.querySelector("ion-tabs");
    let left = tabs?.offsetLeft;
    let boy:HTMLElement|null = document.querySelector("#chat5");
    scene.arrowSide='left-arrow';
    scene.img.src="assets/tutorial/avatar.png";
    scene.msg.text="detalhes do contato";
    if(top!=undefined && left!=undefined && boy!=undefined){
      let imgTop = top + boy.offsetTop - 6;
      let imgLeft = left + boy.offsetLeft - 6;
      let msgLeft = imgLeft + boy.offsetWidth + 22;
      let msgTop = top + boy.offsetTop - 18;
      scene.img.top = `${imgTop}px`;
      scene.img.left = `${imgLeft}px`;
      scene.img.right = '';
      scene.img.bottom = '';
      scene.msg.left = `${msgLeft}px`;
      scene.msg.top = `${msgTop}px`;
      scene.msg.right = '';
      scene.msg.bottom = '';
    }
    this.scenes.push(scene);
  }
  private async setSceneFloatNewMessageButton(){
    this.tabChats();
    return new Promise(resolve => {
      setTimeout(async ()=> {
        await this.waitNgForFloat();
        resolve('finished');
      },500);
    });
  }

  private waitNgForFloat(){
    let scene = new Scene();
    let tabBar:HTMLElement|null = document.querySelector("ion-tab-bar");
    let top = tabBar?.clientHeight;
    let tabs:HTMLElement|null = document.querySelector("ion-tabs");
    let left = tabs?.offsetLeft;
    let float:HTMLElement|null = document.querySelector("div.float-row");
    let imgFloat:HTMLElement|null = document.querySelector("div.float-row ion-img");
    scene.arrowSide='right-arrow';
    scene.img.src="assets/tutorial/floating.png";
    scene.msg.text="clique para nova mensagem";
    if(top!=undefined && left!=undefined && float!=undefined && imgFloat!=undefined){
      let imgTop = top + float.offsetTop - 6;
      let imgLeft = left + imgFloat.offsetLeft - 6;
      let msgLeft = imgLeft + imgFloat.offsetWidth - 270;
      let msgTop = top + float.offsetTop - 18;
      scene.img.top = `${imgTop}px`;
      scene.img.left = `${imgLeft}px`;
      scene.img.right = '';
      scene.img.bottom = '';
      scene.msg.left = `${msgLeft}px`;
      scene.msg.top = `${msgTop}px`;
      scene.msg.right = '';
      scene.msg.bottom = '';
    }
      scene.actions.push(()=>{
        this.preferences.setFirstConfiguration("false");
      });
    this.scenes.push(scene);
  }

  nextScene() {
    this.reset();
    setTimeout(()=>this.next(),700);
  }

  reset(){
    let img:HTMLImageElement|null = document.querySelector("#backdrop-box #scene-img");
    let popover:HTMLDivElement|null = document.querySelector(".popover-content");
    if(img && popover){
      popover.classList.remove('show-popover');
      img.classList.remove('show-popover');
      popover.classList.add('hide-popover');
      img.classList.add('hide-popover');
      setTimeout(()=>popover?.classList.remove('hide-popover'),700);
      setTimeout(()=>img?.classList.remove('hide-popover'),700);
    }
  }
  next() {
    this.scene++;
    if(this.scene==this.scenes.length){
      this.page++;
      return;
    }
    let img:HTMLImageElement|null = document.querySelector("#backdrop-box #scene-img");
    let popover:HTMLDivElement|null = document.querySelector(".popover-content");
    if(img && popover){
      img.src=this.scenes[this.scene].img.src;
      img.style.top=this.scenes[this.scene].img.top;
      img.style.left=this.scenes[this.scene].img.left;
      img.style.right=this.scenes[this.scene].img.right;
      img.style.bottom=this.scenes[this.scene].img.bottom;
      popover.style.top=this.scenes[this.scene].msg.top;
      popover.style.left=this.scenes[this.scene].msg.left;
      popover.style.right=this.scenes[this.scene].msg.right;
      popover.style.bottom=this.scenes[this.scene].msg.bottom;
      this.scenes.forEach(s => popover?.classList.remove(s.arrowSide));
      popover.classList.add(this.scenes[this.scene].arrowSide);
      this.popoverMessage = this.scenes[this.scene].msg.text;
      popover.classList.add('show-popover');
      img.classList.add('show-popover');
    }
    this.scenes[this.scene].actions.forEach(a => a());
  }

}


class Scene {
  img:Img=new Img();
  msg:Msg=new Msg();
  arrowSide!:string;
  actions:(()=>void)[]=[];
}
class Img {
  src!:string;
  top!:string;
  left!:string;
  right!:string;
  bottom!:string;
}
class Msg {
  top:string='';
  left:string='';
  right:string='';
  bottom:string='';
  text:string='';
}