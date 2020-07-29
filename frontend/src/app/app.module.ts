import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent, NotFoundComponent } from './_components';
import { AlertService, ApiService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		HttpClientModule
  ],
  providers: [
	  AlertService, 
		ApiService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
