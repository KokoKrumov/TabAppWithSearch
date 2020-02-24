import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYtComponent } from './list-yt.component';

describe('ListYtComponent', () => {
  let component: ListYtComponent;
  let fixture: ComponentFixture<ListYtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
