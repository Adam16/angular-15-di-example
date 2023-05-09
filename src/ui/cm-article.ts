import { Injectable } from '@angular/core';
import { BaseComponent, BaseComponentTypes } from '.';

@Injectable({
  providedIn: 'root',
  useFactory: () => new CmArticle(),
})
export class CmArticle implements BaseComponent {
  get viewType() {
    return 'Article';
  }

  get documentType(): BaseComponentTypes {
    return 'lazy';
  }

  get metadata() {
    return 'article';
  }

  component = import('./components/article.component').then(
    (m) => m.ArticleComponent
  );
}
