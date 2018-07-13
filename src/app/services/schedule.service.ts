import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IScheduledGame {
  Description: String,
  GameDate: String,
GameId: String,
HomeTeamId: String,
HomeTeamName: String,
Location: String,
Title: String,
VisitingTeamId: String,
VisitingTeamName: String,
NumberOfInnings: String
}


@Injectable()
export class ScheduleService {

  constructor(public http: HttpClient) { }

  public getScheduleItems() {
    return this.http.post<IScheduledGame[]>(
      'http://api.scoremonster.com/game',
      'password=tori1reno&userName=tdnordine@gmail.com', {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      });
  }
}
