import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorpwdComponent } from './forgorpwd.component';

describe('ForgorpwdComponent', () => {
  let component: ForgorpwdComponent;
  let fixture: ComponentFixture<ForgorpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgorpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgorpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
