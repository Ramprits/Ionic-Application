import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NewTrainingProvider } from '../../providers/new-training/new-training';
import { AddNewTrainingPage } from '../add-new-training/add-new-training';
@IonicPage()
@Component({
  selector: 'page-new-training',
  templateUrl: 'new-training.html',
})
export class NewTrainingPage implements OnInit {
  newTrainings: any[];


  constructor(
    private modelController: ModalController,
    private newTrainingService: NewTrainingProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.newTrainingService.getNewTrainings().subscribe((newTraining) => { this.newTrainings = newTraining }, (error) => console.error(error), () => console.log("sucessfully loadded"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTrainingPage');
  }
  openModel() {
    let filter = this.modelController.create(AddNewTrainingPage);
    filter.present();
  }
  selectedTraining(newTraining) { }
}
