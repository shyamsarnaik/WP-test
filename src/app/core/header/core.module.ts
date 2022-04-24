import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/material.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
