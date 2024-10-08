import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

const MODULES = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  SharedModule,
  PagesModule,
  CoreModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [MODULES],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
