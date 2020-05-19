import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup-filho',
  templateUrl: './popup-filho.component.html',
  styleUrls: ['./popup-filho.component.css']
})
export class PopupFilhoComponent extends PopupComponent implements OnInit {

  constructor(popupService: PopupService) {
    super(popupService);
  }

  ngOnInit() {
  }

}
