import { Component, OnInit } from '@angular/core';
import { RosterService, IRosterPlayer } from '../services/roster.service';

export class Player implements IRosterPlayer {
  public Number: number;
  public FirstName: string;
  public JerseyNumber1: string;
  public JerseyNumber2: string;
  public LastName: string;
  public MiddleName: string;
  public PlayerId: string;
  public Position: string;
  public BattingLineupPosition: number;

  constructor(public player: IRosterPlayer) {
    this.Number = parseInt(player.JerseyNumber1, 10);
    this.FirstName = player.FirstName;
    this.JerseyNumber1 = player.JerseyNumber1;
    this.JerseyNumber2 = player.JerseyNumber2;
    this.LastName = player.LastName;
    this.MiddleName = player.MiddleName;
    this.PlayerId = player.PlayerId;
    this.Position = player.Position;
    this.BattingLineupPosition = player.BattingLineupPosition;
  }

}

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
        this.players = roster.map(function(p) {return new Player(p); } );
      }
    );
  }

}
