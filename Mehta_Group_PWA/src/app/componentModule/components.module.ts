import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
    declarations: [
SpinnerComponent
    ],
    imports: [IonicModule,CommonModule,FormsModule],
    exports: [
        SpinnerComponent
    ]
})

export class ComponentsModule {}