import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from './modules/material-module';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
