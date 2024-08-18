import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";

const MODULES: Type<unknown>[] = [
  MaterialModule,
  RouterModule,
  CommonModule
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule { }