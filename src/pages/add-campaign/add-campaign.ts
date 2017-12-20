import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pageAnimation } from '../../shared/core/public-data';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CampaignProvider } from '../../providers/campaign/campaign';
import { CampaignPage } from '../campaign/campaign';
@IonicPage()
@Component({
  selector: 'page-add-campaign',
  templateUrl: 'add-campaign.html',
  animations: [pageAnimation]
})
export class AddCampaignPage implements OnInit {
  AddCampaign: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private campaignService: CampaignProvider) {
  }
  ngOnInit() {
    this.AddCampaign = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      maximumWishes: [0, [Validators.required]],
      isActive: true,
      isClose: false,
      userLock: false,
      managerLock: false
    });
  }
  insertCampaign(campaign) {
    this.campaignService.insertCampaign(campaign).subscribe(camp => {
      this.navCtrl.setRoot(CampaignPage);
      return camp;
    });
  }
  goToHome() {
    this.navCtrl.pop();
  }
}
