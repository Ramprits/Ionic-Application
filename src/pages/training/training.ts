import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TrainingProvider } from "../../providers/training/training";
import { HomePage } from "../home/home";

@Component({
  selector: "page-training",
  templateUrl: "training.html"
})
export class TrainingPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private trainingService: TrainingProvider
  ) {}

  ionViewDidLoad() {
    this.trainingService
      .getTrainings()
      .subscribe(response => console.log(response));
    console.log("ionViewDidLoad TrainingPage");
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
