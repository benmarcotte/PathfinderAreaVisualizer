import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurstComponent } from './burst.component';

describe('BurstComponent', () => {
  let component: BurstComponent;
  let fixture: ComponentFixture<BurstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
