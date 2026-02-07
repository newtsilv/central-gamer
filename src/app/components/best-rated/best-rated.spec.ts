import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRated } from './best-rated';

describe('BestRated', () => {
  let component: BestRated;
  let fixture: ComponentFixture<BestRated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestRated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestRated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
