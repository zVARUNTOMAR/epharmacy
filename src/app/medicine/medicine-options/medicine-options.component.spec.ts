import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineOptionsComponent } from './medicine-options.component';

describe('MedicineOptionsComponent', () => {
  let component: MedicineOptionsComponent;
  let fixture: ComponentFixture<MedicineOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
