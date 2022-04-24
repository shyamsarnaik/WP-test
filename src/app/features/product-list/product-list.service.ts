import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/models/product.model";


@Injectable() 

export class ProductListService {

    favouriteProducts: Product[] = [];
    favouriteProductsSubject: Subject<any> = new Subject();
    constructor(private http: HttpClient){}

    getProducts() {
        return this.http.get('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json');
    }

    updateFavouriteProducts(){
        this.favouriteProductsSubject.next(this.favouriteProducts);
    }

    getFavouriteProducts(): Observable<any> {
        return this.favouriteProductsSubject.asObservable();
    }


}