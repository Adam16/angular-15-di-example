import { Type, InjectionToken } from '@angular/core';

export type BaseComponentTypes = 'lazy' | 'static';

export interface BaseComponent {
  get viewType(): string;
  get documentType(): BaseComponentTypes;
  get metadata(): string;

  component: Type<unknown> | Promise<Type<unknown>>;
}

export const BASE_COMPONENTS = new InjectionToken<BaseComponent[]>(
  'BaseComponents'
);
