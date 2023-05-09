import { Type, InjectionToken } from '@angular/core';

// This is an example of how to create a registry for classes implementing a specific interface
// and use Angular's dependency injection system

export type BaseComponentTypes = 'lazy' | 'static';
export type ContentComponent = Type<unknown> | Promise<Type<unknown>>;

export interface BaseComponent {
  get viewType(): string;
  get documentType(): BaseComponentTypes;
  get metadata(): string;

  component: ContentComponent;
}

export const BASE_COMPONENTS = new InjectionToken<BaseComponent[]>(
  'BaseComponents'
);
