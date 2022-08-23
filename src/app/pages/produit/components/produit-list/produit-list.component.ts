import { Component, OnInit } from '@angular/core';
import { data as stock } from "../../../../stock/productData"

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  stock = stock;
  constructor() { }

  ngOnInit(): void {
  }

  buy() {

  }
}
