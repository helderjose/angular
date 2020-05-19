import { Popup } from './../model/popup';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupService {

  private popUpVisibility = new BehaviorSubject<boolean>(false);
  private popup: Popup;

  private promise: Promise<{}>;
  private resolvePopUp: Function;
  private rejectPopUp: Function;

  constructor() { }

  get isShowPopup() {
    return this.popUpVisibility.asObservable();
  }

  newPopup(title: string, content: string) {
    console.log("no pop service")
    this.popup = new Popup(title, content);
    
    this.promise = new Promise((resolve, reject) => {
      this.resolvePopUp = resolve;
      this.rejectPopUp = reject;
    });

    this.popUpVisibility.next(true);

    return this.promise;
  }

  sendAffirmativeResponse() {
    this.popUpVisibility.next(false);
    this.resolvePopUp();
  }

  sendNegativeResponse() {
    this.popUpVisibility.next(false);
    this.rejectPopUp();
  }

  getPopup(){
    return this.popup;
  }
}
