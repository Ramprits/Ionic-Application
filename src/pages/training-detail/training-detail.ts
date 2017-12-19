import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { pageAnimation } from '../../shared/core/public-data';

@Component({
  selector: 'page-training-detail',
  templateUrl: 'training-detail.html',
  animations: [pageAnimation]
})
export class TrainingDetailPage {
  selectedTraining = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedTraining = this.navParams.get("selectedTraining");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingDetailPage');
  }

}
