import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterModule
    ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Visailiser';
}
