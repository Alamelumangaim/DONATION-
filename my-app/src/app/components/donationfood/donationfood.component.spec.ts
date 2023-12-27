import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationfoodComponent } from './donationfood.component';

describe('DonationfoodComponent', () => {
  let component: DonationfoodComponent;
  let fixture: ComponentFixture<DonationfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
