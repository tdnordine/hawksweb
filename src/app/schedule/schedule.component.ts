import { Component, OnInit } from '@angular/core';
import { ScheduleService, IScheduledGame } from '../services/schedule.service';
import { CurrentdateService } from '../services/currentdate.service';

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

  public games: IGameDisplayItem[] = [];
  public CurrentYear: string;

  public Locations: Map<String, String> = new Map<String, String>();

  constructor(public scheduleservice: ScheduleService, public date_service: CurrentdateService) {
    this.CurrentYear = date_service.getCurrentYear();
    this.Locations.set("f2c2ea14-d1a3-4fe9-a85c-4d1474687266", "John Burch Park, Cannon Falls");
    this.Locations.set("7c8475ea-149e-4140-8ba0-763729d94dd9", "Vets Park, Hastings");
    this.Locations.set("a6652217-5d44-405a-9a94-558aa52f679c", "1st National Field, Northfield");
    this.Locations.set("6b6c0ca1-3270-43a5-9e21-8536e9e18c6c", "Mayo Field, Rochester");
    this.Locations.set("ac4bda50-0972-4b0b-bce6-623f27c6c896", "Hampton");
    this.Locations.set("5e051502-51e8-4f7c-bb02-1897314806e2", "Memorial Park, Dundas");
    this.Locations.set("63babd81-0b59-4524-b624-8e698a87e9dd", "Jack Ruhr Field, Miesville");
    this.Locations.set("97e0a0a8-525a-4cba-8fcb-feb50f16aa71", "The Ath, Red Wing");
    this.Locations.set("d7a1e9f7-ba5f-4c3e-84c0-4924bc327700", "Lake City");
    this.Locations.set("e126ca06-8893-412c-b0e6-243cbdd24fcf", "Wintercrest Park, Coon Rapids");    
    this.Locations.set("de9034e9-7aa1-4c65-bb3d-76221e6853cb", "Mayo Field, Rochester");    
   }

  ngOnInit() {
    this.scheduleservice.getScheduleItems().subscribe(
      data => {
        data.forEach(element => {
          console.log(element);
          this.games.push({
            Date: element.GameDate,
            Location: element.Location === null ? this.Locations.get(element.HomeTeamId) : element.Location,
            Opponent: element.HomeTeamId === '7c8475ea-149e-4140-8ba0-763729d94dd9' ? element.VisitingTeamName : element.HomeTeamName
          });
        });
        console.log(this.games);
      }
    );
  }

}
