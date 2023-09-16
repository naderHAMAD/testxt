import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeAddComponent } from './member-type-add.component';

describe('MemberTypeAddComponent', () => {
  let component: MemberTypeAddComponent;
  let fixture: ComponentFixture<MemberTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
