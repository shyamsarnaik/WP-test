import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() products: Product[] = [];
  @Input() componentType: string = '';
  currency = 'EUR';
  serachText = '';
  allProducts: Product[] = [];
  sortOptions = ['Title', 'Description', 'Price', 'Email']
  numberOfrecordsToload: number = 5;
  tooltip: string = ''

  constructor(private productListService: ProductListService) { }
  
  ngOnInit(): void {
      this.tooltip = this.componentType === 'products' ? 'Add Favourite ' : 'Remove Favourite';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.allProducts = Object.assign([], changes['products'].currentValue);
    if (this.allProducts.length) this.loadMore();
  }

  addRemovefavourite(product: Product, i: number) {
    const isproductExist = this.isproductfavourite(product);
    if (isproductExist) {
      this.removeFav(isproductExist);
    } else {
      this.addFav(i);
    }
  }

  removeFav(isproductExist: Product) {
    const p = JSON.stringify(isproductExist);
    this.productListService.favouriteProducts = this.productListService.favouriteProducts.filter(o => JSON.stringify(o) !== p);
    this.productListService.updateFavouriteProducts();
  }

  addFav(i: number) {
    this.productListService.favouriteProducts.push(this.products[i]);
    this.productListService.updateFavouriteProducts();
  }

  isproductfavourite(product: Product) {
    const p = JSON.stringify(product);
    return this.productListService.favouriteProducts.find(o => JSON.stringify(o) === p);
  }

  loadMore() {
    const products = Object.assign([], this.allProducts);
    let p = products.splice(0, this.numberOfrecordsToload)
    this.products = p;
    this.numberOfrecordsToload = this.numberOfrecordsToload + 5;
  }

  searchProduct(value: string) {
    this.products = Object.assign([], this.allProducts);
    this.products = Object.assign([], this.products).filter(
      (item: Product) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  onSortChange(e: string) {
    if (e === 'Price') {
      this.products.sort(this.numberSort(e.toLowerCase()));
    } else {
      this.products.sort(this.stringSort(e.toLowerCase()));
    }
  }

  numberSort = (sortBy: any) => (a: any, b: any) => a[sortBy] - b[sortBy];
  stringSort = (sortBy: any) => (a: any, b: any) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
}
