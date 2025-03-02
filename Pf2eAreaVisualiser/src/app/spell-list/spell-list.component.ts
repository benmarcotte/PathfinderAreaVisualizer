import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellComponent } from '../spell-entry/spell-entry.component';
import { Spell } from '../spell';
import { SpellService } from '../spell.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, SpellComponent, FormsModule ],
  template: `
    <section>
      <form>
        <input 
          type="text" 
          placeholder="Search for a spell..."
          id="filter-text-box"
          [(ngModel)]="searchText"
          (ngModelChange)="onFilterBoxChagned()" 
          [ngModelOptions]="{standalone: true}"/>
      </form>
    </section>
    <section class="results">
      <app-spell 
      *ngFor="let spell of filteredSpellList"
      [spell]="spell">
      </app-spell>
    </section>
  `,
  styleUrl: './spell-list.component.css'
})
export class SpellListComponent {
  spellList: Spell[] = [];
  spellService: SpellService = inject(SpellService);
  filteredSpellList: Spell[] = [];
  searchText: any;
  
  onFilterBoxChagned() {
    if (this.searchText != ""){
      this.spellService.getSpellsByKey(this.searchText).then((filteredSpellList: Spell[]) => {
        this.filteredSpellList = filteredSpellList
      });
    }
    else this.filteredSpellList = [];
  }
}
