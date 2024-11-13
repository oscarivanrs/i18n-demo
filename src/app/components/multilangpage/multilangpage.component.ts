import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-multilangpage',
  templateUrl: './multilangpage.component.html',
  styleUrl: './multilangpage.component.css',
})
export class MultilangpageComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en-UK');
  }
}
