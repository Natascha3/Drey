import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewListPage } from './newList/newList';
import {ListProvider} from "../../../providers/list/list";
import {NavParams} from "ionic-angular";
import {ListDetailPage} from "../../list-detail/list-detail";

@Component({
  selector: 'page-listOverview',
  templateUrl: 'list-overview.html'
})
export class ListOverviewPage {

  items: any;

  constructor(public navCtrl: NavController, private listProvider:ListProvider, public navParams: NavParams) {
    this.getList();
  }

  addList() {
    this.navCtrl.push(NewListPage);
  }


  getList() {
    this.listProvider.getList()
      .then(data => {
        this.items = data;
        console.log(this.items);
      });
  }

  showDetail(item) {
    this.navCtrl.push(ListDetailPage,{item});
    console.log(item);
  }
}




