import { Component, Input } from '@angular/core';
import { Spell } from '../spell';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing">
    <h2 class="listing-heading">{{ spell.name }}</h2>
    <p class="listing-location">{{ spell.value }}-foot {{spell.area }}</p>
  </section>
  `,
  styleUrls: ['./spell-entry.component.css'],
})
export class SpellComponent {
  @Input() spell!: Spell
}

//<a [routerLink]="['/details', spell.name]">Learn More</a>