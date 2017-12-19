import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { pageAnimation } from '../../shared/core/public-data';

@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html',
  animations: [pageAnimation]
})
export class HomeDetailPage {
  selectedHome = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedHome = this.navParams.get("selectedHome");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailPage');
  }

}
