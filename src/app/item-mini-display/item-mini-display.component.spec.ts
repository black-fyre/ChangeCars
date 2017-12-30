import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemMiniDisplayComponent} from './item-mini-display.component';

describe('ItemMiniDisplayComponent', () => {
  let component: ItemMiniDisplayComponent;
  let fixture: ComponentFixture<ItemMiniDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMiniDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMiniDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
