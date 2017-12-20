import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-add-campaign',
  templateUrl: 'add-campaign.html',
})
export class AddCampaignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCampaignPage');
  }
  goToHome() {
    this.navCtrl.pop();
  }
}
