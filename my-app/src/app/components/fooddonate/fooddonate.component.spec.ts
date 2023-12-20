import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddonateComponent } from './fooddonate.component';

describe('FooddonateComponent', () => {
  let component: FooddonateComponent;
  let fixture: ComponentFixture<FooddonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooddonateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooddonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
