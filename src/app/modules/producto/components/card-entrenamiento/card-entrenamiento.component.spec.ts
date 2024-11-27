import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntrenamientoComponent } from './card-entrenamiento.component';

describe('CardEntrenamientoComponent', () => {
  let component: CardEntrenamientoComponent;
  let fixture: ComponentFixture<CardEntrenamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEntrenamientoComponent]
    });
    fixture = TestBed.createComponent(CardEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
