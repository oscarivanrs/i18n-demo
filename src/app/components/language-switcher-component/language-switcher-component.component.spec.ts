import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSwitcherComponentComponent } from './language-switcher-component.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageSwitcherComponentComponent', () => {
  let component: LanguageSwitcherComponentComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSwitcherComponentComponent],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LanguageSwitcherComponentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
