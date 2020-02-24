import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEntryOutput = new EventEmitter();
  @Input() indexName;
  searchEntry: any;
  getIndex = this.indexName;
  getData: string;
  indez: number;

  searchData = {
    index: this.getIndex,
    data: this.searchEntry
  };

  constructor() {
  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    this.searchData.index = this.indexName;
    this.searchData.data = form.value.searchBox.searchEntry;
    this.searchEntryOutput.emit(this.searchData);
    this.getData = this.searchData.data;
    this.indez = this.searchData.index;
  }
}
