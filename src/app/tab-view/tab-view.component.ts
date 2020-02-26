import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoogleApiService} from '../services/google-api.service';
import {YoutubeApiService} from '../services/youtube-api.service';
import {ListYTItem} from '../interfaces/list-ytitem';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {
  @Output() titleTabOutput = new EventEmitter();
  @Input() index: number;
  @Input() data: string;
  @Input() listItems;
  @Input() listYTItems;

  entryIndex = this.index;
  statusGS = true;
  statusYTS = false;

  constructor(private googleApi: GoogleApiService, private YTApi: YoutubeApiService) {
  }

  ngOnInit() {
  }


  toggleGS() {
    this.statusGS = true;
    this.statusYTS = false;
  }

  toggleYTS() {
    this.statusGS = false;
    this.statusYTS = true;
  }

  getSearchEntry(event) {
    this.titleTabOutput.emit(event);
    this.data = event.data;

    this.googleApi.getResults(event.data)
      .subscribe((data: any) => {
        this.listItems = data;
      });

    this.YTApi.getResults(event.data)
      .subscribe((data: Array<ListYTItem>) => {
        if (data.length !== 0 ) {
          this.listYTItems = data;
        } else {
          this.listYTItems = 'no result';
        }
      });
  }

}
