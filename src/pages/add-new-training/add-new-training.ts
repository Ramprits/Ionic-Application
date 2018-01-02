import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewTrainingProvider } from '../../providers/new-training/new-training';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTrainingPage } from '../new-training/new-training';

@IonicPage()
@Component({
  selector: 'page-add-new-training',
  templateUrl: 'add-new-training.html',
})
export class AddNewTrainingPage {
  technologies: any[];
  private NewForm: FormGroup;
  public msg = "";
  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private newTrainingServices: NewTrainingProvider) {
    this.newTrainingServices.getTechnologies().subscribe((tech) => { this.technologies = tech });
    this.NewForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", Validators.required],
      duration: [""],
      Selectedtechnology: [""]
    });
  }
  save(newTraining) {
    this.newTrainingServices.addNewTraining(newTraining).subscribe((newTraining) => {
      this.navCtrl.setRoot(NewTrainingPage);
      return newTraining;
    }, (error) => { console.error(error) });
  }

}
