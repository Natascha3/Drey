import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListOverviewPage} from "../list/list-overview/list-overview";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

   pushPage() {
     this.navCtrl.push(ListOverviewPage);
   }
}
