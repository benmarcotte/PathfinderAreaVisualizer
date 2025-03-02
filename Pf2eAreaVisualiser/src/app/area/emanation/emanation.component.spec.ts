import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmanationComponent } from './emanation.component';

describe('EmanationComponent', () => {
  let component: EmanationComponent;
  let fixture: ComponentFixture<EmanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmanationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
