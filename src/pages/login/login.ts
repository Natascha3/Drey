import { Component } from '@angular/core';
import { ListOverviewPage } from '../list/list-overview/list-overview';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // public navParams: NavParams
   username:string="";
   password:string="";
  constructor(public navCtrl: NavController) {
  }

  pushPage( ) {
      this.navCtrl.push(HomePage);


  }
}
