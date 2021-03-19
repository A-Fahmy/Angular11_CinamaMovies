import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRowRolesListComponent } from './edit-row-roles-list.component';

describe('EditRowRolesListComponent', () => {
  let component: EditRowRolesListComponent;
  let fixture: ComponentFixture<EditRowRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRowRolesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRowRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
