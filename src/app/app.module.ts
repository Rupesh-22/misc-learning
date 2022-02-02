import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoneComponent } from './encaptulation/none/none.component';
import { EmutedComponent } from './encaptulation/emuted/emuted.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActive } from './guards/can-activate';
import { ErrorComponent } from './common/error/error.component';
import { CanDeActive } from './guards/can-deactivate';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MyLibModule } from 'my-lib-r-v1';


@NgModule({
  declarations: [
    AppComponent,
    NoneComponent,
    EmutedComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyLibModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
