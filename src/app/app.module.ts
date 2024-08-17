import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DataLogsComponent } from './data-logs/data-logs.component';
import { NewLogComponent } from './new-log/new-log.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataLogsComponent,
    NewLogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
