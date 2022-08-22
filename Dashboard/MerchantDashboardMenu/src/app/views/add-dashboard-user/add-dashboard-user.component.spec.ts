import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDashboardUserComponent } from './add-dashboard-user.component';

describe('AddDashboardUserComponent', () => {
  let component: AddDashboardUserComponent;
  let fixture: ComponentFixture<AddDashboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDashboardUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
