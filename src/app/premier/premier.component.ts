import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {
  get random(): number {

    return this._random;
  }

  set random(value: number) {
    this._random = value
    this._pathImage =  `https://picsum.photos/id/${this._random}/150/100`
  }

  get pathImage(): string {
    return this._pathImage;
  }

  get fontWeight(): string {
    return this._random % 2  == 0 ? 'normal' : 'bold'
  }
  
  private _random : number = Math.floor(Math.random()*1026)
  private _pathImage: string = `https://picsum.photos/id/${this._random}/150/100`

  data : {
      title: string,
      description: string
    } = {
      title : "titre",
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi deserunt dolor dolores ducimus eaque, eligendi eos exercitationem id labore libero magnam minima mollitia nemo provident, reiciendis sit ut voluptates!",
    }
    
  array = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

  showAlerte(): void {
    alert("Hello World")
  }

}
