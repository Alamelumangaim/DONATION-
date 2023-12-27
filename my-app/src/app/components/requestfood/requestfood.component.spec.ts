import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestfoodComponent } from './requestfood.component';

describe('RequestfoodComponent', () => {
  let component: RequestfoodComponent;
  let fixture: ComponentFixture<RequestfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
