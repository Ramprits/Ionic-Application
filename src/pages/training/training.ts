import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { TrainingProvider } from "../../providers/training/training";
import { HomePage } from "../home/home";
import { TrainingDetailPage } from '../training-detail/training-detail';

@Component({
  selector: "page-training",
  templateUrl: "training.html"
})
export class TrainingPage {
  trainings = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private trainingService: TrainingProvider
  ) {
    for (let i = 0; i < 30; i++) {
      this.trainings.push(this.trainings.length);
    }
  }

  ionViewDidLoad() {
    this.trainingService
      .getTrainings()
      .subscribe((response) => { this.trainings = response; }, (error) => console.log(error), () => console.log("loaded sucessfully"));
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.trainings.push(this.trainings.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  itemSelected(traning) {
    this.navCtrl.push(TrainingDetailPage, {
      selectedTraining: traning
    })
  }
}
