import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListOverviewPage} from "../list/list-overview/list-overview";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public keyboard: Keyboard) {}

   pushPage() {
     this.navCtrl.push(ListOverviewPage);

   }
  keyboardCheck() {
    console.log("test");
    this.keyboard.show();
  }
}
