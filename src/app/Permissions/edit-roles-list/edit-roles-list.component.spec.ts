import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolesListComponent } from './edit-roles-list.component';

describe('EditRolesListComponent', () => {
  let component: EditRolesListComponent;
  let fixture: ComponentFixture<EditRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
