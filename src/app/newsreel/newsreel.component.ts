import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsreel',
  templateUrl: './newsreel.component.html',
  styleUrls: ['./newsreel.component.css']
})
export class NewsreelComponent implements OnInit {

  @Input() stories: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.stories);
  }

}
