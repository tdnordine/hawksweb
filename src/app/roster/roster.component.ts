import { Component, OnInit } from '@angular/core';
import { RosterService, IRosterPlayer } from '../services/roster.service';
import { CurrentdateService } from '../services/currentdate.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  public CurrentYear: string;
  public players: IRosterPlayer[] = [];

  constructor(public roster_service: RosterService, public date_service: CurrentdateService) {
    this.CurrentYear = date_service.getCurrentYear();
   }

  ngOnInit() {
    this.roster_service.getRosterItems().subscribe(
      roster => {
        this.players = roster;
      }
    );
  }

}
