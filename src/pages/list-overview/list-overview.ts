import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-listOverview',
  templateUrl: 'list-overview.html'
})
export class ListOverviewPage {
  list: string[];
  listName:string;
  listDate:any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.listName= navParams.get('param1');
    this.listDate= navParams.get('param2');

    console.log(this.listName);
  }

  addList(){
    this.navCtrl.push(ContactPage);
  }

  newList(){
    return this.listName;

  }
  newDate(){
    return this.listDate;
  }

}




