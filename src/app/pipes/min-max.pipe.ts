import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../stock/product";

@Pipe({
  name: 'minMax',
})
export class MinMaxPipe implements PipeTransform {

  transform(value: Product[], min : number,  max: number): Product[ ] {
    return value.filter(p =>  p.price >= min && p.price<= max);
  }

}
