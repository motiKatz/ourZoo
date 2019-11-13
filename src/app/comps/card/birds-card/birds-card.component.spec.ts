import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsCardComponent } from './birds-card.component';

describe('BirdsCardComponent', () => {
  let component: BirdsCardComponent;
  let fixture: ComponentFixture<BirdsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
