import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, concatMap, toArray, skip, take } from 'rxjs/operators';

export interface NewsItem {
  id: string;
  title: string;
  newsdate: string;
  byline: string;
  article: string;
}


@Injectable()
export class NewsService {

  constructor(public http: HttpClient) { }

  public getNewsItems(count?: number, page?: number) {
    const localCount = count ? count : 8;
    const localPage = page ? page : 1;

    return this.http.get<NewsItem[]>('assets/data/news.php')
      .pipe(
        mergeMap(items => items),
        skip(localCount * (localPage - 1)),
        take(localCount),
        concatMap(storyref => this.http.get(
          'assets/data/news.php?id=' + storyref.id)),
        toArray());

  }
}
