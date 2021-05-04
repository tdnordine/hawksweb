import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardmemberComponent } from 'app/boardmember/boardmember.component';
import { removeSummaryDuplicates } from '@angular/compiler';

export interface BoardMember {
  id: string;
  title: string;
  name: string;
  emailaddr: string;
  termexpiration: string;
  image: string;
  shorttitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(public http: HttpClient) { }

  public getBoardMembers() : Observable<BoardMember[]>
  {
    return this.http.get<BoardMember[]>('assets/data/board.php');

    // return new Observable<BoardMember[]>((observer) => {

    //   observer.next([
    //     {
    //       id: '1',
    //       title: 'President',
    //       name: 'Bruce Karnick',
    //       emailaddr: 'president@hastingshawks.com',
    //       termexpiration: '2019-10-31',
    //       image: 'Shaun.jpg',
    //       shorttitle: 'pres'
    //     },
    //     {
    //       id: '2',
    //       title: 'Vice President',
    //       name: 'Troy Nordine',
    //       emailaddr: 'vicepresident@hastingshawks.com',
    //       termexpiration: '2019-10-31',
    //       image: 'hawks-medallion.png',
    //       shorttitle: 'vp'
    //     },
    //     {
    //       id: '3',
    //       title: 'Treasurer',
    //       name: 'Derek Simon',
    //       emailaddr: 'treasurer@hastingshawks.com',
    //       termexpiration: '2020-10-31',
    //       image: 'hawks-medallion.png',
    //       shorttitle: 'treas'
    //     },
    //     {
    //       id: '4',
    //       title: 'Secretary',
    //       name: 'Kathy Karnick',
    //       emailaddr: 'secretary@hastingshawks.com',
    //       termexpiration: '2019-10-31',
    //       image: 'hawks-medallion.png',
    //       shorttitle: 'sec'
    //     }

    //   ]);
    //   observer.complete();

    //   return {unsubscribe() {}};
    // });

  }
}
