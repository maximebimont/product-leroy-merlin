import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { PagesRoutingModule } from './pages-rooting.module';

const MODULES = [
  PagesRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule
];

const COMPONENTS = [
  HomeComponent,
  ListComponent,
  InsertComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: []
})
export class PagesModule { }
