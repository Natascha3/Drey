import { Component } from '@angular/core';
import { ListOverviewPage } from '../list/list-overview/list-overview';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // public navParams: NavParams
  public username:string;
  public password:string;
  constructor(public navCtrl: NavController) {
  }

  pushPage(username,password ) {
    this.username=username;
    this.password=password;
    console.log(username+password);
    if(this.username=="admin" && this.password=="test2017"){
      this.navCtrl.push(ListOverviewPage);
    }
    else{
      alert("Fehler!")
    }

  }
}
