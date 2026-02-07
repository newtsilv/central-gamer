import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachInput } from './seach-input';

describe('SeachInput', () => {
  let component: SeachInput;
  let fixture: ComponentFixture<SeachInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeachInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
