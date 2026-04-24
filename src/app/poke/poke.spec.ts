import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poke } from './poke';

describe('Poke', () => {
  let component: Poke;
  let fixture: ComponentFixture<Poke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poke],
    }).compileComponents();

    fixture = TestBed.createComponent(Poke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
