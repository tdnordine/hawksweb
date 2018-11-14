import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public boardmembers: any[];
  constructor(public boardservice: BoardService) { }

  ngOnInit() {
    this.boardservice.getBoardMembers().subscribe(
      data => {
        this.boardmembers = data;
      }
    );
  }

}
