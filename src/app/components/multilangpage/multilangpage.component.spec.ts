import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilangpageComponent } from './multilangpage.component';

describe('MultilangpageComponent', () => {
  let component: MultilangpageComponent;
  let fixture: ComponentFixture<MultilangpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultilangpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultilangpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
