import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
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
  showOption(){
    return this.showOptions;
  }
}
