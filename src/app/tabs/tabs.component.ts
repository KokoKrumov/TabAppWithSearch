import {Component, Input, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs = [{title: 'New Tab', data: ''}];
  selected = new FormControl(0);
  counter = 1;
  tabName: string;
  @Input() index;
  evenData: string;

  ngOnInit() {

  }

  sliceTabNames(name) {
      if (name.length > 10) {
        return name.slice(0, 10) + '...';
      } else {
        return name;
      }
  }

  addTab() {
    this.tabs.push({title: 'New Tab', data: ''});
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(this.tabs.length - 1);
  }

  getSearchData(event) {
    this.evenData = event.data;
    this.tabs[event.index].data = event.data;
    this.tabs[event.index].title =  this.sliceTabNames(event.data);
  }

}
