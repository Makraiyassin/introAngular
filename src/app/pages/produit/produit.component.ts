import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {data} from "../../stock/productData";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwicm9sZXMiOlsiUk9MRV9QRVJTT05ORUwiXSwiZXhwIjoxNjYxMzQzNTQxfQ.hcu3u1ct8OQaiJe43aEjTCZG2CDNz1k6io1svu9KRUF3bB5AcqaEfn51u-5T94YbMEQuWwdRL2-eiIBT9N2grA";
    const params = new HttpHeaders().append("authorization",`Bearer ${token}`)
    this._http.get("'https://exo-nursery.herokuapp.com/tuteur/all'", {headers: params}).subscribe(data=>console.log(data))
  }

}
