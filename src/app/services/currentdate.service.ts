import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CurrentdateService {

  private today: Date;

  constructor() {
    this.today = new Date();
   }

  public getCurrentYear() {
    return this.today.getFullYear().toString();
  }
}
