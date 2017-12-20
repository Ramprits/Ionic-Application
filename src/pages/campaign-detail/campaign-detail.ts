import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-campaign-detail',
  templateUrl: 'campaign-detail.html',
})
export class CampaignDetailPage {
  selectedCampaign = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCampaign = this.navParams.get("selectedCampaign");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignDetailPage');
  }
  goToHome() {
    this.navCtrl.pop();
  }
}
