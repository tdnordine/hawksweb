import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IRosterPlayer {
  FirstName: string;
  JerseyNumber1: string;
  JerseyNumber2: string;
  LastName: string;
  MiddleName: string;
  PlayerId: string;
  Position: string;
  BattingLineupPosition: number;
  Bats: string;
  Throws: string;
  Height: string;
  Weight: string;
  Hometown: string;
  ImageURI: string;
}

@Injectable()
export class RosterService {

  constructor(public http: HttpClient) { }

  public getRosterItems() {
    return this.http.post<IRosterPlayer[]>(
      'http://api.scoremonster.com/roster/7c8475ea-149e-4140-8ba0-763729d94dd9',
      'password=tori1reno&userName=tdnordine@gmail.com', {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      });
  }

}
