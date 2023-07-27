import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { BehaviorSubject, Observable, Observer, Subscription, of } from 'rxjs';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/chat';

@Injectable()
export class ChatsService {
  
  chats:any[]=[
    {id:1,img:"animal.png",msg:"Hello! I'm going to school now!",active:false,unread:false},
    {id:2,img:"aquaman.png",msg:"For what reason would it be advisable for me to think about business content?",active:false},
    {id:3,img:"arab.png",msg:"Thank you for your believe in our supports",active:false,unread:true},
    {id:4,img:"basketball.png",msg:"Long time no see! Tomorrow office. will be free on sunday.",active:false,unread:false},
    {id:5,img:"bear.png",msg:"I want a beer!",active:false,unread:false},
    {id:6,img:"boy.png",msg:"I got a job offer in Melbourne and my working visa will be sponsored by the company.",active:false,unread:false},
    {id:7,img:"cat.png",msg:"I love your vlog. You are doing absolutely amazing by sharing all this info",active:false,unread:false},
    {id:8,img:"clown.png",msg:"Michelle is literally the most adorable clown ever.",active:false,unread:false},
    {id:9,img:"cow.png",msg:"Cows can weigh over 1,000 pounds and stand over 6 feet tall at their shoulders.",active:false,unread:false},
    {id:10,img:"doberman.png",msg:"Send me a bone! Please!",active:false,unread:false},
    {id:11,img:"dog.png",msg:"I'm hungry!",active:false,unread:false},
    {id:12,img:"dolphin.png",msg:"The sea isn't easy today!",active:false,unread:false},
    {id:13,img:"duck.png",msg:"I can fly, run, walk, and swim",active:false,unread:false},
    {id:14,img:"girl.png",msg:"The date was wonderful!",active:false,unread:false},
    {id:15,img:"gorilla.png",msg:"A banana for you!",active:false,unread:false},
    {id:16,img:"gost.png",msg:"I was scared, but ok",active:false,unread:false},
    {id:17,img:"hero.png",msg:"All heros need to save the world",active:false,unread:false},
    {id:18,img:"invisible-man.png",msg:"Can you see my picture?",active:false,unread:false},
    {id:19,img:"lemur.png",msg:"Picture of forest",active:false,unread:false},
    {id:20,img:"lex.png",msg:"Superman is a boring man",active:false,unread:false},
    {id:21,img:"love-cat.png",msg:"My best friend",active:false,unread:false},
    {id:22,img:"man.png",msg:"New jobs in stack technologies!",active:false,unread:false},
    {id:23,img:"monstrix.png",msg:"Ungly is a good attribute",active:false,unread:false},
    {id:24,img:"ms.png",msg:"Digae has new features",active:false,unread:false},
    {id:25,img:"robot.png",msg:"Creating books using IA will never work",active:false,unread:false},
    {id:26,img:"spiderman.png",msg:"In the next movie",active:false,unread:false},
    {id:27,img:"ugly.png",msg:"Thanks for talking",active:false,unread:false},
    {id:28,img:"wale.png",msg:"Water",active:false,unread:false},
    {id:29,img:"woman.png",msg:"Today!",active:false,unread:false},
  ];

  myObservable:Observable<Chat> = from(this.chats);

  getChats():Observable<Chat> {
    return this.myObservable;
  }

  lastChatItem = new BehaviorSubject(0);
  lastChatItemNotify = this.lastChatItem.asObservable();

}