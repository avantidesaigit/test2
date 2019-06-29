import { MatButtonModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  exports: [MatButtonModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatInputModule]
})
 
export class AngMaterialModule {
  
}
