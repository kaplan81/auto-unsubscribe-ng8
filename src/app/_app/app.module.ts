import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbstractModule } from '../abstract/abstract.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './mat.module';
import { WINDOW_PROVIDERS } from './window.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatModule, AbstractModule],
  bootstrap: [AppComponent],
  providers: [WINDOW_PROVIDERS],
})
export class AppModule {}
