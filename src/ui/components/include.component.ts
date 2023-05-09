import { Component, Inject, Input, OnInit } from '@angular/core';
import { ComponentPortal, Portal, PortalModule } from '@angular/cdk/portal';
import { BaseComponent, BASE_COMPONENTS } from '..';
import { CM_INCLUDES } from '../includes.provider';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'include',
  template: `<ng-template [cdkPortalOutlet]="contentPortal">
  loading...</ng-template>`,
  standalone: true,
  providers: CM_INCLUDES,
  imports: [CommonModule, PortalModule],
})
export class IncludeComponent implements OnInit {
  contentPortal!: Portal<any>;

  @Input() viewtype = '';
  @Input() contenttype = '';

  constructor(
    @Inject(BASE_COMPONENTS) private implementations: BaseComponent[]
  ) {}

  async ngOnInit() {
    const bc = this.implementations.filter(
      (el) => el.viewType.toLowerCase() === this.viewtype.toLowerCase()
    );

    if (bc.length) {
      const cm: BaseComponent = bc[0];
      let Component: any;

      if (cm.documentType === 'lazy') {
        Component = await cm.component;
      } else {
        Component = cm.component;
      }

      this.contentPortal = new ComponentPortal(Component);
    }
  }
}
