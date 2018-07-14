import { Component, OnInit } from '@angular/core';
import { RosterService, IRosterPlayer } from '../services/roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  public CurrentYear: string;
  public players: IRosterPlayer[] = [];

  constructor(public roster_service: RosterService) {
    this.CurrentYear = '2018';
   }

  ngOnInit() {
    this.roster_service.getRosterItems().subscribe(
      roster => {
        this.players = roster;
      }
    );
  }

}
