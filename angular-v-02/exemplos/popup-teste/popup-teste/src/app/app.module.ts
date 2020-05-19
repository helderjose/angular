import { PopupService } from './services/popup.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PopupComponent } from './component/popup/popup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PopupFilhoComponent } from './component/popup-filho/popup-filho.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ProfileComponent,
    PopupFilhoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  providers: [
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
