import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public stories: any[];

  constructor(public newsservice: NewsService) { }

  ngOnInit() {
    this.newsservice.getNewsItems(20).subscribe(
      data => {
        this.stories = data;
      }
    );
  }

}
