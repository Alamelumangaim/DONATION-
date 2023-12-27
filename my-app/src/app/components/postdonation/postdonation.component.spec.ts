import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdonationComponent } from './postdonation.component';

describe('PostdonationComponent', () => {
  let component: PostdonationComponent;
  let fixture: ComponentFixture<PostdonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostdonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
