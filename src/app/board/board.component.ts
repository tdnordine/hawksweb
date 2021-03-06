import { Component, OnInit, HostListener } from '@angular/core';
import { ColumnsortService } from 'app/services/columnsort.service';
import { SortPipe } from 'app/utilities/sort.pipe';
import { Observable } from 'rxjs';
import { BoardMember, BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public boardmembers: BoardMember[];
  public columns: number;


  constructor(public boardservice: BoardService, public column_sorter: ColumnsortService<BoardMember>) { }

  ngOnInit() {
    this.columns = this.calculatedColumns(window.innerWidth);

    this.getBoardMembersInternal(this.columns).subscribe(
      data => {
        this.boardmembers = data;
      }
    );
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    let newcol = this.calculatedColumns(window.innerWidth);
    if (this.columns === newcol)
    {
      return;
    }

    this.columns = newcol;
    this.getBoardMembersInternal(this.columns).subscribe(
      data => {
        this.boardmembers = data;
      });
  }

  private calculatedColumns(size: number) : number
  {
    return 1 + (size > 995 ? 1 : 0);
  }

  private getBoardMembersInternal(col: number): Observable<BoardMember[]>
  {
    return new Observable((observer) => {
      let column_sorter: ColumnsortService<BoardMember> = this.column_sorter;
      this.boardservice.getBoardMembers().subscribe({
        next(boardmembers) {
          let results: BoardMember[] = column_sorter.sort(col, boardmembers); 
          observer.next(results);
          // if (col === 1)
          // {
          //   observer.next(boardmembers);
          //   return;
          // }

          // let odds: BoardMember[] = [];
          // let results: BoardMember[] = [];
          // boardmembers.forEach((member, idx) => {Number(idx) % 2 === 0 ? results.push(member) : odds.push(member);});
          // odds.forEach((member) => results.push(member));          
          // observer.next(results);
        }
      });
    })

  }
}
