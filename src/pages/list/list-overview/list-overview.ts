import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewListPage } from './newList/newList';

@Component({
  selector: 'page-listOverview',
  templateUrl: 'list-overview.html'
})
export class ListOverviewPage {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController) {
  }

  itemSelected(item) {
    console.log(item);
  }

  addList() {
    this.navCtrl.push(NewListPage);
  }
}




