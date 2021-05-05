import { analyzeAndValidateNgModules, preserveWhitespacesDefault } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnsortService<T> {

  constructor() {
   }

   public sort(col: number, items: T[] ): T[]
   {
     if (col === 1) {
       return items;
     }

     let store: T[][] = new Array();
     
     items.forEach((item, index) => {
      let slot = Number(index) % col;
      if (store.length <= slot)
      {
        store.push(new Array());
      }

      store[slot].push(item);
     });

     return store.reduce((prev, current, idx, full) => {
      return prev.concat(current); 
     });
    
   }
}
