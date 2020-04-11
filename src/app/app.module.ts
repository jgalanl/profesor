import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import { LogInComponent } from './modules/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
