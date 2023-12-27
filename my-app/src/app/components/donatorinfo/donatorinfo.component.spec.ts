import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorinfoComponent } from './donatorinfo.component';

describe('DonatorinfoComponent', () => {
  let component: DonatorinfoComponent;
  let fixture: ComponentFixture<DonatorinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatorinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonatorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
