import { Injectable } from '@angular/core';
import { BaseComponent, BaseComponentTypes } from '.';

import { TeaserComponent } from './components';

@Injectable({
  providedIn: 'root',
  useFactory: () => new CmTeaser(),
  deps: [TeaserComponent],
})
export class CmTeaser implements BaseComponent {
  get viewType() {
    return 'Teaser';
  }

  get documentType(): BaseComponentTypes {
    return 'static';
  }

  get metadata() {
    return 'teaser';
  }

  component = TeaserComponent;
}
