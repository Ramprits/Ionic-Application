import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TrainingProvider } from "../../providers/training/training";
import { HomePage } from "../home/home";
import { TrainingDetailPage } from '../training-detail/training-detail';
import { pageAnimation } from "../../shared/core/public-data";

@Component({
  selector: "page-training",
  templateUrl: "training.html",
  animations: [pageAnimation]
})
export class TrainingPage {
  trainings = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private trainingService: TrainingProvider
  ) {

  }

  ionViewDidLoad() {
    this.trainingService
      .getTrainings()
      .subscribe((response) => { this.trainings = response; }, (error) => console.log(error), () => console.log("loaded sucessfully"));
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }


  itemSelected(traning) {
    this.navCtrl.push(TrainingDetailPage, {
      selectedTraining: traning
    })
  }
}
