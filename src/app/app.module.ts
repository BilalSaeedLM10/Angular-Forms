import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
 import { NZ_I18N, en_US } from 'ng-zorro-antd';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
