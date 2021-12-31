import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZipcodeTableComponent } from './zipcode-table/zipcode-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    ZipcodeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
