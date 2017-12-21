import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListOverviewPage } from "../pages/list/list-overview/list-overview";
import { NewListPage } from "../pages/list/list-overview/newList/newList";

import { ProfilePage } from "../pages/profile/profile";
import { LoginPage } from '../pages/login/login';
import { ListProvider } from '../providers/list/list';
import { HttpClientModule } from '@angular/common/http';
import {ListDetailPage} from "../pages/list-detail/list-detail";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListOverviewPage,
    NewListPage,
    ProfilePage,
    LoginPage,
    ListDetailPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListOverviewPage,
    NewListPage,
    ProfilePage,
    LoginPage,
    ListDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListProvider
  ]
})
export class AppModule {}
