import { Component } from '@angular/core';
import { ListOverviewPage } from '../list/list-overview/list-overview';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // public navParams: NavParams
  constructor(public navCtrl: NavController) {
  }

  pushPage() {
    this.navCtrl.push(ListOverviewPage);
  }
}
