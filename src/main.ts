import 'zone.js/dist/zone';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BaseComponent, BASE_COMPONENTS } from './ui';
import { IncludeComponent } from './ui/components/dynamic.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, IncludeComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <include viewtype="teaser" contenttype="Teaser.Type" />
    <include viewtype="article" contenttype="Article.Type" />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
