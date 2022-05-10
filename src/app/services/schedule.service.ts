import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocaleDayNames } from '@angular/common';

export interface IScheduledGame {
  Description: string;
  GameDate: string;
  GameId: string;
  HomeTeamId: string;
  HomeTeamName: string;
  Location: string;
  Title: string;
  VisitingTeamId: string;
  VisitingTeamName: string;
  NumberOfInnings: string;
}


@Injectable()
export class ScheduleService {

  constructor(public http: HttpClient) { }

  public getScheduleItems() {
    return this.http.post<IScheduledGame[]>(
      'https://api.scoremonster.com/game',
      'password=tori1reno&userName=tdnordine@gmail.com', {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      });
  }
}
