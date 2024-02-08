import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilanthroshoppingComponent } from './philanthroshopping.component';

describe('PhilanthroshoppingComponent', () => {
  let component: PhilanthroshoppingComponent;
  let fixture: ComponentFixture<PhilanthroshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilanthroshoppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhilanthroshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
