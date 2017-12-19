import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-filter-model",
  templateUrl: "filter-model.html"
})
export class FilterModelPage {
  public selectedFemale = true;
  public selectedMale = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad FilterModelPage");
  }
  goToHome() {
    this.navCtrl.pop();
  }
}
