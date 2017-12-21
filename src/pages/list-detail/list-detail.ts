import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {

  item:any;
  points:any;

  constructor(public navParams:NavParams) {
    this.item= this.navParams.get('item');
    console.log(this.item);

    this.getPoints();
  }

  getPoints(){
    this.points = this.item.points;
  }


}
