import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, concatMap, toArray, skip, take } from 'rxjs/operators';

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

  public getNewsItems(count?: number, page?: number) {
    const localCount = count ? count : 8;
    const localPage = page ? page : 1;

    return this.http.get<NewsRef[]>('assets/data/newsstories.txt')
      .pipe(
        mergeMap(items => items),
        skip(localCount * (localPage - 1)),
        take(localCount),
        concatMap(storyref => this.http.get(
          'assets/data/' + storyref.uri, {responseType: 'text'}),
            (newsref, data) => new NewsItem(newsref.title, data)),
        toArray());

  }
}
