import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTrainingPage } from './new-training';

@NgModule({
  declarations: [
    NewTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTrainingPage),
  ],
})
export class NewTrainingPageModule {}
