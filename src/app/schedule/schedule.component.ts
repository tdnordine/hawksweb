import { Component, OnInit } from '@angular/core';
import { ScheduleService, IScheduledGame } from '../services/schedule.service';

interface IGameDisplayItem {
  Date: String;
  Opponent: String;
  Location: String;
}


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  private games: IGameDisplayItem[] = [];

  constructor(public scheduleservice: ScheduleService) { }

  ngOnInit() {
    this.scheduleservice.getScheduleItems().subscribe(
      data => {
        data.forEach(element => {
          console.log(element);
          this.games.push({
            Date: element.GameDate,
            Location: element.Location,
            Opponent: element.HomeTeamId === '7c8475ea-149e-4140-8ba0-763729d94dd9' ? element.VisitingTeamName : element.HomeTeamName
          });
        });
        console.log(this.games);
      }
    );
  }

}
