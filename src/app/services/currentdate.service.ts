import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentdateService {

  constructor() { }

  public getCurrentYear() {
    return '2019';
  }
}
