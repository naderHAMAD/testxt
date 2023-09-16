import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeUpdateComponent } from './member-type-update.component';

describe('MemberTypeUpdateComponent', () => {
  let component: MemberTypeUpdateComponent;
  let fixture: ComponentFixture<MemberTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
