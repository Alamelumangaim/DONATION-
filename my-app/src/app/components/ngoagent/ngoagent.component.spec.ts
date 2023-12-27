import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoagentComponent } from './ngoagent.component';

describe('NgoagentComponent', () => {
  let component: NgoagentComponent;
  let fixture: ComponentFixture<NgoagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgoagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgoagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
