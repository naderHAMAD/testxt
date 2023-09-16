import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeViewComponent } from './member-type-view.component';

describe('MemberTypeViewComponent', () => {
  let component: MemberTypeViewComponent;
  let fixture: ComponentFixture<MemberTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
