import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boardmember',
  templateUrl: './boardmember.component.html',
  styleUrls: ['./boardmember.component.scss']
})
export class BoardmemberComponent implements OnInit {

  @Input() public member: any;

  constructor() { }

  ngOnInit() {
  }

}
