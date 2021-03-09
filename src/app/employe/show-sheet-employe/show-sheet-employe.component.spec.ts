import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSheetEmployeComponent } from './show-sheet-employe.component';

describe('ShowSheetEmployeComponent', () => {
  let component: ShowSheetEmployeComponent;
  let fixture: ComponentFixture<ShowSheetEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSheetEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSheetEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
