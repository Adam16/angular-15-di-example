import { Provider } from '@angular/core';
import { BASE_COMPONENTS } from '.';
import { CmArticle } from './cm-article';
import { CmTeaser } from './cm-teaser';

export const CM_INCLUDES: Provider[] = [
  {
    provide: BASE_COMPONENTS,
    multi: true,
    useClass: CmTeaser,
  },
  {
    provide: BASE_COMPONENTS,
    multi: true,
    useClass: CmArticle,
  },
];
