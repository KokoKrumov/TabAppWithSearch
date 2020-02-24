import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResultComponent } from './item-result.component';

describe('ItemResultComponent', () => {
  let component: ItemResultComponent;
  let fixture: ComponentFixture<ItemResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
