import {
  Component,
  Inject,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BaseComponent, BASE_COMPONENTS } from '..';
import { CmArticle } from '../cm-article';
import { CmTeaser } from '../cm-teaser';

@Component({
  selector: 'include',
  template: '<ng-container #content></ng-container>',
  standalone: true,
  providers: [
    {
      provide: BASE_COMPONENTS,
      multi: true,
      useFactory: () => new CmTeaser(),
    },
    {
      provide: BASE_COMPONENTS,
      multi: true,
      useFactory: () => new CmArticle(),
    },
  ],
})
export class IncludeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  @Input() viewtype = '';
  @Input() contenttype = '';

  constructor(
    @Inject(BASE_COMPONENTS) private implementations: BaseComponent[]
  ) {}

  async ngOnInit() {
    if (this.viewContainer) {
      this.viewContainer.clear();

      const bc = this.implementations.filter(
        (el) => el.viewType.toLowerCase() === this.viewtype.toLowerCase()
      );

      if (bc.length) {
        const cm = bc[0] as any;
        let component: Type<any>;

        if (cm.documentType() === 'lazy') {
          component = await cm.component;
        } else {
          component = cm.component;
        }

        console.log(component);

        this.viewContainer.createComponent(component);
      }
    }
  }
}
