import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  currency = 'EUR';
  serachText = '';

  constructor(private productListService: ProductListService) {

  }

  ngOnInit(): void {
    this.productListService.getProducts().subscribe((res: any) => {
      console.log(res.items);
      this.products = res.items.map((o: any) => {
        o.favourite = false;
        return o;
      });
    }, err => console.log(err))
  }

  addRemovefavourite(product: any, i: number) {
    const isproductExist = this.isproductfav(product);
    if (isproductExist) {
      this.removeFav(isproductExist);
    } else {
      this.addFav(isproductExist, i);
    }
    this.products[i].favourite = !this.products[i].favourite;
    console.log(this.productListService.favouriteProducts);
  }

  removeFav(isproductExist: any) {
    const p = JSON.stringify(isproductExist);
    
    this.productListService.favouriteProducts = this.productListService.favouriteProducts.filter(o => JSON.stringify(o) === p);
  }

  addFav(isproductExist: any, i: number) {
    if (!isproductExist)
      this.productListService.favouriteProducts.push(this.products[i]);
  }

  isproductfav(product: any) {
    const p = JSON.stringify(product);
    return this.productListService.favouriteProducts.find(o => JSON.stringify(o) === p);
  }
}
