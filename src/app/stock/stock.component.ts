import { Component, OnInit } from '@angular/core';
import {data as productData} from  "./productData"
import {Product} from "./product";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  stock : Product[] = productData;
  onlyAvailable : boolean = false;
  min : number = 0;
  max : number = Math.max(...this.stock.map(e=>e.price));

  ngOnInit(): void {
  }

  buy(product : Product): void{
    // product.quantity > 1 ? product.quantity -- : this.stock.splice(this.stock.indexOf(product),this.stock.indexOf(product)+1);
    if(product.quantity >= 1)  product.quantity --;
  }
}
