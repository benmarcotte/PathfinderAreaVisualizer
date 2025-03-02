import { Component, Input } from '@angular/core';
import { Spell } from '../spell';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="spell">
    <h2 class="spell-heading">{{ spell.name }}</h2>
    <p class="spell-entry">{{ spell.value }}-foot {{spell.area }}</p>
    <a [routerLink]="['/', spell.name]">Learn More</a>
  </section>
  `,
  styleUrls: ['./spell-entry.component.css'],
})
export class SpellComponent {
  @Input() spell!: Spell
}
