import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListOverviewPage} from "../list-overview/list-overview";

@Component({
  selector: 'page-newList',
  templateUrl: 'newList.html'
})
export class NewListPage {
  showOptions=false;

  constructor(public navCtrl: NavController) {

  }

  public release(success){
    if(success=true){
      this.showOptions=true;
    }
    else{
      this.showOptions=false;
    }
  }
  public showOption(){
    return this.showOptions;
  }

  saveList(listName,date){
    console.log(listName);
    this.navCtrl.push(ListOverviewPage,{param1:listName, param2:date});
  }
}
