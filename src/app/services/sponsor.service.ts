import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Sponsor {
  id: string;
  title: string;
  newsdate: string;
  byline: string;
  article: string;
}

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(public http: HttpClient) { }

  public getSponsors() {
    return this.http.get<Sponsor[]>('assets/data/sponsors.php');
  }

}
