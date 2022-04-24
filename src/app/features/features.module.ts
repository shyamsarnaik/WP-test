import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductListService } from './product-list/product-list.service';
import { MaterialModule } from '../material.module';
import { favouriteProductDialogComponent } from './favourite-product-dialog/favourite-product-dialog.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent,
    favouriteProductDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [ProductListService]
})
export class FeaturesModule { }
