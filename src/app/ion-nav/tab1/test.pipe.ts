import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TotalA'
})
export class TestPipe implements PipeTransform {

  transform(valueA, valueB): any {
    console.log('hello from pipe', valueA, valueB);
    let total;
    return total;
  }

}
