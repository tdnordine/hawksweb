import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jerseysorter'
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: string, b: string) => {
      const aint = parseInt(a[args], 10);
      const bint = parseInt(b[args], 10);

    if ( aint < bint ) {
      return -1;
    } else if ( aint > bint ) {
      return 1;
    } else {
      return 0;
    }
    });
    return array;
  }
}
