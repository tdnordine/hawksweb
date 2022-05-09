import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesorter'
})
export class DateSortPipe implements PipeTransform {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: string, b: string) => {
      const adate = a[args];
      const bdate = b[args];

      return adate.localeCompare(bdate);
    });
    return array;
  }
}
