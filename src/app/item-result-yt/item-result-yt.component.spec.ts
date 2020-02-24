import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResultYtComponent } from './item-result-yt.component';

describe('ItemResultYtComponent', () => {
  let component: ItemResultYtComponent;
  let fixture: ComponentFixture<ItemResultYtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemResultYtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResultYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
