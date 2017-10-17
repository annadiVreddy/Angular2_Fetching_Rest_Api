import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolidaysDataComponent } from './holidaysData/app.holidaysData.component';
import { HolidaysDataService } from './holidaysData/app.holidaysData.service';



@NgModule({
  declarations: [
    AppComponent, HolidaysDataComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [  HolidaysDataService  ],
  bootstrap: [AppComponent,
  HolidaysDataComponent ]
})
export class AppModule { }
