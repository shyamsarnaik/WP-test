import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductListService } from '../product-list/product-list.service';


@Component({
  selector: 'favourite-product-dialog',
  templateUrl: './favourite-product-dialog.component.html',
  styleUrls: ['./favourite-product-dialog.component.scss']
})
export class favouriteProductDialogComponent implements OnInit {
  products: any[] = [];

  constructor(private productListService: ProductListService) {

  }

  ngOnInit(): void {
    this.products = this.productListService.favouriteProducts;
    this.productListService.getFavouriteProducts().subscribe((p: Product[]) => {
      this.products = p;
    });
  }
}
