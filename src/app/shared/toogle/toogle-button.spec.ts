import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleButton } from './toogle-button';

describe('ToogleButton', () => {
  let component: ToogleButton;
  let fixture: ComponentFixture<ToogleButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToogleButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToogleButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
