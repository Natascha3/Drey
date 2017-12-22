import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {NewListPage} from "../list/list-overview/newList/newList";
import {ListOverviewPage} from "../list/list-overview/list-overview";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


  pushToProfil(){
    this.navCtrl.push(ProfilePage);
  }

  pushToLists(){
    this.navCtrl.push(ListOverviewPage);
  }

  pushToNewList(){
    this.navCtrl.push(NewListPage);
  }
}
