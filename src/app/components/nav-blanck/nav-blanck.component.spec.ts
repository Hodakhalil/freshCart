import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlanckComponent } from './nav-blanck.component';

describe('NavBlanckComponent', () => {
  let component: NavBlanckComponent;
  let fixture: ComponentFixture<NavBlanckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBlanckComponent]
    });
    fixture = TestBed.createComponent(NavBlanckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
