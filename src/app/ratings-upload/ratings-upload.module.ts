import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RatingsUploadComponent } from './ratings-upload.component';

@NgModule({
  declarations: [
    RatingsUploadComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'ratingsUpload', component: RatingsUploadComponent },
    ]),
    SharedModule
  ]
})
export class RatingsUploadModule { }
