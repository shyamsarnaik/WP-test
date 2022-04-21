import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './product-list/product-list.service';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductListService]
})
export class FeaturesModule { }
