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
      <a [routerLink]="['/']" class="heading">
        <header>
          Pathfinder 2e Area Visualiser
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
  title = 'Visualiser';
}
