import { Component, OnInit } from '@angular/core';
import {data as productData} from  "../stock/productData"
import {ActivatedRoute} from "@angular/router";
import {Product} from "../stock/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  stock = productData;
  id : number;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
  }

  ngOnInit(): void {
  }

}
