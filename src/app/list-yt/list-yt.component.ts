import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-yt',
  templateUrl: './list-yt.component.html',
  styleUrls: ['./list-yt.component.scss']
})
export class ListYtComponent implements OnInit {
  @Input() YTData;
  constructor() { }

  ngOnInit() {
  }

}
