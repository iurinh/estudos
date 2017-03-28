import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentaComponent } from './apresenta.component';

describe('ApresentaComponent', () => {
  let component: ApresentaComponent;
  let fixture: ComponentFixture<ApresentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
