import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/services/news.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public stories: any[];

    model = {
        left: true,
        middle: false,
        right: false
    };

    constructor(public newsservice: NewsService) { }

    ngOnInit() {
        this.newsservice.getNewsItems().subscribe(
            data => {
              this.stories = data.slice(0, 3);
            }
          );
    }
}
