import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher-component',
  templateUrl: './language-switcher-component.component.html',
  styleUrl: './language-switcher-component.component.css'
})
export class LanguageSwitcherComponentComponent {
  constructor(private translate: TranslateService) {}

  changeLanguage(locale: string) {
    this.translate.use(locale);
  }
}
