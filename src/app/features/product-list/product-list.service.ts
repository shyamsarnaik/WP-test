import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable() 

export class ProductListService {

    favouriteProducts: any[] = [];
    constructor(private http: HttpClient){}

    getProducts() {
        return this.http.get('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json');
    }

    getfavouriteProducts(){
        return this.favouriteProducts;
    }
}