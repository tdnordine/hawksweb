import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, concatMap, toArray } from 'rxjs/operators';

export interface NewsRef {
  title: string;
  uri: string;
}

export class NewsItem {
  public title: string;
  public text: string;

  constructor(Title: string, Text: string) {
    this.title = Title;
    this.text = Text;
  }
}

@Injectable()
export class NewsService {

  constructor(public http: HttpClient) { }

  public getNewsItems() {

    return this.http.get<NewsRef[]>('assets/data/newsstories.txt')
      .pipe(
        mergeMap(items => items),
        concatMap(storyref => this.http.get(
          'assets/data/' + storyref.uri, {responseType: 'text'}),
            (newsref, data) => new NewsItem(newsref.title, data)),
        toArray());

  }
}
