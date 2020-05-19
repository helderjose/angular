import { Popup } from './../../model/popup';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  isShowPopUp$: Observable<boolean>;
  popup: Popup;

  constructor(private popupService: PopupService) { 
    
  }

  ngOnInit() {
    this.popupService.newPopup(
      "meu titulo", "meu conteudo"
    ).catch(()=>{})
    
    this.isShowPopUp$ = this.popupService.isShowPopup;

    this.isShowPopUp$.subscribe(() => {
      // this.popup = this.popupService.popUpData;
      this.popup = this.popupService.getPopup();
    });
  }

}
