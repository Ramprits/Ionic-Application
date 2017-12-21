import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewTrainingPage } from './add-new-training';

@NgModule({
  declarations: [
    AddNewTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewTrainingPage),
  ],
})
export class AddNewTrainingPageModule {}
