import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListOverviewPage} from "../list-overview/list-overview";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor() {

  }

  ListOverview(){
/*    this.navCtrl.push(ListOverviewPage);*/
  }
}
