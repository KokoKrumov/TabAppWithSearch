import { Type } from '@angular/core';

export class Tab {
  public title: string;
  public data: any;
  public component: Type<any>;

  constructor(component: Type<any>, title: string, tabData: any) {
    this.title = title;
    this.data = tabData;
  }
}
