import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavbarComponent } from './header-navbar.component';

describe('HeaderNavbarComponent', () => {
  let component: HeaderNavbarComponent;
  let fixture: ComponentFixture<HeaderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
