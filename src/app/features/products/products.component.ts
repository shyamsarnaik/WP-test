import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productListService: ProductListService) {
  }

  ngOnInit(): void {
    this.productListService.getProducts().subscribe((res: any) => {
      this.products = res.items;
    }, err => console.log(err))
  }

}
