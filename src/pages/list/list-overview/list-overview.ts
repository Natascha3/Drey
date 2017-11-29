import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from "ionic-angular";
import { List } from "./list";
import { NewListPage } from "./newList/newList";

@Component({
  selector: 'page-listOverview',
  templateUrl: 'list-overview.html'
})
export class ListOverviewPage {
  list: string[];
  listName:string;
  listDate:any;
  test= new List("","",null);

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.listName= navParams.get('param1');
    this.listDate= navParams.get('param2');

    console.log(this.listName);
  }

  addList(){
    this.navCtrl.push(NewListPage);
  }

  newList(){
    return this.listName;

  }
  newDate(){
    return this.listDate;
  }

}




