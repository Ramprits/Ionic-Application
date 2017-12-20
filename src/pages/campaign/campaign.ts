import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CampaignProvider } from '../../providers/campaign/campaign';
import { HomePage } from '../home/home';
import { AddCampaignPage } from '../add-campaign/add-campaign';

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage implements OnInit {
  campaigns: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignProvider,
    private fileterModel: ModalController) {
  }
  ngOnInit() {
    this.campaignService.getCampaign().subscribe((campaign) => { this.campaigns = campaign }, (error) => console.error(error));
  }
  goHome() {
    this.navCtrl.setRoot(HomePage);
  }
  openModel() {
    let filter = this.fileterModel.create(AddCampaignPage);
    filter.present();
  }
}
