import { NgModule, Type } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const MODULES: Type<unknown>[] = [
    SharedModule,
    RouterModule,
];

@NgModule({
    declarations: [],
    imports: [MODULES],
    exports: [MODULES],
})
export class CoreModule { }